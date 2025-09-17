const prompt = require('prompt-sync')();

function calculateEvenNumbersAverage() {
  let sum = 0;
  let count = 0;
  const totalNumbers = 30;

  console.log(`Por favor, insira ${totalNumbers} números pares entre 1 e 50.`);

  // Loop to get 30 valid numbers
  while (count < totalNumbers) {
    // Get user input. The prompt() function returns a string.
    const input = prompt(`Insira o ${count + 1}º número:`);

    // Check if the user canceled the input
    if (input === null) {
      console.log("Operação cancelada pelo usuário.");
      return;
    }

    const number = parseInt(input);

    // Validate the input
    if (isNaN(number) || number < 1 || number > 50 || number % 2 !== 0) {
      console.log("Entrada inválida. Por favor, insira um número par entre 1 e 50.");
    } else {
      // If the input is valid, add it to the sum and increment the counter
      sum += number;
      count++;
    }
  }

  const average = sum / totalNumbers;

  console.log(`\nTodos os ${totalNumbers} números foram inseridos.`);
  console.log(`A soma dos números é: ${sum}`);
  console.log(`A média dos ${totalNumbers} números pares é: ${average.toFixed(2)}`);
}

calculateEvenNumbersAverage();