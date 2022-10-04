const Category = require('../Models/Category');

exports.getCategories = async (req, res) => {
  const categories = await Category.findAll();

  return res.status(200).json({ categories });
};
