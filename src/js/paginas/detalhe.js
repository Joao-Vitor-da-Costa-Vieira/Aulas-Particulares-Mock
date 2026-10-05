import listaDeAulas from '../dadosMockados/dadosMockados'
function detalhe(app){
    app.innerHTML = `
        
    `
    adicionarEvento(app)
}

export default {
    url: "#detalhe",
    label: "Detalhes",
    icon: "info",
    pagina: detalhe
}