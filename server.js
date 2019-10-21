const express = require('express');
const app = express();

const config = require('./config'); //goes to the config index.js file
const db = require('./config/database');

app.listen(
  config.port,
  console.log('Server has started on http://localhost:%s', config.port) //pulls up the port
);
