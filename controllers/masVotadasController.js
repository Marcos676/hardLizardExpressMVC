let homePageControllers = require('./homePageController')

let votadas = {
    subtitulo: `🅜🅐🅢 🅥🅞🅣🅐🅓🅐🅢`,
    masVotadas: function () {
        let peliculas = homePageControllers.leerJSON().movies
        return masVot = peliculas.filter(peli => {
            return peli.vote_average >= 7
        })
    },
    total: ()=> {
        return `𝐓𝐎𝐏 ${votadas.masVotadas().length} 𝐃𝐄 𝐋𝐀𝐒 𝐌𝐄𝐉𝐎𝐑𝐄𝐒 𝐏𝐄𝐋𝐈𝐂𝐔𝐋𝐀𝐒`
    },
    rating: ()=> {
        let valor = votadas.masVotadas().map(peli => peli.vote_average)
        let promedio = valor.reduce((acum, val) => acum + val)
        return '𝐋𝐚 𝐯𝐚𝐥𝐨𝐫𝐚𝐜𝐢𝐨́𝐧 𝐠𝐞𝐧𝐞𝐫𝐚𝐥 𝐞𝐬: ' + (promedio / valor.length).toFixed(2)
    },
    lista : ()=>{
        let list = []
        votadas.masVotadas().forEach(peli=>{
            list.push('---'+peli.title + '---', 'Valoracion: ' + peli.vote_average, 'Sinopsis: ' + peli.overview,'',)
        })
        return list
    },
    mostrar: (req, res) => {
        res.send({
            T: homePageControllers.titulo,
            S: votadas.subtitulo,
            e: '',
            t: votadas.total(),
            r: votadas.rating(),
            l: votadas.lista()
        })
    }
}

module.exports = votadas