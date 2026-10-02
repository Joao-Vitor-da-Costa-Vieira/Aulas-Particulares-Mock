import listaDeAulas from '../dadosMockados/dadosMockados'
function conta(app){
    app.innerHTML = `
        
    `
    adicionarEvento(app)
}

export default {
    url: "#conta",
    label: "Conta",
    icon: "person",
    pagina: conta
}