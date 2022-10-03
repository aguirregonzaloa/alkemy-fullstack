const { Sequelize } = require('sequelize');

const config = require('./config/database');

const { database, username, password, hostname, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  dialect: dialect,
});

module.exports = sequelize;
