const Router = require('express');
const {
  registerUser,
  loginUser,
} = require('../../Controllers/auth.controller');
const verifyToken = require('../../Middleware/auth.middleware');

const authRoute = Router();

authRoute.get('/', verifyToken, (req, res) => {
  res
    .status(200)
    .json({ data: { email: req.user.email, userId: req.user.id } });
});

authRoute.route('/register').post(registerUser);
authRoute.route('/login').post(loginUser);

module.exports = authRoute;
