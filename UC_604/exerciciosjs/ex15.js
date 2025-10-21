const prompt = require('prompt-sync')();

function ascii(){
    // Loop para iterar através dos códigos ASCII de 0 a 255
for (let i = 0; i <= 255; i++) {
  // Converte o código numérico para o caractere ASCII correspondente
  const caractere = String.fromCharCode(i);

  // Exibe o código e o caractere no console
  console.log(`Código: ${i.toString().padStart(3, '0')} | Caractere: ${caractere}`);

  // Verifica se já exibiu 20 caracteres ou se chegou ao fim
  if ((i + 1) % 20 === 0 && i < 255) {
    // Pede ao utilizador para continuar ou sair
    const continuar = prompt("Pressione 'Enter' para continuar ou 'S' para sair.");

    // Se o utilizador digitar 'S' (ou 's'), o loop é interrompido
    if (continuar && continuar.toLowerCase() === 's') {
      console.log("Programa encerrado.");
      break;
    }
  }
}

console.log("Fim da exibição da tabela ASCII.");
}

ascii();