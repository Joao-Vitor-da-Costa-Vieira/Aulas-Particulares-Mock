import listaDeAulas from '../dadosMockados/dadosMockados'
function publicar(app){
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
    url: "#publicar",
    label: "Publicar",
    icon: "add",
    pagina: publicar
}