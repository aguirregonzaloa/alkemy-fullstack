const notFoundError = (req, res, next) => {
  const error = new Error(`Cannot find ${req.originalUrl} on this server`);
  error.status = 404;
  next(error);
};

module.exports = notFoundError;
