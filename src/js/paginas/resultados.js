import listaDeAulas from '../dadosMockados/dadosMockados'

function resultados(app){
const lista = categoria ? listaDeAulas.filter(aula => aula.categoria === categoria) : listaDeAulas
  app.innerHTML = `
    <h1>${categoria ? categoria : "Todos as aulas"}</h1>
    ${ 
        lista.length === 0 ? "<p>Nenhuma aula nesta categoria nesta semana.</p>" : lista.map(cartao).join("") 
     }`
        adicionarEvento(app)
        location.hash = "#resultados"
    adicionarEvento(app)
}

export default {
    url: "#resultados",
    label: "",
    icon: "search",
    pagina: resultados
}