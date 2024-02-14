const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const RegisterSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: uuidv4,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [100, 'name can not be more than 100 characters']
  },
  role: {
    type: String,
    enum: ['delegate admin','admin', 'user'],
    default: 'user'
  },
  paid: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: [true, 'must provide email'],
    unique: [true,'email was used before'],
    trim: true,
    lowercase: true
  },
  organisation: {
    type: String,
    required: [true, 'must provide organisation'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'must provide password'],
    minlength: [6, 'password must be at least 6 characters long']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Register', RegisterSchema);
