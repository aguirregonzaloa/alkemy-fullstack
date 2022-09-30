const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('it is a express backend');
});

module.exports = app;
