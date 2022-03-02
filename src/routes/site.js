const express = require('express')
const router = express.Router()
const siteController = require('../app/controller/SiteController')


router.get('/quanlitaikhoan', siteController.quanlitaikhoan)
router.get('/quanlinhaplieu', siteController.quanlinhaplieu)
router.get('/thongke', siteController.thongke)
router.get('/baocao', siteController.baocao)
router.get('/', siteController.index)

module.exports = router