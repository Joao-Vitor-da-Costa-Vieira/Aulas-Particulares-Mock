import listaDeAulas from '../dadosMockados/dadosMockados'
import sessao from '../sessao/sessao'
import detalhe from './detalhe'

function resultados(app, categoria){
    
const lista = categoria ? listaDeAulas.filter(aula => aula.categoria === categoria) : listaDeAulas

    if(sessao.usuarioTipo === "professor") {
        app.innerHTML = `
        `

        adicionarEvento(app)
    } else {
        app.innerHTML = `
            <h1>${categoria ? categoria : "Todos as aulas"}</h1>
            ${ 
                lista.length === 0 ? "<p>Nenhuma aula nesta categoria nesta semana.</p>" : lista.map(aula=>`<div class="cartao">
                    <p class="hidden">${aula.id}</p>
                    <h2>${aula.nome}</h2>
                    <p>${aula.local}</p>
                    <p>${aula.horario}</p>
                </div>`).join("") 
            }`
        adicionarEvento(app)
        location.hash = "#resultados"
        adicionarEvento(app)
    }
}

function adicionarEvento(app){
    const cartoes = app.querySelectorAll(".cartao")
    cartoes.forEach(cartao => {
        cartao.addEventListener("click", () => {
            const id = cartao.querySelector("p").textContent
            detalhe.pagina(app, id)
        })
    })
}

export default {
    url: "#resultados",
    label: "",
    icon: "search",
    pagina: resultados
}