//  Itera sobre o array e acumula um resultado final.

// Soma todos os números
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acc, numero) => {return acc + numero}, 0);
console.log(`Array: ${numeros}`); // 15
console.log(`Soma total: ${soma}`); // 15

// Contar ocorrências de elementos em um array
const frutas = ['maçã', 'banana', 'laranja', 'maçã', 'banana', 'maçã'];
const contagem = frutas.reduce((contador, fruta) => {
  contador[fruta] = (contador[fruta] || 0) + 1;
  return contador;
}, {});
console.log(`Array: ${frutas}`); // { maçã: 3, banana: 2, laranja: 1 } 
console.log('Contagem de frutas:', contagem); // { maçã: 3, banana: 2, laranja: 1 }
