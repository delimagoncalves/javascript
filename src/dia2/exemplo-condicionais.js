// IF/ELSE
const temperatura = 25;
if (temperatura > 30) {
  console.log("🥵 Está muito quente!");
} else if (temperatura > 20) {
  console.log("🙂 Tempo agradável");
} else {
  console.log("🥶 Frio de rachar!");
}

// SWITCH
const cargo = "dev";
switch (cargo) {
  case "dev":
    console.log("💻 Você programa!");
    break;
  case "designer":
    console.log("🎨 Você cria interfaces!");
    break;
  default:
    console.log("🔧 Profissão não identificada");
}