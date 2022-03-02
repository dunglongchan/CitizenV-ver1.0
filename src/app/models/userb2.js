const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserB2 = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});


module.exports = mongoose.model('UserB2', UserB2)