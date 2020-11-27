let homePageControllers = require('./homePageController')

let cartelera = {
    subtitulo: '🅔🅝  🅒🅐🅡🅣🅔🅛🅔🅡🅐',
    lista: ()=>{
        let list = []
        homePageControllers.leerJSON().movies.forEach(peli=>{
            list.push('---'+peli.title + '---', 'Sinopsis: ' + peli.overview,'',)
        })
        return list
    },
    mostrar: (req,res)=>{
        res.send({
            T: homePageControllers.titulo,
            S: cartelera.subtitulo,
            e: '',
            t: homePageControllers.totalPeliculas(),
            l: cartelera.lista()
        })
    }
}

module.exports = cartelera