function logar() {
  let login = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  if (login == "" || senha == "") {
    alert("Preencha todos os campos");
  } else {
    if (
      /*Nome@gmail.com*/ login == "carol@gmail.com" &&
      /*RA*/ (senha == "1291392522019" || senha == "123")
    ) {
      alert("Sucesso");
      location.href = "pedido.html";
    } else if (
      /*Nome@gmail.com*/ login == "carlos@gmail.com" &&
      /*RA*/ (senha == "1291392522017" || senha == "123")
    ) {
      alert("Sucesso");
      location.href = "pedido.html";
    } else {
      alert("usuario ou senha incorretos");
    }
  }
}
