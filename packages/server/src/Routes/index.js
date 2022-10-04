const Router = require('express');
const authRoute = require('./v1/auth');
const categoriesRoute = require('./v1/categories');
const balancesRoute = require('./v1/balances');

const v1Routes = Router();

v1Routes.use('/users', authRoute);
v1Routes.use('/categories', categoriesRoute);
v1Routes.use('/balances', balancesRoute);

module.exports = v1Routes;
