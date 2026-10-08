import { listaDeAulas, listaDeTutores } from '../dadosMockados/dadosMockados'
import sessao from '../sessao/sessao'
import detalhe from './detalhe'

function resultados(app, { categoria, query } = {}) {
    const termo = query?.trim().toLowerCase() ?? ''

    const lista = listaDeAulas
        .filter(aula => !categoria || aula.categoria === categoria)
        .filter(aula => {
            if (!termo) return true
            const tutor = listaDeTutores.find(t => t.id === aula.tutorId)
            const nomeTutor = tutor?.nome.toLowerCase() ?? ''
            const nomeAula  = aula.nome.toLowerCase()
            return nomeAula.includes(termo) || nomeTutor.includes(termo)
        })

    if (sessao.usuarioTipo === "professor") {
        app.innerHTML = ``
        adicionarEvento(app)
        return
    }

    const titulo = termo
        ? `Resultados para "${query}"`
        : categoria
            ? categoria
            : "Todas as aulas"

    app.innerHTML = `
        <section class="pagina-resultados">
            <header class="resultados-header">
                <a href="#home" class="resultados-voltar">
                    <i data-lucide="arrow-left"></i>
                    Voltar
                </a>
                <h1 class="resultados-titulo">${titulo}</h1>
                <span class="resultados-contador">
                    ${lista.length} ${lista.length === 1 ? "aula encontrada" : "aulas encontradas"}
                </span>
            </header>

            ${lista.length === 0
                ? `<div class="resultados-vazio">
                       <p>Nenhuma aula nesta categoria nesta semana.</p>
                   </div>`
                : `<div class="resultados-lista">
                       ${lista.map(aula => {
                           const tutor = listaDeTutores.find(t => t.id === aula.tutorId)
                           return `
                               <div class="cartao">
                                   <p class="hidden">${aula.id}</p>
                                   <span class="cartao-categoria">${aula.categoria}</span>
                                   <h2 class="cartao-titulo">${aula.nome}</h2>
                                   <div class="cartao-info">
                                       <div class="cartao-info-linha">
                                           <i data-lucide="map-pin"></i>
                                           <span>${aula.local}</span>
                                       </div>
                                       <div class="cartao-info-linha">
                                           <i data-lucide="clock"></i>
                                           <span>${aula.horario}</span>
                                       </div>
                                       <div class="cartao-info-linha">
                                           <i data-lucide="user-round"></i>
                                           <span class="professor">Prof. ${tutor?.nome ?? "—"}</span>
                                       </div>
                                   </div>
                                   <div class="cartao-footer">
                                       <span class="cartao-preco">
                                           R$ ${aula.preco.toFixed(2).replace(".", ",")}
                                           <small>/ aula</small>
                                       </span>
                                       <span class="cartao-seta">
                                           <i data-lucide="arrow-right"></i>
                                       </span>
                                   </div>
                               </div>`
                       }).join("")}
                   </div>`
            }
        </section>`

    adicionarEvento(app)
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