const express = require('express')
const router = express.Router()
const quanlitaikhoanController = require('../app/controller/QuanlitaikhoanController')

router.get('/', quanlitaikhoanController.index)

module.exports = router;