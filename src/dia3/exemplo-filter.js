// Cria um novo array com apenas os itens que passam em um teste.
const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter(numero => numero %2 === 0);
console.log(numerosPares); // [2, 4, 6]
