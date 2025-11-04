// Implementar funções
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Erro: Divisão por zero';
const calcularPorcentagem = (total, porcentagem) => (total * porcentagem) / 100;

// Exports para testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  calcularPorcentagem
};