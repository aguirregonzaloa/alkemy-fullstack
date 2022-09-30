const Router = require('express');
const authRoute = require('./v1/auth');

const v1Routes = Router();

v1Routes.use('/users', authRoute);

module.exports = v1Routes;
