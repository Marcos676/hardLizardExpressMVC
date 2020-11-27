const fs = require('fs')
let homePageController = require('./homePageController')

let faqss = {
    leerJSON: function () {
        return JSON.parse(fs.readFileSync('./data/faqs.json', 'utf-8'))
    },
    cantidad:function () {
        return `𝐓𝐎𝐏 ${faqss.leerJSON().total_faqs} 𝐃𝐄 𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀𝐒 𝐅𝐑𝐄𝐂𝐔𝐄𝐍𝐓𝐄𝐒:`
    },
    subtitulo: `🅟🅡🅔🅖🅤🅝🅣🅐🅢 🅕🅡🅔🅒🅤🅔🅝🅣🅔🅢`,

    lista: () => {
        let list = []
        faqss.leerJSON().faqs.forEach(preg => {
              list.push('--- '+preg.faq_title+' ---', preg.faq_answer,'','')
        })
        return list
    },
    
    mostrar: (req,res)=>{
        res.send({
            T: homePageController.titulo,
            s: faqss.subtitulo,
            e: '',
            c: faqss.cantidad(),
            l: faqss.lista()
        })
    }
}
module.exports = faqss