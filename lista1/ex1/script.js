// Selecionando os botões
const greenBtn = document.getElementById('greenBtn');
const blueBtn = document.getElementById('blueBtn');

// Função para mudar a cor de fundo para verde
greenBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});

// Função para mudar a cor de fundo para azul
blueBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});