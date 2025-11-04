// Importando as funções do modulo calculadora.js
const { 
    somar, subtrair, multiplicar, dividir, calcularPorcentagem
 } = require("../../exercicios/dia2/calculadora");

 // Teste 1: Soma
test("somar 10 + 5 deve retornar 15", () => {
  expect(somar(10, 5)).toBe(15);
});

// Teste 2: Subtração
test("subtrair 10 - 5 deve retornar 5", () => {
    expect(subtrair(10, 5)).toBe(5);
});

// Teste 3: Multiplicação
test("multiplicar 10 * 5 deve retornar 50", () => {
    expect(multiplicar(10, 5)).toBe(50);
});

// Teste 4: Divisão
test("dividir 10 / 2 deve retornar 5", () => {
    expect(dividir(10, 0)).toBe("Erro: Divisão por zero");
});