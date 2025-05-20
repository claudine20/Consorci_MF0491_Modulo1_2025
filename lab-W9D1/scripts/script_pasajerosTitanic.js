// ========== INVENTARIO DEL ZOO ==========

/**
 * Esta función manipula un array de animales y muestra cada cambio paso a paso.
 */
function manejarZoo() {
  let output = ''; // Variable para acumular el texto que se mostrará en pantalla

  // 1. Creamos el array con 5 animales iniciales
  let zoo = ['León', 'Elefante', 'Jirafa', 'Cebra', 'Mono'];
  console.log("Inicio:", zoo); // Mostramos el array inicial en consola
  output += `Inicio: ${zoo.join(', ')}\n`; // Formateamos el array como texto y lo añadimos a la variable output

  // 2. Añadimos dos animales al final del array con el método push()
  zoo.push('Hipopótamo', 'Tigre');
  console.log("Después de añadir 2:", zoo);
  output += `Añadir 2: ${zoo.join(', ')}\n`;

  // 3. Quitamos un animal del final con pop()
  zoo.pop();
  console.log("Después de eliminar 1:", zoo);
  output += `Eliminar 1: ${zoo.join(', ')}\n`;

  // 4. Reemplazamos el tercer animal (índice 2) por otro
  zoo[2] = 'Panda';
  console.log("Cambiar tercero:", zoo);
  output += `Cambiar el tercero: ${zoo.join(', ')}\n`;

  // 5. Mostramos el total de animales con length
  console.log("Total animales:", zoo.length);
  output += `Total animales: ${zoo.length}\n`;

  // 6. Recorremos el array con un bucle for e imprimimos cada animal
  output += "Lista completa:\n";
  for (let i = 0; i < zoo.length; i++) {
    console.log(zoo[i]);
    output += `- ${zoo[i]}\n`;
  }

  // Mostramos todo el resultado en la sección HTML correspondiente
  document.getElementById("outputZoo").innerText = output;
}



// ========== LISTA PASAJEROS TITANIC ==========

// Array base con 12 pasajeros
let pasajeros = [
  "Ana", "Luis", "Carlos", "Elena",
  "Sofía", "Pedro", "Laura", "Jorge",
  "Valeria", "Tomás", "Marta", "Diego"
];

/**
 * Esta función simula las operaciones sobre la lista original de pasajeros del Titanic.
 */
function manejarTitanic() {
  let output = '';

  // Creamos una copia del array original para no mezclarlo con los pasajeros manuales
  let lista = [...pasajeros]; // Spread operator copia el array

  // 1. Quitamos los dos últimos con pop()
  lista.pop(); // quita "Diego"
  lista.pop(); // quita "Marta"

  // 2. Añadimos dos nuevos pasajeros con push()
  lista.push("Lucía", "Manuel");

  // 3. El segundo pasajero se enferma → lo reemplazamos (índice 1) = "Luis" por "Ismael"
  lista[1] = "Ismael";

  // 4. Imprimimos la lista definitiva con forEach
  output += `\nLista final:\n`;
  lista.forEach((pasajero, index) => {
    output += `${index + 1}. ${pasajero}\n`;
  });

  // Mensaje final
  output += "\n¡Buena suerte a todos los pasajeros! 🚢";

  // Mostramos el resultado en pantalla
  document.getElementById("outputTitanic").innerText = output;
}



// ========== AÑADIR PASAJEROS MANUALMENTE ==========

// Lista para guardar los pasajeros añadidos por el usuario
let listaManual = [];

/**
 * Esta función se ejecuta al hacer clic en el botón "Agregar".
 * Toma el valor del input y lo añade al array listaManual.
 */
function agregarPasajero() {
  // Tomamos el nombre del input y eliminamos espacios con trim()
  let nombre = document.getElementById("nuevoPasajero").value.trim();

  // Verificamos que el campo no esté vacío
  if (nombre) {
    listaManual.push(nombre); // Añadimos el nombre al array
    mostrarPasajerosManuales(); // Actualizamos la vista
    document.getElementById("nuevoPasajero").value = ""; // Limpiamos el input
  } else {
    alert("Por favor, escribe un nombre válido."); // Mensaje de error si está vacío
  }
}

/**
 * Esta función muestra en pantalla todos los pasajeros añadidos manualmente.
 */
function mostrarPasajerosManuales() {
  let output = "Pasajeros añadidos manualmente:\n";

  // Recorremos el array y formateamos la lista
  listaManual.forEach((p, i) => {
    output += `${i + 1}. ${p}\n`; // i + 1 porque queremos empezar desde 1
  });

  // Mostramos el resultado en el <pre id="listaManual">
  document.getElementById("listaManual").innerText = output;
}

