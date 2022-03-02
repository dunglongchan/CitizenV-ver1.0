const usera1 = require('../models/usera1')
const { mongooseToObject } = require('../../util/mongoose')

class QuanlitaikhoanController {
    index(req, res, next) {
        usera1.findOne({})
            .then(usera1 => {
                res.render('quanlitaikhoan', { usera1: mongooseToObject(usera1) })
            })
            .catch(next)
    }

}

module.exports = new QuanlitaikhoanController