/**
 * Verificador de Status do Aluno
 * Utiliza a estrutura switch para determinar o status do aluno
 * com base em um número de 1 a 4.
 */

// Simulação da entrada de dados (o número digitado pelo usuário)
// Para testar, você pode mudar o valor da variável 'numeroStatus'
const numeroStatus = 2; // Teste com 1, 2, 3, 4, e outro valor como 9

let statusDoAluno;

console.log(`Verificando o status para o número: ${numeroStatus}`);
console.log('-----------------------------------');

// Estrutura switch para verificar o número e atribuir o status
switch (numeroStatus) {
    case 1:
        statusDoAluno = 'Cursando';
        break;
    case 2:
        statusDoAluno = 'Aprovado';
        break;
    case 3:
        statusDoAluno = 'Reprovado';
        break;
    case 4:
        statusDoAluno = 'Trancado';
        break;
    // O 'default' trata qualquer valor que não corresponda aos 'case' acima
    default:
        statusDoAluno = 'Status inválido. Por favor, digite um número de 1 a 4.';
        break;
}

// Exibe o resultado no terminal
console.log(`Status do Aluno: ${statusDoAluno}`);

// --- Exemplo com a necessidade de input real do terminal (Avançado) ---
/*
// Se quiser fazer a entrada real do terminal no Node.js (necessita de 'readline'):
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número de status (1-4): ', (resposta) => {
    // Converte a resposta (string) para número inteiro
    const numeroStatusInput = parseInt(resposta);
    let statusDoAlunoInput;

    switch (numeroStatusInput) {
        case 1:
            statusDoAlunoInput = 'Cursando';
            break;
        case 2:
            statusDoAlunoInput = 'Aprovado';
            break;
        case 3:
            statusDoAlunoInput = 'Reprovado';
            break;
        case 4:
            statusDoAlunoInput = 'Trancado';
            break;
        default:
            statusDoAlunoInput = 'Status inválido. Por favor, digite um número de 1 a 4.';
            break;
    }

    console.log(`\nStatus do Aluno: ${statusDoAlunoInput}`);
    rl.close();
});
*/
