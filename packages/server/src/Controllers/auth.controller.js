const User = require('../Models/User');

exports.registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  const user = await User.create({ username, email, password });

  res.status(201).json({ user });
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    const error = new Error('User was not found');
    error.status = 401;
    return next(error);
  }

  if (user.password !== password) {
    const error = new Error('Email or password is incorrected');
    error.status = 403;
    return next(error);
  }

  return res.status(200).json({ user });
};
