const Router = require('express');
const { getBalances } = require('../../Controllers/balance.controller');

const balancesRouter = Router();

balancesRouter.route('/').get(getBalances);

module.exports = balancesRouter;
