import listaDeAulas from '../dadosMockados/dadosMockados'

import sessao from '../sessao/sessao'

function detalhe(app, id){
    const aula = listaDeAulas.find(a => a.id === parseInt(id))
    if(sessao.usuarioTipo === "professor") {
        app.innerHTML = `

        `

        adicionarEvento(app)
    } else {
        app.innerHTML = `
            <h1>${aula.nome}</h1>
            <p>${aula.local}</p>
            <p>${aula.horario}</p>
            <p>R$ ${aula.preco.toFixed(2)}</p>
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