/**
 * @author Noemy García
 * @module controllers/auth_controller
 * @exports nea
 * @namespace Neas
 */


const User = require('../models/sql/user_model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {app: {SECRET, JWT_EXPIRATION}} = require('../env_config');
const sendEmail = require("../utils/sendEmail");
const crypto = require('crypto');
const Op = require('sequelize').Op


/** Función que registra los usuarios en caso de no existir en la base de datos
 * @memberof Neas
 * @method register
 * @async
 * @param {Object} req Recibe en el req.body los datos de la nuevo user
 * @param {Object} res Respuesta con el nuevo user
 * @returns {JSON}
 * @throws {error}
 */
const register = async (req, res) => {
    const {firstName, lastName, email, password, confirmPassword} = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({message: 'Las contraseñas no coinciden'});
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({firstName, lastName, email, password:hashedPassword});
        return res.status(201).json({user});
    }catch (error) {
        return res.status(400).json({ message: error });
    }

}

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});
    if (!user) {
        return res.status(400).json({message: 'El usuario no existe'});
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({message: 'El usuario o la contraseña no son correctos'});
    }
    const token = await jwt.sign({
        data: user
    }, SECRET, { expiresIn: JWT_EXPIRATION });
    res.cookie('Authorization', token);
    return res.status(200).json({token});

}

const refresh = async (req, res) => {
    const token = req.headers.cookie.split('=')[1];

    if (!token) {
        return res.status(401).end()
    }

    let payload
    try {
        payload = jwt.verify(token, SECRET)
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            return res.status(401).end()
        }
        return res.status(400).end()
    }

    const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
    if (payload.exp - nowUnixSeconds > 30) {
        return res.status(400).json({message: 'Aun no es posible renovar el token'})
    }

    // Now, create a new token for the current user, with a renewed expiration time
    const newToken = await jwt.sign({
        data: payload.user
    }, SECRET, { expiresIn: JWT_EXPIRATION });

    // Set the new token as the users `token` cookie
    res.cookie("token", newToken)
    return res.status(200).json({token});
}

const sendResetPasswordEmail = async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({where: {email}});
    if (!user) {
        return res.status(200).json({message: 'Si el usuario existe en nuestra base de datos, se le ha enviado un correo para restablecer su contraseña'});
    }

    const {resetToken, hashedResetToken} = user.getResetPasswordToken();
    user.resetPasswordToken = hashedResetToken;
    user.resetPasswordExpire = Date.now()+10*60*1000
    await user.save();

    const resetUrl = `${req.protocol}://${req.get('host')}/api/astronomy/auth/resetPassword/${resetToken}`;
    const message = `Haz click en el siguiente enlace para restablecer tu contraseña: \n\n ${resetUrl}`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Password reset token',
            message
        })
        res.status(200).json({ success: true, data:'Email sent' });
    } catch (error) {
        console.log(error);
        user.getResetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save()
        res.status(500).json({ message: error });
    }

}

const resetPassword = async (req, res) => {

    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

    const user = await User.findOne({where: {
        resetPasswordToken,
        resetPasswordExpire: { [Op.gt]: Date.now() }
    }
    });

    if (!user) {
        return res.status(400).json({message: 'El token de restablecimiento de contraseña es invalido o ha expirado'});
    }
    if (req.body.password !== req.body.confirmPassword) {
        return res.status(400).json({message: 'Las contraseñas no coinciden'});
    }
    user.password = await bcrypt.hash(req.body.password, 10);
    user.resetPasswordToken = null;
    user.resetPasswordExpire = null;
    console.log(user);
    await user.save();

    res.status(200).json({message: 'Contraseña actualizada'});

}

const auth = {
    register,
    login,
    refresh,
    sendResetPasswordEmail,
    resetPassword
};

module.exports = auth;
