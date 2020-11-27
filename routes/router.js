
const express = require('express')
const router = express.Router()

const homePage = require('./homePage')

//NO SE USA CUANDO TERMINE BORRAR ESTE ARCHIVO
//HomePage
router.get('/',homePage)
//Cartelera
router.get('/en-cartelera',(req,res)=> res.send('hola2'))
//Mas Votadas
router.get('/mas-votadas',(req,res)=> res.send('hola2'))
//Sucursales
router.get('/sucursales',(req,res)=> res.send('hola2'))
//Contacto
router.get('/contacto',(req,res)=> res.send('hola2'))
//Preguntas Frecuentes
router.get('/preguntas-frecuentes',(req,res)=> res.send('hola2'))



module.exports = router

