import { listaDeAulas, listaDeTutores, listaDeAlunos } from "../dadosMockados/dadosMockados.js";
import sessaoModule from "../sessao/sessao.js";

const { sessao, changeUsuarioTipo } = sessaoModule;

function conta(app) {
    if (sessao.usuarioTipo === "professor") {
        renderProfessor(app);
    } else {
        renderAluno(app);
    }
    adicionarEventos(app);
}

function renderProfessor(app) {
    const tutor = listaDeTutores.find(t => t.id === sessao.usuarioId) || listaDeTutores[0];
    const aulasDoTutor = listaDeAulas.filter(a => a.tutorId === tutor.id);

    app.innerHTML = `
        <div class="conta-container">
            <header class="conta-header">
                <div class="conta-avatar">
                    <i data-lucide="user-round"></i>
                </div>
                <h1 class="conta-nome">${tutor.nome}</h1>
                <span class="conta-tipo">Professor</span>
                <span class="conta-disciplina">${tutor.disciplina} • ${tutor.idade} anos</span>
            </header>

            <section class="conta-stats">
                <div class="conta-stat">
                    <i data-lucide="book-open"></i>
                    <span class="conta-stat-valor">${aulasDoTutor.length}</span>
                    <span class="conta-stat-label">Aulas</span>
                </div>
                <div class="conta-stat">
                    <i data-lucide="clock"></i>
                    <span class="conta-stat-valor">${tutor.horasLecionadas}h</span>
                    <span class="conta-stat-label">Lecionadas</span>
                </div>
                <div class="conta-stat">
                    <i data-lucide="dollar-sign"></i>
                    <span class="conta-stat-valor">R$ ${tutor.ganhos}</span>
                    <span class="conta-stat-label">Ganhos</span>
                </div>
            </section>

            <section class="conta-secao">
                <h2 class="conta-secao-titulo">Minhas aulas</h2>
                <ul class="conta-lista">
                    ${aulasDoTutor.map(aula => `
                        <li class="conta-lista-item">
                            <div class="conta-lista-info">
                                <strong>${aula.nome}</strong>
                                <span>${aula.horario} • ${aula.local}</span>
                            </div>
                            <span class="conta-lista-tag">${aula.categoria}</span>
                        </li>
                    `).join("")}
                </ul>
            </section>

            <section class="conta-acoes">
                <button class="conta-btn conta-btn-primario" id="botao-publicar">
                    <i data-lucide="plus"></i>
                    Publicar nova aula
                </button>
                <button class="conta-btn conta-btn-secundario" id="botao-alterar-tipo">
                    <i data-lucide="refresh-cw"></i>
                    Trocar para Aluno
                </button>
                <button class="conta-btn conta-btn-sair" id="botao-sair">
                    <i data-lucide="log-out"></i>
                    Sair
                </button>
            </section>
        </div>
    `;
}

function renderAluno(app) {
    const aluno = listaDeAlunos.find(a => a.id === sessao.usuarioId) || listaDeAlunos[0];

    app.innerHTML = `
        <div class="conta-container">
            <header class="conta-header">
                <div class="conta-avatar">
                    <i data-lucide="user-round"></i>
                </div>
                <h1 class="conta-nome">${aluno.nome}</h1>
                <span class="conta-tipo">Aluno</span>
                <span class="conta-disciplina">${aluno.idade} anos</span>
            </header>

            <section class="conta-stats">
                <div class="conta-stat">
                    <i data-lucide="book-open"></i>
                    <span class="conta-stat-valor">${aluno.numeroDeAulas}</span>
                    <span class="conta-stat-label">Aulas</span>
                </div>
                <div class="conta-stat">
                    <i data-lucide="clock"></i>
                    <span class="conta-stat-valor">${aluno.horasDeEstudo}h</span>
                    <span class="conta-stat-label">Estudo</span>
                </div>
            </section>

            <section class="conta-acoes">
                <button class="conta-btn conta-btn-primario" id="botao-aulas">
                    <i data-lucide="search"></i>
                    Buscar aulas
                </button>
                <button class="conta-btn conta-btn-secundario" id="botao-alterar-tipo">
                    <i data-lucide="refresh-cw"></i>
                    Trocar para Professor
                </button>
                <button class="conta-btn conta-btn-sair" id="botao-sair">
                    <i data-lucide="log-out"></i>
                    Sair
                </button>
            </section>
        </div>
    `;
}

function adicionarEventos(app) {
    const botaoAlterarTipo = app.querySelector("#botao-alterar-tipo");
    botaoAlterarTipo.addEventListener("click", function () {
        changeUsuarioTipo();
        conta(app);
        if (window.lucide) window.lucide.createIcons();
    });

    const botaoSair = app.querySelector("#botao-sair");
    botaoSair.addEventListener("click", function () {
        window.location.hash = "#home";
    });

    const botaoPublicar = app.querySelector("#botao-publicar");
    if (botaoPublicar) {
        botaoPublicar.addEventListener("click", function () {
            window.location.hash = "#publicar";
        });
    }

    const botaoAulas = app.querySelector("#botao-aulas");
    if (botaoAulas) {
        botaoAulas.addEventListener("click", function () {
            window.location.hash = "#home";
        });
    }
}

export default {
    url: "#conta",
    label: "Conta",
    icon: "user-round",
    pagina: conta
};