const express = require('express')
const router = express.Router()
const quanlinhaplieuController = require('../app/controller/QuanlinhaplieuController')

router.get('/:code', quanlinhaplieuController.quanlithongtin)
router.post('/', quanlinhaplieuController.submit)
router.get('/', quanlinhaplieuController.index)

module.exports = router;