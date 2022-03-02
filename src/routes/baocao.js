const express = require('express')
const router = express.Router()
const baocaoController = require('../app/controller/BaocaoController')

router.get('/', baocaoController.index)

module.exports = router;