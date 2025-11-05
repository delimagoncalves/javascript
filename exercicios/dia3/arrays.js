// exercicios/dia3/arrays.js
// EXERCÍCIO 1: Use .map() para converter para maiúsculas
const nomes = ["ana", "pedro", "julia"];
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

// EXERCÍCIO 2: Use .filter() para filtrar números pares
const numeros = [10, 15, 20, 25, 30];
const pares = numeros.filter(numero => numero %2 === 0);

// EXERCÍCIO 3: Use .find() para encontrar o produto com id=2
const produtos = [
  { id: 1, nome: "Notebook" },
  { id: 2, nome: "Mouse" },
  { id: 3, nome: "Teclado" }
];
const produtoMouse = produtos.find(produto => produto.id === 2);

// TESTE SEUS RESULTADOS:
console.log(nomesMaiusculos); // ["ANA", "PEDRO", "JULIA"]
console.log(pares);            // [10, 20, 30]
console.log(produtoMouse);     // { id: 2, nome: "Mouse" }