import dadosMockados from '../dadosMockados/dadosMockados'
function home(app){
    app.innerHTML = `
        
    `
    adicionarEvento(app)
}

function adicionarEvento(app){
    const botaoBusca = document.getElementById("btn-busca")
    const listaCategoria = document.querySelectorAll(".lista-categoria")
    botaoBusca.addEventListener("click",()=>{
       produtos.pagina(app)
    })
    
    listaCategoria.forEach(item => item.addEventListener("click", ()=>{
        produtos.pagina(app, item.textContent.trim())
    }))
}

export default {
    url: "#home",
    label: "home",
    icon: "home",
    pagina: home
}