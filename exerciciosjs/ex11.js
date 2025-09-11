function ciclo(){
    for (let i = 1; i <= 5; i++) {
    // Converte o número atual (i) para string e repete i vezes
    let linha = String(i).repeat(i);
    
    // Imprime a string no console
    console.log(linha);
    }
}

ciclo();