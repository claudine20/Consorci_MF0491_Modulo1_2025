// Array con colores que se irán aplicando
const colores = ["lightblue", "lightgreen", "yellow", "orange", "pink", "violet", "salmon"];

// Índice para seguir qué color toca
let indiceColor = 0;

// Accede al input y al div donde se cambia el color
const input = document.getElementById("entrada");
const cuadro = document.getElementById("cuadro");

// Evento cada vez que el usuario escribe en el input
input.addEventListener("input", () => { // Escucha el evento "input" en el campo input, es decir, cada vez que el usuario escribe o borra algo. El segundo parámetro es una función anónima que se ejecuta en respuesta a ese evento.
  // Aplica el color actual del array
  cuadro.style.backgroundColor = colores[indiceColor];//Cambia el color de fondo del div llamado cuadro; Toma un color del array colores, usando el índice indiceColor, que indica en qué color estamos ahora.

  // Avanza al siguiente color y vuelve al primero si llega al final
  indiceColor = (indiceColor + 1) % colores.length; // Esto incrementa el índice en 1 cada vez que se escribe una letra; 
  // El operador % (módulo) hace que vuelva a 0 cuando llega al final del array.
});
