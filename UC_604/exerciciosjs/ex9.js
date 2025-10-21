const prompt = require('prompt-sync')();

function ask(){
    let numero;

    do {
    numero = parseInt(prompt("Por favor, digite um número entre 1 e 100:"));
    } while (numero < 1 || numero > 100 || isNaN(numero));

    console.log(`O número ${numero} está no intervalo correto!`);
}

ask();