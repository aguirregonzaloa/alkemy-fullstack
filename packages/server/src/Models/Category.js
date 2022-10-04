const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Balance = require('./Balance');

class Category extends Model {}
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'category',
  }
);

//One-To-Many relationships
//From Category to Balance
//this means that Balance model has a foreign key from Category model
Category.hasMany(Balance);
Balance.belongsTo(Category);
//------------------------//
module.exports = Category;
