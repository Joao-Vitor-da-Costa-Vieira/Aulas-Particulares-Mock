import listaDeAulas from '../dadosMockados/dadosMockados'
function publicar(app){
    app.innerHTML = `
        
    `
    adicionarEvento(app)
}

export default {
    url: "#publicar",
    label: "Publicar",
    icon: "add",
    pagina: publicar
}