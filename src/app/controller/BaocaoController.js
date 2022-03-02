const scoure = require('../models/Scoure')

class BaocaoController {
    index(req, res, next) {
        scoure.find({})
            .then(scoures => {
                scoures = scoures.map(scoure => scoure.toObject())
                res.render('baocao', { scoures })
            })
            .catch(next)
            //res.render('home');
    }

}

module.exports = new BaocaoController