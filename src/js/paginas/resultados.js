import dadosMockados from '../dadosMockados/dadosMockados'
function resultados(app){
    app.innerHTML = `
        
    `
    adicionarEvento(app)
}

export default {
    url: "#resultados",
    label: "Resultados",
    icon: "search",
    pagina: resultados
}