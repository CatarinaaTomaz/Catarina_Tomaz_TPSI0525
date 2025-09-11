 const prompt = require('prompt-sync')();

 function notas(){
        // Variável para somar as notas
    let somaDasNotas = 0;

    // Laço para ler a nota de 10 alunos
    for (let i = 0; i < 10; i++) {
    // Solicita a nota do aluno e a converte para um número
    let nota = parseFloat(prompt(`Digite a nota do ${i + 1}º aluno:`));
    
    // Adiciona a nota à soma
    somaDasNotas = somaDasNotas + nota;
    }

    // Calcula a média
    let media = somaDasNotas / 10;

    // Exibe a média no console
    console.log(`A média das notas dos 10 alunos é: ${media.toFixed(2)}`);
 }

 notas();