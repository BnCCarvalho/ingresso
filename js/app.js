function comprar() {
  let tipo = document.getElementById("tipo-ingresso").value;
  let quantidade = parseInt(document.getElementById("qtd").value);

  if (tipo == "pista") {
    comprarIngresso(quantidade, "pista");
  } else if (tipo == "superior") {
    comprarIngresso(quantidade, "superior");
  } else if (tipo == "inferior") {
    comprarIngresso(quantidade, "inferior");
  }
}

function comprarIngresso(quantidade, tipo) {
  let quantidadeExibida = parseInt(
    document.getElementById(`qtd-${tipo}`).textContent
  );

  if (quantidade > quantidadeExibida) {
    alert(`Quantidade ${quantidade} indisponível para o tipo ${tipo}!`);
  } else {
    quantidadeExibida = quantidadeExibida - quantidade;
    document.getElementById(`qtd-${tipo}`).textContent = quantidadeExibida;
    alert(
      `Compra de ${quantidade} ingressos do tipo ${tipo} realizada com sucesso!`
    );
  }
}

// function comprarPista(quantidade) {
//   let quantidadePista = parseInt(
//     document.getElementById("qtd-pista").textContent
//   );
//   if (quantidade > quantidadePista) {
//     alert("Quantidade indisponível para o tipo pista");
//   } else {
//     quantidadePista = quantidadePista - quantidade;
//     document.getElementById("qtd-pista").textContent = quantidadePista;
//     alert("Compra realizada com sucesso");
//   }
// }

// function comprarSuperior(quantidade) {
//   let quantidadeSuperior = parseInt(
//     document.getElementById("qtd-superior").textContent
//   );
//   if (quantidade > quantidadeSuperior) {
//     alert("Quantidade indisponível para o tipo pista");
//   } else {
//     quantidadeSuperior = quantidadeSuperior - quantidade;
//     document.getElementById("qtd-superior").textContent = quantidadeSuperior;
//     alert("Compra realizada com sucesso");
//   }
// }

// function comprarInferior(quantidade) {
//   let quantidadeInferior = parseInt(
//     document.getElementById("qtd-inferior").textContent
//   );
//   if (quantidade > quantidadeInferior) {
//     alert("Quantidade indisponível para o tipo pista");
//   } else {
//     quantidadeInferior = quantidadeInferior - quantidade;
//     document.getElementById("qtd-inferior").textContent = quantidadeInferior;
//     alert("Compra realizada com sucesso");
//   }
// }
