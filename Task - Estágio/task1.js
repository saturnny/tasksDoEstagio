// Declaração das varíaveis
let INDICE = 13; // Variável que define o valor limite do loop
let SOMA = 0;    // Variável que acumula a soma dos números
let K = 0;       // Variável de controle do loop

// Enquanto K for menor que INDICE, o loop continuará ativo
while (K < INDICE) {
    // Adiciona o valor da variável K + 1
    K += 1;
    // Adiciona o valor atual da variável SOMA + K
    SOMA += K;
    
}

// Imprime o valor final da operação de soma no console
console.log(SOMA);
