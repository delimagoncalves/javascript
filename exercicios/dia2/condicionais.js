// EXERCÍCIO 1: Par ou ímpar + tabuada
const numero = 8;

// 1. Verificar se o número é par ou ímpar
const verificarParImpar = (num) => {
  return num % 2 === 0 ? 'Par' : 'Ímpar';
}

// 2. Gere a tabuada até 10
const gerarTabuada = (num) => {
    let tabuada = [];
    for (let i = 1; i <= 10; i++) {
        tabuada.push(`${num} x ${i} = ${num * i}`);
    }
    return tabuada;
}

// EXERCÍCIO 2 (DESAFIO):
// Crie uma função `classificarIdade(idade)` que retorne:
const classificarIdade = (idade) => {
  if (idade < 13) {
    return 'Criança';
  } else if (idade < 18) {
    return 'Adolescente';
  } else {
    return 'Adulto';
  }
}

// Exibir resultados
console.log(`O número ${numero} é ${verificarParImpar(numero)}.`);
console.log(`Tabuada do ${numero}:`);
console.log(gerarTabuada(numero).join('\n'));
console.log(`Classificação para 15 anos: ${classificarIdade(15)}`);
console.log(`Classificação para 18 anos: ${classificarIdade(18)}`);
console.log(`Classificação para 12 anos: ${classificarIdade(12)}`);
