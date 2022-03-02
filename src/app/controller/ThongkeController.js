const scoure = require('../models/Scoure')

class ThongkeController {
    index(req, res, next) {
        scoure.find({})
            .then(scoures => {
                scoures = scoures.map(scoure => scoure.toObject())
                res.render('thongke', { scoures })
            })
            .catch(next)
            //res.render('home');
    }

}

module.exports = new ThongkeController