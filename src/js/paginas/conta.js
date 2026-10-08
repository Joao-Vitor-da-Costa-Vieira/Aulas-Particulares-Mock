import listaDeAulas from '../dadosMockados/dadosMockados'
import { sessao, changeUsuarioTipo } from '../sessao/sessao'

function conta(app){
    if(sessao.usuarioTipo === "professor") {
        app.innerHTML = `
            
        `
        alterarUsuario(app)
    } else {
        app.innerHTML = `
            
        `
        alterarUsuario(app)
    }
}

function alterarUsuario(app){
    const botao = app.querySelector("#botao-sair")
    botao.addEventListener("click", function(){
        changeUsuarioTipo()
    })
}

export default {
    url: "#conta",
    label: "Conta",
    icon: "person",
    pagina: conta
}