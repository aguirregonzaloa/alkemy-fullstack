const User = require('../Models/User');
const asyncWrapper = require('../Middleware/asyncWrapper');

exports.registerUser = asyncWrapper(async (req, res, next) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user) {
    const error = new Error('Email is already registered');
    error.status = 400;
    return next(error);
  }

  await User.create({ username, email, password });

  res
    .status(201)
    .json({ msg: 'Registation was successfull. You can login now' });
});

exports.loginUser = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    const error = new Error('User was not found');
    error.status = 401;
    return next(error);
  }
  const confirmedPassword = user.validPassword(password);
  if (!confirmedPassword) {
    const error = new Error('Email or password is incorrected');
    error.status = 403;
    return next(error);
  }

  return res.status(200).json({ user });
});
