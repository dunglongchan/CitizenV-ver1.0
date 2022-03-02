module.exports = {

    loginAuth(req, res, next) {
        var user = req.user
        res.locals.user = user
        next()
    },

}