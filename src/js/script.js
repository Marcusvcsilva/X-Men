// Verificação de quando o usuario passar o mouse em cima do personagem na listagem

/*Fazer uma busca por todos os seletores da classe e passar para a variavel personagens*/
const personagens = document.querySelectorAll('.personagem');

// Adicionar a classe selecionada no personagem que o usuario passar o cursor do mouse 

/* forEach = percorrer todos os itens da seleção e disponibilizar o valor dos elementos 
    add.EventListener = configurar uma função a ser chamada quando um evento especifico ocorrer
    classlist.add = 
*/
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        // Usabilidade no celular
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        // Verificar se já existe um personagem selecionado, se sim, remover a seleção 
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado'); 


        alterarImagemPersonagemSelecionado(personagem);

        // Alterar o nome do personagem 

        alterarNomePersonagemSelecionado(personagem);

        // Alterar a descrição do personagem

        alterarDescricaoPersonagemSelecionado(personagem);
    })
})





function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    /* Alterar a imagem do personagem */
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

