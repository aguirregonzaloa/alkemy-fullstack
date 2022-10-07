const asyncWrapper = require('../Middleware/asyncWrapper');
const Category = require('../Models/Category');

exports.getCategories = asyncWrapper(async (req, res) => {
  const categories = await Category.findAll();

  return res.status(200).json({ categories });
});

exports.createCategories = asyncWrapper(async (req, res) => {
  const { name } = req.body;

  const category = await Category.create({ name });

  res.status(201).json({ category });
});
