const { Sequelize, DataTypes } = require('sequelize');
const { mysqlConfig } = require('../../env_config');
const sequelize = new Sequelize({...mysqlConfig});
const crypto = require('crypto');


const User = sequelize.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /^\S+@\S+\.\S+$/
        },
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    resetPasswordToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resetPasswordExpire: {
        type: DataTypes.BIGINT,
        allowNull: true
    }
});

User.prototype.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString('hex');
    const hashedResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    return {resetToken, hashedResetToken};
}

module.exports = User;

