const Router = require('express');
const {
  getBalances,
  createBalance,
} = require('../../Controllers/balance.controller');

const balancesRouter = Router();

balancesRouter.route('/').get(getBalances).post(createBalance);

module.exports = balancesRouter;
