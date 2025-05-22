// Array de imágenes para el carrusel
const imagenes = ["img/img1.jpg", 
                  "img/img2.jpg", 
                  "img/img3.jpg", 
                  "img/img4.jpg", 
                  "img/img5.jpg"];

// Índice para saber qué imagen se está mostrando
let indice = 0;

// Elementos del DOM
const img = document.getElementById("imagenActual");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

// Función para actualizar la imagen mostrada en el carrusel
function mostrarImagen() {
  img.src = imagenes[indice]; // Actualiza la fuente de la imagen
}

// Evento al hacer clic en "Siguiente"
btnSiguiente.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length; // Avanza y vuelve al principio si llega al final
  mostrarImagen();
});

// Evento al hacer clic en "Anterior"
btnAnterior.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length; // Retrocede y vuelve al final si pasa al principio
  mostrarImagen();
});
