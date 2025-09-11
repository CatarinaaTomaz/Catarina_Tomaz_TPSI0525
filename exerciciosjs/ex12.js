const prompt = require('prompt-sync')();

function num(){
    let numeroPrincipal = parseInt(prompt("Digite um número inteiro:"));

    if (isNaN(numeroPrincipal) || numeroPrincipal <= 1) {
    console.log("Por favor, digite um número inteiro maior que 1.");
    } else {

    let acumuladorOperacoes = 0;
    let soma = numeroPrincipal;
    let subtracao = numeroPrincipal;
    let multiplicacao = numeroPrincipal;
    let divisao = numeroPrincipal;

    console.log(`Iniciando operações com o número ${numeroPrincipal}...`);

    for (let i = numeroPrincipal - 1; i >= 1; i--) {
        // Operações
        soma += i;
        subtracao -= i;
        multiplicacao *= i;
        divisao /= i;

        acumuladorOperacoes += 4;
    }

    console.log("\nResultados Finais:");
    console.log(`Soma final: ${soma}`);
    console.log(`Subtração final: ${subtracao}`);
    console.log(`Multiplicação final: ${multiplicacao}`);
    console.log(`Divisão final: ${divisao}`);
    console.log(`\nTotal de operações efetuadas: ${acumuladorOperacoes}`);
    }
}

num();