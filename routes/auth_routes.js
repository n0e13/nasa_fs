const routes = require('express').Router();

const {
   register,
    login,
    refresh,
    sendResetPasswordEmail,
    resetPassword
} = require('../controllers/auth_controller');

routes.post('/register', register);
routes.post('/login', login);
routes.post('/refresh', refresh);
routes.post('/forgotPassword', sendResetPasswordEmail);
routes.put('/resetPassword/:token', resetPassword);

module.exports = routes;
