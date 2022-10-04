const Router = require('express');
const { getCategories } = require('../../Controllers/category.controller');

const balancesRouter = Router();

balancesRouter.route('/').get(getCategories);

module.exports = balancesRouter;
