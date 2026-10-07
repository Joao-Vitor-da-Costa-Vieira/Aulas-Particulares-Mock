import listaDeAulas from '../dadosMockados/dadosMockados'

import sessao from '../sessao/sessao'

function detalhe(app){
    if(sessao.usuarioTipo === "professor") {
        app.innerHTML = `

        `

        adicionarEvento(app)
    } else {
        app.innerHTML = `
            
        `
        
        adicionarEvento(app)
    }
}

export default {
    url: "#detalhe",
    label: "Detalhes",
    icon: "info",
    pagina: detalhe
}