const prompt = require('prompt-sync')();

function div(){
    let numero = parseInt(prompt("Digite um número inteiro:"));

    let contadorDeDivisores = 0;

    for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        contadorDeDivisores++;
    }
    }

    console.log(`O número ${numero} tem ${contadorDeDivisores} divisores.`);
}

div();