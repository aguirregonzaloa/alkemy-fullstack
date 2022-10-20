const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    const error = new Error('A token is required for authentication');
    error.status = 403;
    return next(error);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;
  } catch (err) {
    const error = new Error('Invalid Token');
    error.status = 403;
    return next(error);
  }
  return next();
};

module.exports = verifyToken;
