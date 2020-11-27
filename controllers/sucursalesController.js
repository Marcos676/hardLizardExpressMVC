const fs = require('fs')
let homePageControllers = require('./homePageController')

let sucursales = {
    leerJSON: function () {
        return JSON.parse(fs.readFileSync('./data/theaters.json', 'utf-8'))
    },
    cantidad:function () {
        return `𝐀𝐂𝐓𝐔𝐀𝐋𝐌𝐄𝐓𝐄 𝐂𝐎𝐍𝐓𝐀𝐌𝐎𝐒 𝐂𝐎𝐍 ${sucursales.leerJSON().total_theaters} 𝐒𝐀𝐋𝐀𝐒`
    },
    listado: () => {
        let salas = []
        sucursales.leerJSON().theaters.forEach(sucursal => {
              salas.push('--- '+sucursal.name+' ---','Direccion: '+sucursal.address,'Descripcion: '+sucursal.description,'','')
        })
        return salas
    },
    subtitulo: `🅝🅤🅔🅢🅣🅡🅐🅢 🅢🅐🅛🅐🅢`,

    mostrar: (req,res)=>{
        res.send({
            T: homePageControllers.titulo,
            S: sucursales.subtitulo,
            e: '',
            c: sucursales.cantidad(),
            l: sucursales.listado()
        })
    }
}
module.exports = sucursales