//APP SE ENCARGA DE ABRIR EL SERVIDOR Y DELEGAR EL REQUEST Y RESPONSE A LOS ENRUTADORES

const express = require('express')
const app = express()

const routerHome = require('./routes/homePage')
const routerVotadas = require('./routes/masVotadas')
const routerCartelera = require('./routes/cartelera')
const routersucursales = require('./routes/sucursales')
const routerPreguntasFrecuentes = require('./routes/preguntasFrecuentes')
const routerContacto = require('./routes/contacto')

app.listen(3030, () => console.log('Servidor corriendo en el puerto 3030'))

app.use('/', routerHome)
app.use('/en-cartelera', routerCartelera)
app.use('/mas-votadas', routerVotadas)
app.use('/sucursales', routersucursales)
app.use('/contacto', routerContacto)
app.use('/preguntas-frecuentes', routerPreguntasFrecuentes)



