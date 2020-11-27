
const express = require('express')
const router = express.Router()

const homePageController = require('../controllers/homePagecontroller')


router.get('/',homePageController.mostrar) 


module.exports = router