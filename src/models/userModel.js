const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures that userName is unique across users
  },
 
  password: {
    type: String,
    required: true,
  },
email: {
    type: String,
    required: true,
    unique: true, // Ensures that email is unique across users
    match: /.+\@.+\..+/ // Basic regex to validate email format
  },


  role: {
    type: String,
required: true,
    enum: ['admin','manager','user',], // Only allows 'admin' or 'user' as valid roles
    default: 'user', // Default role is 'user'
  },
  
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

module.exports = mongoose.model('User', userSchema);