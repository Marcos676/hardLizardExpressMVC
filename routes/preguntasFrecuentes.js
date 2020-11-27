const express = require('express')
const router = express.Router()

const preguntasFrecuentesController = require('../controllers/preguntasFrecuentesController')


router.get('/',preguntasFrecuentesController.mostrar) 


module.exports = router