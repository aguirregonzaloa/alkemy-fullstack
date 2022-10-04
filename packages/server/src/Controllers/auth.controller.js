const User = require('../Models/User');

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });

    res.status(201).json({ user });
  } catch (e) {
    console.log(e);
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(400).json({ msg: 'User was not found' });

    return res.status(200).json({ user });
  } catch (e) {
    console.log(e);
  }
};
