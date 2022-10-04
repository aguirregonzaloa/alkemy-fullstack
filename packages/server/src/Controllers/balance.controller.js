const Balance = require('../Models/Balance');

exports.getBalances = async (req, res) => {
  const balances = await Balance.findAll();

  return res.status(200).json({ balances });
};
