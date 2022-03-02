const scoure = require('../models/Scoure')
const overview = require('../models/Overview')

class SiteController {
    index(req, res, next) {
        overview.find({})
            .then(overview => {
                overview = overview.map(overview => overview.toObject())
                res.render('home', { overview })
            })
            .catch(next)
            //res.render('home');
    }
    baocao(req, res) {
        res.render('baocao')
    }
    thongke(req, res) {
        res.render('thongke')
    }
    quanlinhaplieu(req, res) {
        res.render('quanlinhaplieu')
    }



    quanlitaikhoan(req, res) {
        res.render('quanlitaikhoan')
    }

}
module.exports = new SiteController