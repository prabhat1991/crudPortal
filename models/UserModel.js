const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let User = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  display_name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  active: {
    type: Boolean
  }
}, {
    collection: 'users'
  });

module.exports = mongoose.model('User', User);