const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');
const Balance = require('./Balance');

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'user', // We need to choose the model name
  }
);

//One-To-Many relationships
//From User to Balance
//this means that Balance model has a foreign key from User model
User.hasMany(Balance);
Balance.belongsTo(User);

module.exports = User;
