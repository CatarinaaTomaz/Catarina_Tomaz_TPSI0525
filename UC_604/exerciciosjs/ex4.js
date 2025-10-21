const prompt = require('prompt-sync')();

function isPrimo(num) {
  // Números menores ou iguais a 1 não são primos
  if (num <= 1) {
    return false;
  }

  // Verifica se o número é divisível por algum outro número
  // a partir de 2 até a sua raiz quadrada
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // Se for divisível, não é primo
      return false;
    }
  }

  // Se o laço terminar sem encontrar divisores, o número é primo
  return true;
}

// Ler o número do usuário
let numero = parseInt(prompt("Digite um número inteiro:"));

// Verificar e mostrar o resultado
if (isPrimo(numero)) {
  console.log(`${numero} é um número primo.`);
} else {
  console.log(`${numero} não é um número primo.`);
}