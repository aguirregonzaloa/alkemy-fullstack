const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

// Check whether we are in production env
const isProd = process.env.NODE_ENV === 'production';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

if (isProd) {
  // Compute the build path and index.html path
  const buildPath = path.resolve(__dirname, '../client/dist');
  const indexHtml = path.join(buildPath, 'index.html');

  // Setup build path as a static assets path
  app.use(express.static(buildPath));
  // Serve index.html on unmatched routes
  app.get('/', (req, res) => res.sendFile(indexHtml));
} else {
  app.get('/', (req, res) => {
    res.send('it is a express backend');
  });
}

//Routes
const v1Routes = require('./src/Routes');
const notFoundError = require('./src/Middleware/notFoundError');
const handleErrors = require('./src/Middleware/handleErrors');

app.use('/api/v1', v1Routes);

app.use(notFoundError);
app.use(handleErrors);

module.exports = app;
