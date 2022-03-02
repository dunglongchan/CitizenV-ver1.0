const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Scoure = new Schema({
    province: String,
    province_code: String,
    district: String,
    district_code: String,
    phuong: String,
    phuong_code: String,
    thon_code: String,
    name: String,
    birthday: String,
    sex: String,
    tongiao: String,
    cccd: { type: String, length: 12, require },
    hometown: String,
    regularAdd: String,
    tempAdd: String,
    education: String,
    job: String,
});

module.exports = mongoose.model('Scoure', Scoure)