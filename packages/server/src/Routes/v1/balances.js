const Router = require('express');
const {
  getBalances,
  createBalance,
  getBalancesByUser,
} = require('../../Controllers/balance.controller');
const verifyToken = require('../../Middleware/auth.middleware');

const balancesRouter = Router();

balancesRouter.route('/').get(getBalances).post(createBalance);
balancesRouter.route('/byUser').post(verifyToken, createBalance);
balancesRouter.route('/byUser').get(verifyToken, getBalancesByUser);

module.exports = balancesRouter;
