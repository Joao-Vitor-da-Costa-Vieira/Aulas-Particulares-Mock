import { listaDeAulas } from '../dadosMockados/dadosMockados'

function rotaInexistente(app){
    app.innerHTML = `
        <div class="rota-inexistente">
            <div class="rota-inexistente-icone">
                <i data-lucide="compass"></i>
            </div>
            <h1 class="rota-inexistente-titulo">Página não encontrada</h1>
            <p class="rota-inexistente-texto">A rota que você tentou acessar não existe ou foi movida.</p>
            <button class="rota-inexistente-btn" id="botao-voltar-home">
                <i data-lucide="house"></i>
                Voltar para o início
            </button>
        </div>
    `
    adicionarEvento(app)
}

function adicionarEvento(app){
    const botao = app.querySelector("#botao-voltar-home")
    if(botao){
        botao.addEventListener("click", function(){
            window.location.hash = "#home"
        })
    }
}

export default {
    url: "#rotaInexistente",
    label: "",
    icon: "error",
    pagina: rotaInexistente
}