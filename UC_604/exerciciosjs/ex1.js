function mostrarNumeros() {
  let pares = [];
  let impares = [];
  let contador = 0;
  let numeroAtual = 1;

  while (contador < 30) {
    if (numeroAtual % 2 === 0) {
      pares.push(numeroAtual);
    } else {
      impares.push(numeroAtual);
    }

    if (pares.length >= 30 && impares.length >= 30) {
      break;
    }

    numeroAtual++;
  }

  console.log("Os primeiros 30 números pares são:");
  console.log(pares.slice(0, 30));

  console.log("\nOs primeiros 30 números ímpares são:");
  console.log(impares.slice(0, 30));
}

mostrarNumeros();