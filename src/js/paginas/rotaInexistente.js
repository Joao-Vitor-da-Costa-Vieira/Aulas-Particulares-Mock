import listaDeAulas from '../dadosMockados/dadosMockados'
function rotaInexistente(app){
    app.innerHTML = `
        
    `
    adicionarEvento(app)
}

export default {
    url: "#rotaInexistente",
    label: "Rota Inexistente",
    icon: "error",
    pagina: rotaInexistente
}