const Router = require('express');
const {
  getCategories,
  createCategories,
} = require('../../Controllers/category.controller');

const balancesRouter = Router();

balancesRouter.route('/').get(getCategories).post(createCategories);

module.exports = balancesRouter;
