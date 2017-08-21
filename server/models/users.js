var mongoose = require('mongoose');

// User Model
var Users = mongoose.model('Users', {
    email: {
        type: String,
        trim: true,
        minLength: 1,
        required: true
    }
});

module.exports = { Users }