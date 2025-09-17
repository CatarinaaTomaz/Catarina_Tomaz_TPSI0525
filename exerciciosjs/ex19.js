// Function to generate the first 60 Fibonacci numbers
function generateFibonacci(n) {
  const fibonacciSequence = [];

  // Initialize the first two numbers of the sequence
  let a = 1;
  let b = 1;

  // Add the first two numbers to the sequence array
  fibonacciSequence.push(a);
  fibonacciSequence.push(b);

  // Loop to calculate the next numbers
  for (let i = 2; i < n; i++) {
    // Calculate the next number by adding the two previous ones
    let next = a + b;
    
    // Add the new number to the sequence array
    fibonacciSequence.push(next);
    
    // Update the values for the next iteration
    a = b;
    b = next;
  }

  return fibonacciSequence;
}

// Generate the first 60 Fibonacci numbers
const fibonacciNumbers = generateFibonacci(60);

// Print the sequence to the console
console.log("Os primeiros 60 números da série Fibonacci são:");
console.log(fibonacciNumbers);