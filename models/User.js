const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// NO pre-save hook - just save directly
UserSchema.methods.comparePassword = function(password) {
  return password === this.password;
};

module.exports = mongoose.model('User', UserSchema);