// ================================
// INVITADOS FIESTA ESTE FINDE
// ================================
// Array inicial con algunos invitados a la fiesta
let invitados = ["Roberto", "Ana", "Luis", "Carlos", "Paula"];

// Variable que acumulará el historial de actualizaciones
let historial = "";

// Función para mostrar la lista de invitados en pantalla, agregando paso al historial
function mostrarInvitados(mensajePaso) {
  // Empieza el bloque del paso con un título
  let lista = mensajePaso + "\nInvitados:\n";

  // Recorre el array de invitados y agrega cada nombre en mayúsculas
  invitados.forEach(nombre => {
    lista += `- ${nombre.toUpperCase()}\n`; // Añade el nombre formateado a la lista
  });

  // Agrega esta parte al historial
  historial += lista + "\n";

  // Muestra el historial completo en el elemento con id 'listaInvitados'
  document.getElementById("listaInvitados").innerText = historial;
}

// Función para modificar la lista según los eventos del enunciado
function modificarLista() {
  // Reinicia el historial antes de empezar
  historial = "";

  // Paso 1: mostrar la lista inicial
  mostrarInvitados("🔹 Lista inicial de invitados:");

  // Paso 2: Juani y Alex se apuntan a la fiesta
  invitados.push("Juani", "Alex");
  mostrarInvitados("🔹 Tras añadir a Juani y Alex:");

  // Paso 3: Marta se cuela en la tercera posición (índice 2)
  invitados.splice(2, 0, "Marta");
  mostrarInvitados("🔹 Tras colarse Marta en tercera posición:");

  // Paso 4: Roberto se va
  invitados = invitados.filter(nombre => nombre !== "Roberto");
  mostrarInvitados("🔹 Tras eliminar a Roberto:");

  // Paso 5: se unen invitados de otra fiesta
  const nuevos = ["Sofía", "Pablo", "Marina"];
  invitados = invitados.concat(nuevos);
  mostrarInvitados("🔹 Lista definitiva,tras añadir invitados de la otra fiesta (Sofía, Pablo y  Marina):");
}


// Función para buscar si una persona está invitada (ignorando mayúsculas/minúsculas)
function buscarInvitado() {
  // Solicita al usuario el nombre que desea buscar
  const nombre = prompt("¿A quién quieres buscar?");

  // Convierte el nombre introducido a minúsculas para comparación
  const nombreNormalizado = nombre.toLowerCase();

  // Busca si algún invitado, convertido también a minúsculas, coincide = está en el array de invitados
  const encontrado = invitados.some(inv => inv.toLowerCase() === nombreNormalizado);


  // Muestra un mensaje según si se encontró el nombre o no en la lista
  if (encontrado) {
    alert(`${nombre} SÍ está invitado.`);
  } else {
    alert(`${nombre} NO está en la lista.`);
  }
}


