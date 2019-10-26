const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  forename: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // This breaks the code. Gotta figure a solution.
  },
  account_created: {
    type: String,
    default: Date.now()
  }
});

//userSchema.pre does this: before we save, do this:
userSchema.pre('save', function(next) {
  let user = this;

  if (!user.isModified('password')) return next(); //if its' hashed, returen next

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

//compare passwords
//cb = callback
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const userModel = mongoose.model('user', userSchema); //modles name is user. pass in the schema.

module.exports = userModel; //imports correctly through controller.
//
