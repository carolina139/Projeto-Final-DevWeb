const botoesAdicionar = document.getElementsByClassName("btn-add");

/* Valor do carinho = 0 */
let total = 0;

/* Clique para adicionar ao carrinho */
for (let i = 0; i < botoesAdicionar.length; i++) {
  botoesAdicionar[i].addEventListener("click", adicionarProduto);
}

/* Adiconar produto ao carrinho */
function adicionarProduto(evento) {
  let botaoClicado = evento.target;

  /* Encontra o card do produto clicado */
  let card = botaoClicado.closest(
    ".card-produto1, .card-produto2, .card-produto3"
  );

  /* Guarda info do produto escolhido */
  let imagem = card.querySelector(".ft-produto").src;
  let nome = card.querySelector(".name").innerText;
  let precoTexto = card.querySelector(".preco h2").innerText;

  /* Converte precoTexto em preco número */
  let preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));

  let lista = document.getElementById("lista");

  /* Remove txt "Ainda não há produtos." */
  if (
    lista.children.length > 0 &&
    !lista.children[0].classList.contains("item-carrinho")
  ) {
    lista.innerHTML = "";
  }

  /* Criar item carrinho */
  let item = document.createElement("div");
  item.classList.add("item-carrinho");

  item.innerHTML = `
        <img class="ft-carrinho" src="${imagem}">
        <div class="info-carrinho">
            <h4>${nome}</h4>
            <p>R$ ${preco.toFixed(2).replace(".", ",")}</p>
            <button class="btn-remover">Remover</button>
        </div>
    `;

  /* Adicionar produto ao carrinho */
  lista.appendChild(item);

  somar(preco);

  /* Remover do Carrinho */
  item.querySelector(".btn-remover").addEventListener("click", function () {
    item.remove();
    subtrair(preco);

    /* Sem itens no carrinho, devolve txt "Ainda não há produtos." */
    if (lista.querySelectorAll(".item-carrinho").length === 0) {
      lista.innerHTML = "<p>Ainda não há produtos.</p>";
    }
  });
}

/* Somar */
function somar(valor) {
  total += valor;
  atualizarTotal();
}

/* Subtrair */
function subtrair(valor) {
  total -= valor;
  if (total < 0) total = 0;
  atualizarTotal();
}

/* Total */
function atualizarTotal() {
  document.getElementById("total").innerText = total
    .toFixed(2)
    .replace(".", ",");
}

/* Finalizar Pedido */
function finalizar() {
  let lista = document.getElementById("lista");

  /* Não finaliza sem itens */
  if (lista.querySelectorAll(".item-carrinho").length === 0) {
    alert("Carrinho vazio! Adicione algum item.");
    return;
  }

  alert("Pedido confirmado!\nTotal: R$ " + total.toFixed(2).replace(".", ","));

  /* Limpa Carrinho dps de Finalizar */
  lista.innerHTML = "<p>Ainda não há produtos.</p>";
  total = 0;
  atualizarTotal();
}
