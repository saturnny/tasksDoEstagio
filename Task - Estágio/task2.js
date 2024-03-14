// Função que verifica se um número está na sequência de Fibonacci
function estaNaSequenciaFibonacci(numero) {
    // Inicializa os primeiros dois números da sequência de Fibonacci
    let a = 0;
    let b = 1;
    let c = a + b;

    // Loop para calcular os próximos números na sequência até que ultrapassem o número fornecido
    while (c <= numero) {
        // Verifica se o número fornecido está na sequência de Fibonacci
        if (c === numero) {
            return true; // Se estiver, retorna true
        }
        // Atualiza os valores para calcular o próximo número na sequência
        a = b;
        b = c;
        c = a + b;
    }

    // Se o número não foi encontrado na sequência, retorna false
    return false;
}

// Número que você quer verificar
const numeroPraVerificar = 13;

// Verifica se o número está na sequência de Fibonacci e exibe uma mensagem correspondente
if (estaNaSequenciaFibonacci(numeroPraVerificar)) {
    console.log(`${numeroPraVerificar} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroPraVerificar} não pertence à sequência de Fibonacci.`);
}
