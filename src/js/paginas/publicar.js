import { listaDeAulas } from '../dadosMockados/dadosMockados'
import sessaoModule from '../sessao/sessao'
const { sessao } = sessaoModule

function publicar(app){
    if(sessao.usuarioTipo === "professor") {
        app.innerHTML = `
            <div class="publicar-container">
                <header class="publicar-header">
                    <h1 class="publicar-titulo">Publicar nova aula</h1>
                    <p class="publicar-subtitulo">Preencha os dados abaixo</p>
                </header>

                <form class="publicar-form" id="form-publicar" novalidate>
                    <div class="publicar-campo">
                        <label for="input-nome" class="publicar-label">Nome da aula</label>
                        <input
                            type="text"
                            id="input-nome"
                            class="publicar-input"
                            placeholder="Ex: Aula de Frações"
                            required
                        />
                    </div>

                    <div class="publicar-campo">
                        <label for="input-categoria" class="publicar-label">Categoria</label>
                        <input
                            type="text"
                            id="input-categoria"
                            class="publicar-input"
                            placeholder="Ex: Matemática"
                            required
                        />
                    </div>

                    <div class="publicar-campo">
                        <label for="input-local" class="publicar-label">Local</label>
                        <input
                            type="text"
                            id="input-local"
                            class="publicar-input"
                            placeholder="Ex: Rua das Flores, 123"
                            required
                        />
                    </div>

                    <div class="publicar-campo">
                        <label for="input-horario" class="publicar-label">Horário</label>
                        <input
                            type="text"
                            id="input-horario"
                            class="publicar-input"
                            placeholder="Ex: 10:00 - 11:00"
                            required
                        />
                    </div>

                    <div class="publicar-campo">
                        <label for="input-preco" class="publicar-label">Preço (R$)</label>
                        <input
                            type="number"
                            id="input-preco"
                            class="publicar-input"
                            placeholder="Ex: 50"
                            min="0"
                            step="0.01"
                            required
                        />
                    </div>

                    <div class="publicar-mensagem" id="publicar-mensagem"></div>

                    <button type="submit" class="publicar-btn">
                        <i data-lucide="plus"></i>
                        Publicar aula
                    </button>
                </form>
            </div>
        `
        adicionarEvento(app)
    } else{
        window.location.hash = "#rotaInexistente"
    }
}

function adicionarEvento(app){
    const form = app.querySelector("#form-publicar")
    const mensagem = app.querySelector("#publicar-mensagem")

    form.addEventListener("submit", function(event){
        event.preventDefault()

        const nome = app.querySelector("#input-nome").value.trim()
        const categoria = app.querySelector("#input-categoria").value.trim()
        const local = app.querySelector("#input-local").value.trim()
        const horario = app.querySelector("#input-horario").value.trim()
        const preco = parseFloat(app.querySelector("#input-preco").value)

        if(!nome || !categoria || !local || !horario || isNaN(preco)){
            mostrarMensagem(mensagem, "recusa", "Preencha todos os campos corretamente.")
            return
        }

        const duplicada = listaDeAulas.some(aula =>
            aula.nome.toLowerCase() === nome.toLowerCase() &&
            aula.local.toLowerCase() === local.toLowerCase() &&
            aula.horario.toLowerCase() === horario.toLowerCase()
        )

        if(duplicada){
            mostrarMensagem(mensagem, "recusa", "Já existe uma aula com esse nome, local e horário.")
            return
        }

        listaDeAulas.push({
            id: listaDeAulas.length + 1,
            nome: nome,
            categoria: categoria,
            local: local,
            horario: horario,
            preco: preco,
            tutorId: sessao.usuarioId
        })

        mostrarMensagem(mensagem, "aprovacao", "Aula publicada com sucesso!")
        form.reset()
    })
}

function mostrarMensagem(elemento, tipo, texto){
    elemento.textContent = texto
    elemento.className = "publicar-mensagem publicar-mensagem-" + tipo
}

export default {
    url: "#publicar",
    label: "Publicar",
    icon: "plus",
    pagina: publicar
}