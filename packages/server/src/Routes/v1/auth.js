const Router = require('express');
const {
  registerUser,
  loginUser,
} = require('../../Controllers/auth.controller');

const authRoute = Router();

authRoute.get('/', (req, res) => {
  res.status(200).json({ data: { email: 'example.com', username: 'example' } });
});

authRoute.route('/register').post(registerUser);
authRoute.route('/login').post(loginUser);

module.exports = authRoute;
