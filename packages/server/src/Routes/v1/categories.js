const Router = require('express');
const {
  getCategories,
  createCategories,
} = require('../../Controllers/category.controller');
const verifyToken = require('../../Middleware/auth.middleware');

const categoriesRouter = Router();

categoriesRouter
  .route('/')
  .get(getCategories)
  .post(verifyToken, createCategories);

module.exports = categoriesRouter;
