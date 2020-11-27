const fs = require('fs')

let homePage = {
    leerJSON: function () {
        return JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8')) // EN ESTE CASO EN CARTICULAR. COMO EL SERVIDOR COMIENZA DESDE APP.JS(entry point) SE PONE LA RUTA DEL ARCHIVO A BUSCAR DESDE LA UBICACION DEL ENTRY POINT (por esa razon no comienza con ../ para salir de la carpeta primero como se haria normalmente)
    },
    titulo: `🅳🅷 🅼🅾🆅🅸🅴🆂`,

    subtitulo: `𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨𝐬 𝐚 𝐃𝐇 𝐌𝐨𝐯𝐢𝐞𝐬 𝐞𝐥 𝐦𝐞𝐣𝐨𝐫 𝐬𝐢𝐭𝐢𝐨 𝐩𝐚𝐫𝐚 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫 𝐥𝐚𝐬 𝐦𝐞𝐣𝐨𝐫𝐞𝐬 𝐩𝐞𝐥𝐢́𝐜𝐮𝐥𝐚𝐬, 𝐢𝐧𝐜𝐥𝐮𝐬𝐨 𝐦𝐮𝐜𝐡𝐨 𝐦𝐞𝐣𝐨𝐫 𝐪𝐮𝐞 𝐍𝐞𝐭𝐟𝐥𝐢𝐱, 𝐂𝐮𝐞𝐯𝐚𝐧𝐚 𝐲 𝐏𝐨𝐩𝐂𝐨𝐫𝐧.`,
    totalPeliculas: function () {
        return '𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐩𝐞𝐥𝐢𝐜𝐮𝐥𝐚𝐬: ' + homePage.leerJSON().total_movies
    },
    listado: function () {
        let orden = homePage.leerJSON().movies.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0)
        let peliculas = []
        orden.forEach(movie => {
              peliculas.push('+  '+movie.title)
        })
        return peliculas
    },
    pie: ['Recorda que podes visitar las secciones:', '- En cartelera', '- Mas votadas', '- Sucursales', '- Contacto', '- Preguntas frecuentes'],
    
    mostrar : (req,res)=>{
        res.send({
             T : homePage.titulo,
             S : homePage.subtitulo,
             e: '',
             t : homePage.totalPeliculas(),
             P : homePage.listado(),
             p : homePage.pie
           })
    }
}
module.exports = homePage
