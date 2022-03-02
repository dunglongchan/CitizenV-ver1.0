const UserA1 = require('../models/user')

const { validationResult } = require('express-validator');

class UserController {
    login(req, res, next) {
        res.render('login')
    }
}

module.exports = new UserController;