function logar() {
  let login = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  /* Se login e senha estão vazios */
  if (login == "" || senha == "") {
    alert("Preencha todos os campos. ");
  } else {
    /* Valida login e senha da Usuária: Carol */
    if (
      /*Nome@gmail.com*/ login == "carol@gmail.com" &&
      /*RA*/ (senha == "1291392522019" || senha == "123")
    ) {
      /* Sucesso, redireciona para pag pedido.html */
      alert("Sucesso, Login bem-sucedido. ");
      location.href = "pedido.html";
    } 
    /* Valida login e senha do Usuário: Carlos */
    else if (
      /*Nome@gmail.com*/ login == "carlos@gmail.com" &&
      /*RA*/ (senha == "1291392522017" || senha == "123")
    ) {
      /* Sucesso, redireciona para pag pedido.html */
      alert("Sucesso, Login bem-sucedido. ");
      location.href = "pedido.html";
    } else {
      /* Erro, não foi validado o login */
      alert("Usuário ou senha incorretos. ");
    }
  }
}
