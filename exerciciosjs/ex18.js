const prompt = require('prompt-sync')();

function findPerfectNumbers(limit) {
  const perfectNumbers = [];

  for (let number = 1; number <= limit; number++) {
    let sumOfDivisors = 0;
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sumOfDivisors += i;
      }
    }
    if (sumOfDivisors === number) {
      perfectNumbers.push(number);
    }
  }

  return perfectNumbers;
}

const userLimit = parseInt(prompt("Digite um número limite para a busca:"));

if (isNaN(userLimit) || userLimit <= 0) {
  console.log("Entrada inválida. Por favor, digite um número inteiro positivo.");
} else {
  const perfectNumbersFound = findPerfectNumbers(userLimit);

  if (perfectNumbersFound.length > 0) {
    console.log(`Existem ${perfectNumbersFound.length} números perfeitos até ${userLimit}.`);
    console.log("Os números perfeitos encontrados são:", perfectNumbersFound);
  } else {
    console.log(`Não foram encontrados números perfeitos até ${userLimit}.`);
  }
}

findPerfectNumbers();