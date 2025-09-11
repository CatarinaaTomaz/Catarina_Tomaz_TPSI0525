 const prompt = require('prompt-sync')();

 function parimpar (){
    let numeros = [];
    for (let i = 0; i < 10; i++) {
     let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero);
    }
    
    console.log("Verificando a paridade dos números digitados:");
    for (let i = 0; i < numeros.length; i++) {
     let numeroAtual = numeros[i];
    if (numeroAtual % 2 === 0) {
        console.log(`O número ${numeroAtual} é par.`);
    } else {
        console.log(`O número ${numeroAtual} é ímpar.`);
    }
    }

}

parimpar();