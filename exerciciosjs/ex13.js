const prompt = require('prompt-sync')();

function tab(){
    let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

    if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
    } else {
    console.log(`\nTabuada do ${numero}:`);

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
    }
}

tab();