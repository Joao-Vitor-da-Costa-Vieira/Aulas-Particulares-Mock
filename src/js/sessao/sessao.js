var sessao = {
    usuarioId: 1,
    usuarioTipo: "aluno"
};

function changeUsuarioTipo() {
    if (sessao.usuarioTipo === "aluno") {
        sessao.usuarioTipo = "professor";
    } else {
        sessao.usuarioTipo = "aluno";
    }
}

export default { sessao, changeUsuarioTipo };