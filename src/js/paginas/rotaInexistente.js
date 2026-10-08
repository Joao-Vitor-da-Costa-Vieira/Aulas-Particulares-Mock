import { listaDeAulas } from '../dadosMockados/dadosMockados'
function rotaInexistente(app){
    app.innerHTML = `
        
    `
    adicionarEvento(app)
}

export default {
    url: "#rotaInexistente",
    label: "",
    icon: "error",
    pagina: rotaInexistente
}