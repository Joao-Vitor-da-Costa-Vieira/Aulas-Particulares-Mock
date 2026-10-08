# Aulas-Particulares-Mock
Mock de aplicação de app para tutores e alunos sobre agendamento de aulas particulares de reforço

# Relatório
R1. Dificuldade de agendar aulas particulares de reforço tanto para tutores quanto para alunos. Três situações de uso da aplicação seriam:
- Busca de renda extra para professores.
- Busca de aulas de reforço para alunos.
- Uso por professores para entender melhor quais matérias são mais procuradas para reforço por alunos e exigem mais atenção.

R2.Mapa de Equivalência

Produto - Aulas particulares de reforço.
Oferta - Registro de Disponibilidade do Tutor, com horário, local, disciplina e valor por hora.
Mercado - Tutor Disponível.
Preço - Valor da aula por hora.
Distância - Os locais no qual o Tutor pode atuar.
Contribuinte - Tutores.
Visitante - Aluno precisando de aulas de reforço.

R3.

R4. Decisões:
1. Separar parte das páginas entre alunos e professores já que ambos não procuram e nem usam as mesmas funções da aplicação, necessitando interfaces diferentes para cada tipo de usuário do aplicativo.
2. Já estar logado no app para poder focar nas páginas principais do mock, já possuindo os dados de cada usuário e utilizando um botão de trocar para o outro tipo de conta no perfil.
3. Mostrar somente as categorias e barra de busca na home para deixá-la mais simples e limpa, deixando os registros sobre as aulas nas outra páginas da aplicação.

Descartado: Usar as mesmas páginas para tutores e alunos. Descartado por que, como descrito anteriormente, o tipo de informação e features que os dois tipos de usuários desejam e precisam não é o mesmo. 

R6. Troca de sessão não funcionando apropriadamente. Achamos que era um problema na função de troca da sessão, mas era um problema no import do objeto de sessão.
Dados não passando para a página de resultados. Achamos que era um problema de filtragem e descobrimos que a categoria ou termo buscado só não estava sendo transmitido pela função de renderizar página do main.js.

R7. Permitir que o aluno publique sua própria demanda, ao invés de só buscar pelas aulas ofertadas pelo professor.
