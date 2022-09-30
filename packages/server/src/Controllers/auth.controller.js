exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;

  const user = { name, email, password };

  res.status(201).json({ user });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = { email, password };

  res.status(200).json({ user });
};
