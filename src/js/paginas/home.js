import resultados from './resultados'

function home(app){
    app.innerHTML = `

        <div class="container-home">
            <h2>Radar de Tutores</h2>
            <p class="subtitulo-home"> O que Você quer Comprar mais barato?</p>
            <div class="grupo-input">
            <label for="input-home"><i data-lucide="search" id="icone-home"></i> </label>
                <input 
                    type="text" 
                    id="input-home" 
                    placeholder="Aulas ou Professores"
                    aria-label="campo de busca de aulas ou professores"
                >
                <button id="btn-home"> 
                    <i data-lucide="arrow-right"></i>
                </button>
                
            </div>
            <p class="home-atencao">Preços da semana de 10 a 16 de agosto, enviado por que mestá no mercado</p>
            <div class="categorias-home">
                <p>Categoria</p>
                <ul class="categoria-lista">
                    <li class="lista-categoria">
                        Mercearia
                    </li>
                    <li class="lista-categoria">
                        Carnes
                    </li>
                    <li class="lista-categoria">
                        Hortifrúti
                    </li>
                    <li class="lista-categoria">
                        Bebidas
                    </li>
                    <li class="lista-categoria">
                        Limpeza
                    </li>
                    <li class="lista-categoria">
                        Higiene
                    </li>
                </ul>
            </div>

        </div>
        
    `
    adicionarEvento(app)
}

function adicionarEvento(app){
    const botaoHome = document.getElementById("btn-home")
    const listaCategoria = document.querySelectorAll(".lista-categoria")
    botaoHome.addEventListener("click",()=>{
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