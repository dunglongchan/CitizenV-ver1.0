const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Overview = new Schema({
    province: String,
    province_code: String,
    citizen: String,
});

module.exports = mongoose.model('Overview', Overview)