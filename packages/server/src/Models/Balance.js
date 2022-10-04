const { DataTypes, Model } = require('sequelize');

const sequelize = require('../../db');

class Balance extends Model {}

Balance.init(
  {
    description: DataTypes.STRING,
    amount: {
      type: DataTypes.FLOAT,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['income' || 'outcome'],
    },
  },
  {
    sequelize,
    modelName: 'balance',
  }
);

module.exports = Balance;
