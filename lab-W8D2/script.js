// Función principal para actualizar el mensaje e imagen del GPS
function updateGPS(km) {
  const messageText = document.getElementById("messageText");
  const messageImage = document.getElementById("messageImage");
  const closeButton = document.getElementById("closeButton");

  // Según la distancia, cambiamos el texto e imagen
  if (km === 100) {
    messageText.textContent = "Arrancamos!";
    messageImage.src = "img/salida.jpg"; // imagen al empezar
    closeButton.style.display = "none";  // Ocultar botón cerrar
  } else if (km === 50) {
    messageText.textContent = "Ya vamos por la mitad!";
    messageImage.src = "img/mitad-camino.jpg";
    closeButton.style.display = "none";
  } else if (km === 15) {
    messageText.textContent = "¡Ya casi estamos!";
    messageImage.src = "img/casi-llegamos.jpg";
    closeButton.style.display = "none";
  } else if (km === 0) {
    messageText.textContent = "¡Llegamos! ¡Vivan las vacaciones!";
    messageImage.src = "img/llegada.jpg"; // imagen de llegada
    closeButton.style.display = "block";  // Mostrar botón cerrar
  }
}

// Función que se ejecuta al hacer clic en la "X"
function endJourney() {
  // Ocultamos todo y cambiamos fondo del body
  document.body.classList.add("final");
}
