// Función 1: Adivinar un color
function guessColor() {
  const correctColor = "azul"; // Color a adivinar
  let guess;
  while (guess !== correctColor) {
    guess = prompt("Adivina el color:");
    if (guess === null) return; // Si cancela, salir
  }
  document.getElementById("output").innerText = "¡Felicidades! Adivinaste el color.";
}

// Función 2: Tienda de muebles con preguntas mínimas
function furnitureStore() {
  let esSilla = prompt("¿Es una silla? (s/n)").toLowerCase();
  let esIkea = prompt("¿Es de IKEA? (s/n)").toLowerCase();
  let mueble = "";

  // Determinar mueble según respuestas
  if (esSilla === "s" && esIkea === "s") mueble = "Silla IKEA";
  else if (esSilla === "s" && esIkea === "n") mueble = "Silla Mackintosh";
  else if (esSilla === "n" && esIkea === "s") mueble = "Mesa IKEA";
  else if (esSilla === "n" && esIkea === "n") mueble = "Mesa Roble";
  else mueble = "No se pudo determinar el mueble.";

  document.getElementById("output").innerText = "El mueble elegido es: " + mueble;
}

// Función 3: Buffet libre
function buffet() {
  let pedido;
  let platos = [];
  while (true) {
    pedido = prompt("¿Qué quieres comer? (Escribe 'salir' para terminar)");
    if (pedido === null || pedido.toLowerCase() === "salir") break;

    platos.push(pedido);
    let mensaje = "Has pedido: " + pedido;

    // Mensaje especial si se han pedido 5 platos
    if (platos.length === 5) mensaje += "\n¡Vas a reventar!";

    document.getElementById("output").innerText = platos.map((p, i) => `${i + 1}. ${p}`).join("\n");
  }

  alert(`Has pedido ${platos.length} platos. ¡Que aproveche!`);
}

// Función 4: Intercambio de variables
function exchangeValues() {
  let A = prompt("¿Quién está en Barcelona?");
  let B = prompt("¿Quién está en Tarragona?");

  // Mostrar valores originales
  let salida = `Antes:\nEn Barcelona está ${A}, y en Tarragona está ${B}\n`;

  // Intercambiar valores
  let temp = A;
  A = B;
  B = temp;

  // Mostrar valores intercambiados
  salida += `Después:\nEn Barcelona está ${A}, y en Tarragona está ${B}`;

  document.getElementById("output").innerText = salida;
}
