// Função que inverte os caracteres de uma string
function inverterString(str) {
    // Variável para armazenar a string invertida
    let stringInvertida = '';

    // Itera sobre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        // Concatena cada caractere da string original na string invertida
        stringInvertida += str[i];
    }

    // Retorna a string invertida
    return stringInvertida;
}

// Exemplo de uso:
// String original
const minhaString = 'Olá, mundo!';
// Chama a função para inverter a string
const stringInvertida = inverterString(minhaString);
// Exibe a string invertida no console
console.log(stringInvertida); // Saída: !odnum ,álO
