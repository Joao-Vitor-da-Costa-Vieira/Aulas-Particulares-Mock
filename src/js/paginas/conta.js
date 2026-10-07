import listaDeAulas from '../dadosMockados/dadosMockados'
import sessao from '../sessao/sessao'

function conta(app){
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
    url: "#conta",
    label: "Conta",
    icon: "person",
    pagina: conta
}