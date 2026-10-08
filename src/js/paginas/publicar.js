import { listaDeAulas } from '../dadosMockados/dadosMockados'
import sessao from '../sessao/sessao'

function publicar(app){
    if(sessao.usuarioTipo === "professor") {
        app.innerHTML = `
            
        `
        adicionarEvento(app)
    } else{
        window.location.hash = "#rotaInexistente"
    }
}

export default {
    url: "#publicar",
    label: "Publicar",
    icon: "plus",
    pagina: publicar
}