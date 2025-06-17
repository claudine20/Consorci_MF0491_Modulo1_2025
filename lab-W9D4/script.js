// Obtenemos una referencia al botón que abre la modal
const abrirModalBtn = document.getElementById('abrirModalBtn');
// Obtenemos una referencia a la ventana modal completa
const modal = document.getElementById('modal');
// Obtenemos una referencia al botón de cierre (la cruz) dentro de la modal
const cerrarModalBtn = document.getElementById('cerrarModalBtn');

// ------------------------------------------------------------------
// Función para mostrar la ventana modal
// ------------------------------------------------------------------
function mostrarModal() {
    // Cambiamos el estilo 'display' de 'none' a 'flex'
    // 'flex' no solo hace visible el elemento, sino que también permite centrar su contenido
    modal.style.display = 'flex';
    // También podrías usar 'block' si no necesitas el centrado con flexbox en el overlay
    // modal.style.display = 'block';
}

// ------------------------------------------------------------------
// Función para ocultar la ventana modal
// ------------------------------------------------------------------
function ocultarModal() {
    // Cambiamos el estilo 'display' de nuevo a 'none' para ocultarla
    modal.style.display = 'none';
}

// ------------------------------------------------------------------
// Event Listeners (escuchadores de eventos)
// ------------------------------------------------------------------

// Cuando se hace clic en el botón 'abrirModalBtn', se llama a la función mostrarModal
abrirModalBtn.addEventListener('click', mostrarModal);

// Cuando se hace clic en el botón 'cerrarModalBtn' (la cruz), se llama a la función ocultarModal
cerrarModalBtn.addEventListener('click', ocultarModal);

// Cuando el usuario hace clic en cualquier lugar fuera del contenido de la modal, la cierra
window.addEventListener('click', (event) => {
    // Comprobamos si el clic fue directamente sobre el elemento 'modal' (el overlay oscuro)
    if (event.target === modal) {
        ocultarModal(); // Si es así, ocultamos la modal
    }
});


// ------------------------------------------------------------------
// Funciones adicionales sugeridas (setTimeout, setInterval)
// Estas son opcionales y solo para demostración
// ------------------------------------------------------------------

// Ejemplo de body onload:
// Esto se ejecutaría cuando el body haya terminado de cargar,
// pero es más común y recomendado usar DOMContentLoaded para scripts externos
/*
window.onload = function() {
    console.log("El body se ha cargado completamente.");
    // Podrías llamar a una función aquí si quisieras
    // setTimeout(mostrarModal, 3000); // Muestra la modal después de 3 segundos al cargar la página
};
*/

// Ejemplo de setTimeout para mostrar la modal después de un tiempo
// Descomenta la siguiente línea para probarlo
// setTimeout(mostrarModal, 3000); // La modal aparecerá 3 segundos después de que se cargue la página

// Ejemplo de setInterval para realizar una acción repetidamente (con un botón para detenerlo)
// No es directamente aplicable a este ejercicio de modal, pero se menciona en la nota
let intervaloDemo; // Variable para almacenar la referencia del intervalo

function iniciarIntervalo() {
    // console.log("Intervalo iniciado.");
    // intervaloDemo = setInterval(() => {
    //     console.log("Acción repetida cada 2 segundos.");
    // }, 2000); // Repite cada 2000 milisegundos (2 segundos)
}

function pararIntervalo() {
    // console.log("Intervalo detenido.");
    // clearInterval(intervaloDemo); // Detiene el intervalo usando su referencia
}

// Podrías añadir botones en el HTML para 'iniciarIntervalo' y 'pararIntervalo' si quisieras
// <button onclick="iniciarIntervalo()">Iniciar Conteo</button>
// <button onclick="pararIntervalo()">Parar Conteo</button>