const mongoose = require('mongoose'); //Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
const config = require('./index');

const db = mongoose
  .connect(config.mongo_uri, {
    useNewUrlParser: true,
    useCreateIndex: true, //Lets me use teh
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to Database'))
  .catch(err => console.error('An error has occured', err));

module.exports = db; //epxort database
