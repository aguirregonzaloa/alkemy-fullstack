const asyncWrapper = require('../Middleware/asyncWrapper');
const Balance = require('../Models/Balance');

exports.getBalances = asyncWrapper(async (req, res) => {
  const balances = await Balance.findAll();

  return res.status(200).json({ balances });
});

exports.createBalance = asyncWrapper(async (req, res) => {
  const { description, amount, type, categoryId } = req.body;

  const userId = req.user?.id;

  const balance = await Balance.create({
    description,
    amount,
    type,
    userId,
    categoryId,
  });

  return res.status(201).json({ balance });
});
