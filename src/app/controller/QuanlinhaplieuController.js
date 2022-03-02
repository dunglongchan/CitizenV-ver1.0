const usera2 = require('../models/usera2')
const scoure = require('../models/Scoure')

class QuanlinhaplieuController {
    index(req, res, next) {
        usera2.find({})
            .then(usera2 => {
                usera2 = usera2.map(usera2 => usera2.toObject())
                res.render('quanlinhaplieu', { usera2 })
            })
            .catch(next)
            //res.render('home');
    }
    submit(req, res, next) {
        const scoure = new Scoure(req.body);
        scoure.save()
            .then(() => res.redirect('/quanlinhaplieu'))
            .catch()
    }
    quanlithongtin(req, res, next) {
        usera2.find({})
            .then(usera2 => {
                usera2 = usera2.map(usera2 => usera2.toObject())
                res.render('quanlithongtin', { usera2 })
            })
            .catch(next)
    }
}

module.exports = new QuanlinhaplieuController