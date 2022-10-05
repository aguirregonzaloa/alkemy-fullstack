const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Routes
const v1Routes = require('./src/Routes');
const throwErrors = require('./src/Middleware/throwErrors');
const handleErrors = require('./src/Middleware/handleErrors');

app.use('/api/v1', v1Routes);

// app.use('/', (req, res) => {
//   res.send('it is a express backend');
// });

app.use(throwErrors);
app.use(handleErrors);

module.exports = app;
