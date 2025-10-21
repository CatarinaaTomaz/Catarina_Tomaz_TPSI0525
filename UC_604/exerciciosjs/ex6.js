// Função para verificar se um número é primo
function isPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Array para armazenar os números primos
let primos = [];
let numeroAtual = 2; // Começamos a verificação pelo primeiro número primo

// Laço para encontrar os 10 primeiros números primos
while (primos.length < 10) {
  if (isPrimo(numeroAtual)) {
    primos.push(numeroAtual);
  }
  numeroAtual++;
}

// Exibe o resultado
console.log("Os 10 primeiros números primos são:");
console.log(primos);