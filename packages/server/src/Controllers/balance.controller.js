const asyncWrapper = require('../Middleware/asyncWrapper');
const Balance = require('../Models/Balance');

exports.getBalances = asyncWrapper(async (req, res) => {
  const balances = await Balance.findAll();

  return res.status(200).json({ balances });
});

exports.createBalance = asyncWrapper(async (req, res) => {
  const { description, amount, type, userId, categoryId } = req.body;
  console.log(description, amount, type, userId, categoryId);
  let balance;

  // if (userId != undefined && categoryId != undefined) {
  console.log('with user and category');
  balance = await Balance.create({
    description,
    amount,
    type,
    userId,
    categoryId,
  });
  // } else if (userId !== undefined) {
  //   console.log('without category');
  //   balance = await Balance.create({ description, amount, type, userId });
  // } else if (categoryId !== undefined) {
  //   balance = await Balance.create({ description, amount, type, categoryId });
  // } else {
  //   console.log('without user and category');
  //   balance = await Balance.create({ description, amount, type });
  // }

  return res.status(201).json({ balance });
});
