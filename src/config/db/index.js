const mongoose = require('mongoose')


async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/database')
        console.log("success")
    } catch (error) {
        console.log("failed")
    }
}


module.exports = { connect }