const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('it is a express backend');
});

//Routes
const v1Routes = require('./src/Routes');
const notFoundError = require('./src/Middleware/notFoundError');
const handleErrors = require('./src/Middleware/handleErrors');

app.use('/api/v1', v1Routes);

app.use(notFoundError);
app.use(handleErrors);

module.exports = app;
