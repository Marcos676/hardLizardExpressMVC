const express = require('express')
const router = express.Router()

const carteleraController = require('../controllers/carteleraController')


router.get('/',carteleraController.mostrar) 


module.exports = router