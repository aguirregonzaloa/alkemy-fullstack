const Router = require('express');
const {
  getBalances,
  getBalance,
  createBalance,
  getBalancesByUser,
  editBalanceByUser,
} = require('../../Controllers/balance.controller');
const verifyToken = require('../../Middleware/auth.middleware');

const balancesRouter = Router();

balancesRouter.route('/').get(getBalances).post(createBalance);

balancesRouter
  .route('/byUser')
  .get(verifyToken, getBalancesByUser)
  .post(verifyToken, createBalance);

balancesRouter
  .route('/:id')
  .get(getBalance)
  .put(verifyToken, editBalanceByUser);

module.exports = balancesRouter;
