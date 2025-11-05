// Encadeamento de Métodos em Arrays
const produtos = [
    { nome: 'Camisa', preco: 50, categoria: 'Roupas' },
    { nome: 'Calça', preco: 80, categoria: 'Roupas' },
    { nome: 'Tênis', preco: 120, categoria: 'Calçados' },
    { nome: 'Meias', preco: 20, categoria: 'Calçados' },
    { nome: 'Boné', preco: 30, categoria: 'Acessórios' },
    { nome: 'Jaqueta', preco: 150, categoria: 'Roupas' },
    { nome: 'Cinto', preco: 40, categoria: 'Acessórios' },      
]

// Objetivo calcular o total gasto eem roupas
const totalRoupas = produtos
    .filter(produto => produto.categoria === 'Roupas') // Filtra apenas roupas
    .map(roupa => roupa.preco) // Extrai os preços das roupas
    .reduce((total, preco) => total + preco, 0); // Soma os preços

console.log(`Total gasto em roupas: R$ ${totalRoupas}`); // Total gasto em roupas: R$ 280
