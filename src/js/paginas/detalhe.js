import dadosMockados from '../dadosMockados/dadosMockados'
function detalhe(app){
    app.innerHTML = `
        
    `
    adicionarEvento(app)
}

export default {
    url: "#detalhe",
    label: "Detalhe",
    icon: "info",
    pagina: detalhe
}