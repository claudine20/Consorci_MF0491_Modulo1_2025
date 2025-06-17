// =========================================================
// 1. OBTENER REFERENCIAS A LOS ELEMENTOS DEL HTML
//    (Identificamos los elementos con los que vamos a interactuar en la página)
// =========================================================

// Obtenemos el botón principal que dice "¿Quién es?".
// Usamos document.getElementById() para encontrarlo por su 'id' en el HTML.
const abrirModalBtn = document.getElementById('abrirModalBtn');

// Obtenemos la ventana modal completa (el cuadro grande que se oculta/muestra).
// Este es el 'div' que tiene tanto el contenido como el fondo semi-transparente.
const modal = document.getElementById('modal');

// Obtenemos el botón para cerrar la ventana modal (la "x").
const cerrarModalBtn = document.getElementById('cerrarModalBtn');


// =========================================================
// 2. DEFINIR FUNCIONES PARA MANIPULAR LA VENTANA MODAL
//    (Creamos las acciones que queremos que ocurran)
// =========================================================

/**
 * Función para mostrar la ventana modal.
 * Cambia el estilo 'display' del elemento 'modal' para hacerlo visible.
 */
function mostrarModal() {
    // Al cambiar 'display' a 'flex', el navegador hace el elemento visible
    // y lo organiza usando las reglas de flexbox (que en el CSS lo centran).
    modal.style.display = 'flex';
}

/**
 * Función para ocultar la ventana modal.
 * Cambia el estilo 'display' del elemento 'modal' para ocultarlo.
 */
function ocultarModal() {
    // Al cambiar 'display' a 'none', el navegador oculta completamente el elemento
    // y no ocupa espacio en la página.
    modal.style.display = 'none';
}


// =========================================================
// 3. ASIGNAR EVENTOS (LISTENERS) A LOS ELEMENTOS
//    (Decimos al navegador qué hacer cuando el usuario interactúa)
// =========================================================

// Cuando el usuario hace 'click' en el botón 'abrirModalBtn',
// ejecutamos la función 'mostrarModal'.
abrirModalBtn.addEventListener('click', mostrarModal);

// Cuando el usuario hace 'click' en el botón 'cerrarModalBtn' (la "x"),
// ejecutamos la función 'ocultarModal'.
cerrarModalBtn.addEventListener('click', ocultarModal);

// Cuando el usuario hace 'click' en cualquier parte de la ventana (documento),
// verificamos si ha hecho clic fuera del contenido de la modal para cerrarla.
window.addEventListener('click', (event) => {
    // 'event.target' es el elemento específico donde el usuario hizo clic.
    // Si el clic fue directamente sobre el 'div' de la modal (el fondo oscuro),
    // y no sobre el contenido blanco del modal-content:
    if (event.target === modal) {
        ocultarModal(); // Entonces, ocultamos la modal.
    }
});
