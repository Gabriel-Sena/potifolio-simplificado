/*
- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html:

Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

querySelector: busca apenas um elemento que tenha a classe selecionada;
querySelectorAll: busca todos os elementos que tenha a classe selecionada;
.projeto:not(.ativo): quero os elementos que tenham a classe projeto, porém não quero os elementos que tenham a classe ativo
*/
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos')

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')
function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo')
    })
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover")
}

botaoMostrarProjetos.addEventListener('click', () => { 
    mostrarMaisProjetos()
    esconderBotao()
})
