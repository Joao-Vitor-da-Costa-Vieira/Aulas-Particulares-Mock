import listaDeAulas from '../dadosMockados/dadosMockados'
import sessao from '../sessao/sessao'

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

export default {
    url: "#resultados",
    label: "",
    icon: "search",
    pagina: resultados
}