const { DataTypes, Model } = require('sequelize');

const sequelize = require('../../db');

class Balance extends Model {}

Balance.init(
  {
    description: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 100],
          msg: 'description must be min 3 and max 100 characters',
        },
      },
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['income', 'outcome'],
      validate: {
        isIn: {
          args: [['income', 'outcome']],
          msg: 'Must be income or outcome',
        },
      },
    },
  },
  {
    sequelize,
    modelName: 'balance',
  }
);

module.exports = Balance;
