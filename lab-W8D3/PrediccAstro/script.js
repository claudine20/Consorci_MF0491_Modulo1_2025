// Escuchamos el clic sobre la imagen que hace de botón
document.getElementById("predictButton").addEventListener("click", function () {
  // Obtenemos el valor del input y lo pasamos a minúsculas
  const signo = document.getElementById("zodiacInput").value.toLowerCase();

  // Elementos donde se mostrará el resultado
  const textoPrediccion = document.getElementById("predictionText");
  const imagenPrediccion = document.getElementById("predictionImage");

  // Variable para guardar el texto a mostrar
  let mensaje = "";
  let imagen = "img/prediccion-general.jpg"; // Imagen por defecto para signos válidos

  // Evaluamos con un switch según el signo introducido
  switch (signo) {
    case "aries":
      mensaje = "Esta semana sentirás un impulso renovado para tomar decisiones importantes.";
      break;
    case "tauro":
      mensaje = "Relájate, Tauro. Es momento de reconectar con la naturaleza.";
      break;
    case "geminis":
      mensaje = "Prepárate para muchas conversaciones interesantes. ¡Tu mente estará brillante!";
      break;
    case "cancer":
      mensaje = "Semana ideal para mimarte. Escucha tu corazón.";
      break;
    case "leo":
      mensaje = "¡Brillarás con fuerza! Aprovecha tu energía para liderar.";
      break;
    case "virgo":
      mensaje = "Organiza tu agenda, Virgo. El orden traerá calma.";
      break;
    case "libra":
      mensaje = "Habrá equilibrio en tus relaciones. Confía en tu intuición.";
      break;
    case "escorpio":
      mensaje = "Tu intensidad será tu aliada esta semana. Pasa a la acción.";
      break;
    case "sagitario":
      mensaje = "Buen momento para planificar un viaje o aprender algo nuevo.";
      break;
    case "capricornio":
      mensaje = "Tu esfuerzo será reconocido. Mantente firme en tus metas.";
      break;
    case "acuario":
      mensaje = "Innovaciones y nuevas ideas llegan a tu vida.";
      break;
    case "piscis":
      mensaje = "Escucha tus emociones. Te guiarán hacia lo correcto.";
      break;
    default:
      // Caso en el que no se introduce un signo correcto
      mensaje = "No reconozco ese signo 😢. ¿Seguro que escribiste bien tu horóscopo?";
      imagen = "img/error.png"; // Imagen de error
      break;
  }

  // Mostramos el mensaje y la imagen correspondiente
  textoPrediccion.textContent = mensaje;
  imagenPrediccion.src = imagen;
});
