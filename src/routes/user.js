const express = require('express')
const router = express.Router()
const userController = require('../app/controller/UserController')
const { check, validationResult } = require('express-validator');
const passport = require('passport')

router.get('/', userController.login)

router.post('/', passport.authenticate("local.signin", {
    successRedirect: '/site', // Khi bạn điền đúng thông tin đăng nhập thì nó sẽ chuyển hướng bạn đến trang chủ
    failureRedirect: '/', // trở lại trang đăng nhập nếu có lỗi
    failureFlash: true,
    successFlash: 'Welcome!'
}));

module.exports = router;