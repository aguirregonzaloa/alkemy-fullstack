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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 100],
          msg: 'name must be min 5 and max 100 characters',
        },
        notNull: {
          msg: 'name cannot be null',
        },
      },
    },
  },
  {
    sequelize,
    modelName: 'category',
    timestamps: false, //not save the date that when was created or updated
  }
);

//One-To-Many relationships
//From Category to Balance
//this means that Balance model has a foreign key from Category model
Category.hasMany(Balance);
Balance.belongsTo(Category);
//------------------------//
module.exports = Category;
