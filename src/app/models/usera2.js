const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserA2 = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },

});


module.exports = mongoose.model('UserA2', UserA2)