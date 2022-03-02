const express = require('express')
const router = express.Router()
const thongkeController = require('../app/controller/ThongkeController')
const Scoure = require('../app/models/Scoure')


router.get("/:name", function(req, res) {
    const regex = new RegExp(req.params.name, 'i')
    Scoure.find({ name: regex }).then((result) => {
        res.status(200).json(result)
    })
})
router.get('/', thongkeController.index)

module.exports = router;