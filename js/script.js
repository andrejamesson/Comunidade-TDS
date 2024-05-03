let contadorCliques = 0;

function contarCliques() {
  contadorCliques++;

  if (contadorCliques === 5) {
    document.documentElement.style.setProperty("--primary", "#ff004f");
    alert("É só um Easter egg! xD");
    console.log("Variável --primary trocado o valor para #ff004f");

    contadorCliques = 0;
    console.log("Contador resetado");

  }
}

console.log(
  "Este é um projeto da comunidade TDS-PE Alunos, que logo estara no ar! Contamos com a ajuda de todos, em nome de André Jamesson."
);
