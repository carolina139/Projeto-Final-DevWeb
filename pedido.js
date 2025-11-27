const botoesAdicionar = document.getElementsByClassName("btn-add");

let total = 0;

for (let i = 0; i < botoesAdicionar.length; i++) {
  botoesAdicionar[i].addEventListener("click", adicionarProduto);
}

function adicionarProduto(evento) {
  let botaoClicado = evento.target;

  let card = botaoClicado.closest(
    ".card-produto1, .card-produto2, .card-produto3"
  );

  let imagem = card.querySelector(".ft-produto").src;
  let nome = card.querySelector(".name").innerText;
  let precoTexto = card.querySelector(".preco h2").innerText;

  let preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));

  let lista = document.getElementById("lista");

  if (
    lista.children.length > 0 &&
    !lista.children[0].classList.contains("item-carrinho")
  ) {
    lista.innerHTML = "";
  }

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

  lista.appendChild(item);

  somar(preco);

  item.querySelector(".btn-remover").addEventListener("click", function () {
    item.remove();
    subtrair(preco);

    if (lista.querySelectorAll(".item-carrinho").length === 0) {
      lista.innerHTML = "<p>Ainda não há produtos.</p>";
    }
  });
}

function somar(valor) {
  total += valor;
  atualizarTotal();
}

function subtrair(valor) {
  total -= valor;
  if (total < 0) total = 0;
  atualizarTotal();
}

function atualizarTotal() {
  document.getElementById("total").innerText = total
    .toFixed(2)
    .replace(".", ",");
}

function finalizar() {
  let lista = document.getElementById("lista");

  if (lista.querySelectorAll(".item-carrinho").length === 0) {
    alert("Carrinho vazio! Adicione algum item.");
    return;
  }

  alert("Pedido confirmado!\nTotal: R$ " + total.toFixed(2).replace(".", ","));
}
