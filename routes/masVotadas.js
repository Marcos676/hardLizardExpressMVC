const express = require('express')
const router = express.Router()

const masVotadasController = require('../controllers/masVotadasController')


router.get('/',masVotadasController.mostrar) 


module.exports = router