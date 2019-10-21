const mongoose = require('mongoose');
const config = require('./index');

const db = mongoose
  .connect(config.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to Database'))
  .catch(err => console.error('An error has occured', err));

module.exports = db; //epxort database
