import  { listaDeAulas, listaDeTutores } from '../dadosMockados/dadosMockados'
import sessao from '../sessao/sessao'
import detalhe from './detalhe'

function resultados(app, {categoria, query}){

    const termo = query?.trim().toLowerCase() ?? ''
    const lista = categoria ? listaDeAulas
        .filter(aula => aula.categoria === categoria) : listaDeAulas
        .filter(aula => {
            if (!termo) return true
            const tutor = listaDeTutores.find(t => t.id === aula.tutorId)
            const nomeTutor = tutor?.nome.toLowerCase() ?? ''
            const nomeAula  = aula.nome.toLowerCase()
            return nomeAula.includes(termo) || nomeTutor.includes(termo)
    })

    if(sessao.usuarioTipo === "professor") {
        app.innerHTML = `
        `

        adicionarEvento(app)
    } else {
        const titulo = termo
        ? `Resultados para "${query}"`
        : categoria
            ? categoria
            : "Todas as aulas"

        app.innerHTML = `
            <h1>${titulo}</h1>
            ${ 
                lista.length === 0 ? "<p>Nenhuma aula nesta categoria nesta semana.</p>" : lista.map(aula=>`<div class="cartao">
                    <p class="hidden">${aula.id}</p>
                    <h2>${aula.nome}</h2>
                    <p>${aula.local}</p>
                    <p>${aula.horario}</p>
                </div>`).join("") 
            }`
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