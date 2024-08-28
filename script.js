/*
    OBJETIVO - temos que selecionar o rating e quando clicarmos no botão temos que mostrar a imagem do card de obrigado
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - esconder o cartão atual
    - passo 4 - mostrar o novo cartão
*/

/* - passo 1 - dar um jeito de pegar o elemento HTML dos botões
*/

const botaoSubmit = document.querySelector(".botao");
const bloco = document.querySelectorAll(".bloco");
const botaoRating = document.querySelectorAll(".rating")
const responseRating = document.querySelector(".response_rating")

const bloco1 = document.querySelector(".bloco1")
const bloco2 = document.querySelector(".bloco2")
let ratingSelecionado;


botaoRating.forEach((rating, index) => {
    rating.addEventListener('click', () => {
        botaoRating.forEach(r => r.classList.remove('ativo'));

        rating.classList.add('ativo');
        ratingSelecionado = rating.ariaLabel;
        console.log(ratingSelecionado)
    });

});

botaoSubmit.addEventListener('click', () => {

    if (!ratingSelecionado) {
        alert('Selecione o valor.');
        return;
    }
    responseRating.innerHTML = ratingSelecionado;
    bloco1.classList.remove('ativo');
    bloco2.classList.add('ativo');


})





