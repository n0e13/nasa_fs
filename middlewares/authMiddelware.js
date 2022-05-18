const jwt = require('jsonwebtoken');
const {app: {SECRET}} = require('../env_config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.cookie.split('=')[1];
        jwt.verify(token, SECRET)
        next();
    } catch {
        res.status(401).json({
            error: 'Invalid request!'
        });
    }
};
