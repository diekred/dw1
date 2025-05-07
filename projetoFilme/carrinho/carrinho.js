const conteudo = document.getElementById('conteudo-carrinho');
const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

if (carrinho.length === 0) {
  conteudo.innerHTML = `
  <div class="carrinho-vazio">
    <p><strong>🛒 Seu carrinho está vazio no momento.</strong></p>
    <p>Que tal dar uma olhada no nosso catálogo e escolher algo incrível?</p>
  </div>
`;
} else {
  let total = 0;

  carrinho.forEach(filme => {
    const item = document.createElement('div');
    item.className = 'card-carrinho';
    item.innerHTML = `
      <img src="${filme.imagem}" alt="${filme.titulo}">
      <div>
        <h2>${filme.titulo}</h2>
        <p>${filme.descricao}</p>
        <p>Preço: R$ ${filme.preco.toFixed(2)}</p>
      </div>
    `;

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerDoCarrinho(filme.id);
    item.querySelector('div').appendChild(botaoRemover);

    conteudo.appendChild(item);
    total += filme.preco;
  });

  const totalElemento = document.createElement('p');
  totalElemento.style.fontSize = '1.2em';
  totalElemento.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
  conteudo.appendChild(totalElemento);
}

document.getElementById('finalizar-compra').addEventListener('click', () => {
  const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];

  if (carrinhoAtual.length === 0) {
    alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
    return;
  }

  // Se tiver itens, segue para pagamento
  window.location.href = '../pagamento/pagamento.html';
});

function removerDoCarrinho(id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho = carrinho.filter(item => item.id !== id);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  location.reload();
}