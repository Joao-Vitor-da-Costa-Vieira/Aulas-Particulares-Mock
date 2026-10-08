import resultados from './resultados'

import sessao from '../sessao/sessao'

function home(app){

    if(sessao.usuarioTipo === "professor") {
        app.innerHTML = `
            <div class="container-home">
            `

            adicionarEvento(app)
    } else {
        app.innerHTML = `

            <div class="container-home">
                <div class="home-title">
                    <h2 class="titulo-home">Aulas Disponíveis</h2>
                    <p class="subtitulo-home"> Procurando algo mais especifíco?</p>
                </div>
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
                <div class="home-atencao-div">
                    <p class="home-atencao">Todas as Aulas enviadas na Semana</p>
                </div>
                <div class="categorias-home">
                    <p class="subtitulo-home">Categoria</p>
                    <ul class="categoria-lista">
                        <li class="lista-categoria">
                            Matemática
                        </li>
                        <li class="lista-categoria">
                            Português
                        </li>
                        <li class="lista-categoria">
                            Inglês
                        </li>
                        <li class="lista-categoria">
                            História
                        </li>
                        <li class="lista-categoria">
                            Fisíca
                        </li>
                        <li class="lista-categoria">
                            Química
                        </li>
                    </ul>
                </div>

            </div>
            
        `
        adicionarEvento(app)
    }
}

function adicionarEvento(app){
    const botaoHome = document.getElementById("btn-home")
    const inputHome = document.getElementById("input-home")
    const listaCategoria = document.querySelectorAll(".lista-categoria")

    function buscar() {
        const termo = inputHome.value.trim()
        if (!termo) return
        window.location.hash = `#resultados?query=${encodeURIComponent(termo)}`
    }

    botaoHome.addEventListener("click", buscar)

    botaoHome.addEventListener("click",()=>{
       resultados.pagina(app)
    })
    
    listaCategoria.forEach(item => item.addEventListener("click", ()=>{
            const cat = item.textContent.trim()
            window.location.hash = `#resultados?cat=${encodeURIComponent(cat)}`
    }))
}

export default {
    url: "#home",
    label: "Home",
    icon: "home",
    pagina: home
}