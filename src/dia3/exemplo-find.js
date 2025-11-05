// Retorna o primeiro item que satisfaz uma condição (ou undefined).
const usuarios = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Bruno', idade: 30 },
    { nome: 'Carla', idade: 28 }
];
const usuariosCom30Anos = usuarios.find(usuario => usuario.idade === 30);
console.log(usuariosCom30Anos); // { nome: 'Bruno', idade: 30 }