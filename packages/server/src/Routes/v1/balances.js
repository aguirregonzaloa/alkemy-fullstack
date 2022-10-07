const Router = require('express');
const {
  getBalances,
  createBalance,
} = require('../../Controllers/balance.controller');
const verifyToken = require('../../Middleware/auth.middleware');

const balancesRouter = Router();

balancesRouter.route('/').get(getBalances).post(createBalance);
balancesRouter.route('/byUser').post(verifyToken, createBalance);

module.exports = balancesRouter;
