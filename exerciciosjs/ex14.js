const prompt = require('prompt-sync')();

function tab(){
    for (let numero = 1; numero <= 100; numero++) {
  console.log(`\nTabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
    }
}

tab();