module.exports = {
  development: {
    database: process.env.DB_DEV_NAME || 'db_alkemy',
    username: process.env.DB_DEV_USER || 'root',
    hostname: process.env.DB_DEV_HOST || 'localhost',
    password: process.env.DB_DEV_PASSWORD || '',
    dialect: process.env.DB_DEV_DIALECT || 'mysql',
  },
  test: {
    database: process.env.DB_TEST_NAME || 'db_alkemy_test',
    username: process.env.DB_TEST_USER || 'root',
    hostname: process.env.DB_TEST_HOST || 'localhost',
    password: process.env.DB_TEST_PASSWORD || '',
    dialect: process.env.DB_TEST_DIALECT || 'mysql',
  },
};
