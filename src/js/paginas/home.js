import resultados from './resultados'

function home(app){
    app.innerHTML = `
        
    `
    adicionarEvento(app)
}

function adicionarEvento(app){
    const botaoBusca = document.getElementById("btn-busca")
    const listaCategoria = document.querySelectorAll(".lista-categoria")
    botaoBusca.addEventListener("click",()=>{
       resultados.pagina(app)
    })
    
    listaCategoria.forEach(item => item.addEventListener("click", ()=>{
        resultados.pagina(app, item.textContent.trim())
    }))
}

export default {
    url: "#home",
    label: "Home",
    icon: "home",
    pagina: home
}