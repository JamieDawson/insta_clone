const express = require('express');
const app = express();

const config = require('./config'); //goes to the config index.js file
const db = require('./config/database');

const userRouter = require('./routes/user');

//req. Request you're oging to make
//res. Result you're goin to send
const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(express.urlencoded({ extended: true })); //starting middleware. helps pass form data
app.use(express.json()); //help pass json
app.use(cors); //allows us to connect app to server much easier.

app.use('/user', userRouter); // controller.js, index.js, and model.js

app.listen(
  config.port,
  console.log('Server has started on http://localhost:%s', config.port) //pulls up the port
);
