const mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    username: String,
    googleID: String,
    refreshToken: String
});

const UsersAuth = mongoose.model('Users-Auth', userschema);

module.exports = { UsersAuth };