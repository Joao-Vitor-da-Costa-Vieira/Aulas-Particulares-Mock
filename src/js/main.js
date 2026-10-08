import { createIcons, icons } from 'lucide';
import { mapaderotas } from './rotas/rotas.js'
import { navbar } from './navbar/navbar.js'

const app = document.getElementById("app")
navbar(mapaderotas)

function renderizarPagina() {
    const hash = window.location.hash || '#home'
    const [rotaUrl, queryString] = hash.split('?')
    const params = new URLSearchParams(queryString || '')

    const rota = mapaderotas.find(tela => tela.url === rotaUrl)
    if (rota) {
        rota.pagina(app, {
            categoria: params.get('cat'),
            query: params.get('query'),
        })
        createIcons({ icons });
    }
}

window.addEventListener("hashchange", ()=>{
    renderizarPagina()
})

renderizarPagina()
createIcons({ icons });
