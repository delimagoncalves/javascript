// Função Tradicional
function calcularDesconto(preco, desconto) {
    return preco - preco * (desconto / 100);
}

// Arrow Function
const formatarMoeda = (valor) => `R$ ${valor.toFixed(2)}`;

// Prâmetro padrão + rest
const criarPedido = (cliente, ...itens) => {
    return {
        cliente,
        itens,
        total: itens.reduce((acc, item) => acc + item.preco, 0),
    };
};

// Testando
console.log(calcularDesconto(100, 10));
console.log(98.8)
console.log(criarPedido("João", {produto: "Camisa Polo", preco: 100}, {produto: "Calça Jeans", preco: 150}));