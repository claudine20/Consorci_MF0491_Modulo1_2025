// --------------------------
// 1. GREETING ITERATION
// --------------------------

function startGreeting() {
  // Pedimos cuántas veces quiere que se repita el saludo
  const times = parseInt(prompt("How many greetings do you want to enter?"));

  // Inicializamos un mensaje vacío para acumular los saludos
  let message = "";

  // Bucle que se ejecuta la cantidad de veces introducida
  for (let i = 0; i < times; i++) {
    // Pedimos el saludo, como "Hola", "Adiós", etc.
    const greeting = prompt(`Enter greeting #${i + 1} (e.g., Hello, Bye):`);
    
    // Pedimos el nombre, como "Marga", "Carol", etc.
    const name = prompt(`Enter name #${i + 1} (e.g., Marga, Carol):`);

    // Concatenamos el saludo y el nombre y lo añadimos con un salto de línea
    message += `${greeting} ${name}\n`;
  }

  // Mostramos todos los saludos en pantalla
  document.getElementById("output").innerText = message;
}

// ---------------------------------------------
// 2. CALCULATION WITHOUT RETURN (OBLIGATORIO)
// ---------------------------------------------

function startOperation() {
  // Pedimos dos números y los convertimos a decimales
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));

  // Pedimos la operación: suma o resta
  const operation = prompt("Enter operation (+ or -):");

  // Verificamos qué operación quiere hacer el usuario
  if (operation === "+") {
    sum(num1, num2); // Llamamos a la función sum sin return
  } else if (operation === "-") {
    subtract(num1, num2); // Llamamos a la función subtract sin return
  } else {
    // Si el usuario introduce otra cosa
    alert("Invalid operation!");
  }
}

// Función que realiza una suma y la muestra directamente en pantalla
function sum(a, b) {
  document.getElementById("output").innerText = `Result of ${a} + ${b} = ${a + b}`;
}

// Función que realiza una resta y la muestra directamente en pantalla
function subtract(a, b) {
  document.getElementById("output").innerText = `Result of ${a} - ${b} = ${a - b}`;
}

// ---------------------------------------------
// EXTRA: CALCULATION WITH RETURN
// ---------------------------------------------

function startOperationWithReturn() {
  // Pedimos los dos números y la operación
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operation = prompt("Enter operation (+ or -):");

  let result; // Variable para almacenar el resultado devuelto

  if (operation === "+") {
    result = sumWithReturn(num1, num2); // Guardamos el valor devuelto por la función
    document.getElementById("output").innerText = `Result of ${num1} + ${num2} = ${result}`;
  } else if (operation === "-") {
    result = subtractWithReturn(num1, num2);
    document.getElementById("output").innerText = `Result of ${num1} - ${num2} = ${result}`;
  } else {
    alert("Invalid operation!");
  }
}

// Función que suma dos números y devuelve el resultado
function sumWithReturn(a, b) {
  return a + b;
}

// Función que resta dos números y devuelve el resultado
function subtractWithReturn(a, b) {
  return a - b;
}
