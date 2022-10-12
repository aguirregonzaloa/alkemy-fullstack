const Router = require('express');
const {
  registerUser,
  loginUser,
  getUser,
} = require('../../Controllers/auth.controller');
const verifyToken = require('../../Middleware/auth.middleware');

const authRoute = Router();

authRoute.get('/me', verifyToken, getUser);

authRoute.route('/register').post(registerUser);
authRoute.route('/login').post(loginUser);

module.exports = authRoute;
