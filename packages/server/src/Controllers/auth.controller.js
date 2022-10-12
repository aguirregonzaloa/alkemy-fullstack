const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const asyncWrapper = require('../Middleware/asyncWrapper');

exports.getUser = asyncWrapper(async (req, res, next) => {
  return res.status(200).json({ email: req.user.email });
});

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
    const error = new Error('Email is not registered');
    error.status = 401;
    return next(error);
  }
  const confirmedPassword = user.validPassword(password);
  if (!confirmedPassword) {
    const error = new Error('Email or password is incorrected');
    error.status = 403;
    return next(error);
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_TOKEN
  );

  return res.status(200).json({ token });
});
