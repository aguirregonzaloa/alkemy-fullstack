const { Sequelize } = require('sequelize');

const config = require('./config/database');
const dotenv = require('dotenv');
dotenv.config();

const { database, username, password, hostname, dialect } =
  config[process.env.NODE_ENV];

const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  dialect: dialect,
});

module.exports = sequelize;
