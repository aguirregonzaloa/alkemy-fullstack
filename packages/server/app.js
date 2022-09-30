const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Routes
const v1Routes = require('./src/Routes');

app.use('/api/v1', v1Routes);

app.use('/', (req, res) => {
  res.send('it is a express backend');
});

module.exports = app;
