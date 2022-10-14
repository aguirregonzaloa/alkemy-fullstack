const asyncWrapper = require('../Middleware/asyncWrapper');
const Balance = require('../Models/Balance');
const User = require('../Models/User');
const Category = require('../Models/Category');

exports.getBalances = asyncWrapper(async (req, res) => {
  const balances = await Balance.findAll({
    include: [
      { model: User, attributes: ['username'] },
      { model: Category, attributes: ['name'] },
    ],
  });

  return res.status(200).json({ balances });
});

exports.getBalance = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const balance = await Balance.findOne({ where: { id } });

  return res.status(200).json({ balance });
});

exports.createBalance = asyncWrapper(async (req, res) => {
  const { description, amount, type, categoryId } = req.body;
  console.log('Create BALANCES');
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

exports.editBalanceByUser = asyncWrapper(async (req, res) => {
  const { description, amount, type, categoryId } = req.body;
  const { id } = req.params;

  const balance = await Balance.findOne({ where: { id } });

  const userId = req.user?.id;

  const updateBalance = await balance.update({
    description,
    amount,
    type,
    userId,
    categoryId,
  });

  return res.status(201).json({ updateBalance });
});

exports.getBalancesByUser = asyncWrapper(async (req, res) => {
  const { id } = req.user;
  console.log('GETALLBALANCES');
  const balances = await Balance.findAll({
    where: { userId: id },
    include: [{ model: Category, attributes: ['name'] }],
  });

  return res.status(200).json({ balances });
});
