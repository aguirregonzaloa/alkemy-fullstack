const handleErrors = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      msg: error.message,
    },
  });
};

module.exports = handleErrors;
