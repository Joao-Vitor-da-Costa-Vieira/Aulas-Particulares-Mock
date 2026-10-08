import { listaDeAulas, listaDeTutores } from '../dadosMockados/dadosMockados'

import sessaoModule from '../sessao/sessao'
const { sessao } = sessaoModule

function detalhe(app, id){
    const aula = listaDeAulas.find(a => a.id === parseInt(id))
    const tutor = listaDeTutores.find(t => t.id === aula.tutorId)
    if(sessao.usuarioTipo === "professor") {
        app.innerHTML = `
            <div class="detalhe-container">
                <header class="detalhe-header">
                    <span class="detalhe-categoria">${aula.categoria}</span>
                </header>

                <section class="detalhe-hero">
                    <h1 class="detalhe-titulo">${aula.nome}</h1>
                </section>

                <section class="detalhe-professor">
                    <div class="detalhe-professor-avatar">
                        <i data-lucide="user-round"></i>
                    </div>
                    <div class="detalhe-professor-info">
                        <span class="detalhe-professor-nome">${tutor.nome}</span>
                        <span class="detalhe-professor-disciplina">${tutor.disciplina} • ${tutor.idade} anos</span>
                        <span class="detalhe-professor-horas">${tutor.horasLecionadas}h lecionadas</span>
                    </div>
                </section>

                <section class="detalhe-info">
                    <div class="detalhe-info-item">
                        <i data-lucide="map-pin"></i>
                        <div>
                            <span class="detalhe-info-label">Local</span>
                            <span class="detalhe-info-valor">${aula.local}</span>
                        </div>
                    </div>
                    <div class="detalhe-info-item">
                        <i data-lucide="clock"></i>
                        <div>
                            <span class="detalhe-info-label">Horário</span>
                            <span class="detalhe-info-valor">${aula.horario}</span>
                        </div>
                    </div>
                    <div class="detalhe-info-item">
                        <i data-lucide="dollar-sign"></i>
                        <div>
                            <span class="detalhe-info-label">Preço</span>
                            <span class="detalhe-info-valor">R$ ${aula.preco.toFixed(2)}</span>
                        </div>
                    </div>
                </section>
            </div>
        `

        adicionarEvento(app)
    } else {
        app.innerHTML = `
            <div class="detalhe-container">
                <header class="detalhe-header">
                    <span class="detalhe-categoria">${aula.categoria}</span>
                </header>

                <section class="detalhe-hero">
                    <h1 class="detalhe-titulo">${aula.nome}</h1>
                </section>

                <section class="detalhe-professor">
                    <div class="detalhe-professor-avatar">
                        <i data-lucide="user-round"></i>
                    </div>
                    <div class="detalhe-professor-info">
                        <span class="detalhe-professor-nome">${tutor.nome}</span>
                        <span class="detalhe-professor-disciplina">${tutor.disciplina} • ${tutor.idade} anos</span>
                        <span class="detalhe-professor-horas">${tutor.horasLecionadas}h lecionadas</span>
                    </div>
                </section>

                <section class="detalhe-info">
                    <div class="detalhe-info-item">
                        <i data-lucide="map-pin"></i>
                        <div>
                            <span class="detalhe-info-label">Local</span>
                            <span class="detalhe-info-valor">${aula.local}</span>
                        </div>
                    </div>
                    <div class="detalhe-info-item">
                        <i data-lucide="clock"></i>
                        <div>
                            <span class="detalhe-info-label">Horário</span>
                            <span class="detalhe-info-valor">${aula.horario}</span>
                        </div>
                    </div>
                    <div class="detalhe-info-item">
                        <i data-lucide="dollar-sign"></i>
                        <div>
                            <span class="detalhe-info-label">Preço</span>
                            <span class="detalhe-info-valor">R$ ${aula.preco.toFixed(2)}</span>
                        </div>
                    </div>
                </section>
            </div>
        `

        adicionarEvento(app)
    }
}

export default {
    url: "#detalhe",
    label: "",
    icon: "info",
    pagina: detalhe
}