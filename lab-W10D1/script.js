// =========================================================
//  REFERENCIAS A ELEMENTOS DEL DOM
// =========================================================
const sceneImage = document.getElementById('scene-image');
const storyText = document.getElementById('story-text');
const optionsContainer = document.getElementById('options-container');
const messageBox = document.getElementById('message-box');
const backgroundMusic = document.getElementById('background-music');
const sfx = document.getElementById('sfx');

// =========================================================
//  DEFINICIÓN DE ESCENAS (EL CORAZÓN DE LA AVENTURA)
// =========================================================
// Cada objeto en este diccionario representa una escena/estado del juego.
// 'id': Identificador único de la escena.
// 'image': Ruta de la imagen de fondo para esta escena.
// 'text': El texto de la historia que se mostrará en esta escena.
// 'options': Un array de objetos, donde cada objeto es una opción para el jugador:
//    'text': El texto del botón.
//    'nextSceneId': El ID de la escena a la que se transiciona si se elige esta opción.
//    'action' (opcional): Una función a ejecutar si se elige esta opción (ej. añadir un ítem).
// 'onEnter' (opcional): Una función que se ejecuta al entrar en esta escena.

const scenes = {
    'start': {
        image: 'img/bosque_entrada.jpg',
        text: "Te encuentras en la entrada de un antiguo bosque, los árboles se alzan imponentes y una ligera neblina cubre el suelo. Dos caminos se abren ante ti: uno que parece sombrío y otro que está débilmente iluminado. ¿Qué camino eliges?",
        options: [
            { text: "Tomar el camino sombrío", nextSceneId: 'caminoSombrío' },
            { text: "Tomar el camino iluminado", nextSceneId: 'caminoIluminado' }
        ],
        onEnter: () => playBackgroundMusic('audio/musica_bosque.mp3') // Ejemplo: reproduce música al inicio
    },
    'caminoSombrío': {
        image: 'img/camino_sombrio.jpg',
        text: "El camino sombrío se estrecha y los árboles se cierran sobre ti. De repente, escuchas un gruñido cercano. ¿Qué haces?",
        options: [
            { text: "Investigar el gruñido", nextSceneId: 'investigarGruñido' },
            { text: "Correr en dirección contraria", nextSceneId: 'huir' }
        ]
    },
    'caminoIluminado': {
        image: 'img/camino_iluminado.jpg',
        text: "El camino iluminado te lleva a un claro donde ves una antigua fuente y unas bayas rojas brillantes. ¿Qué te llama más la atención?",
        options: [
            { text: "Acercarte a la fuente", nextSceneId: 'fuenteMagica' },
            { text: "Recoger las bayas", nextSceneId: 'recogerBayas' }
        ]
    },
    'investigarGruñido': {
        image: 'img/lobo.jpg',
        text: "Te acercas con cautela y te encuentras con un lobo solitario que te mira fijamente. Parece herido. ¿Intentas ayudarlo o te retiras lentamente?",
        options: [
            { text: "Intentar ayudar al lobo", nextSceneId: 'ayudarLobo' },
            { text: "Retirarme lentamente", nextSceneId: 'huir' }
        ]
    },
    'huir': {
        image: 'img/final_huida.jpg',
        text: "Corres sin mirar atrás hasta que sales del bosque, pero la aventura ha terminado por hoy. Quizás otro día tengas más valor.",
        options: [
            { text: "Volver a empezar", nextSceneId: 'start' }
        ],
        onEnter: () => playSfx('audio/escape_sound.mp3') // Efecto de sonido de escape
    },
    'fuenteMagica': {
        image: 'img/fuente.jpg',
        text: "Bebes de la fuente y sientes una energía renovada. ¡Has ganado un punto de energía extra! ¿Qué haces ahora?",
        // Ejemplo de acción que modifica el estado del juego (energía)
        options: [
            { text: "Seguir explorando el claro", nextSceneId: 'claroContinuacion' },
            { text: "Buscar un nuevo camino", nextSceneId: 'desvio' }
        ],
        action: () => showMessage("¡Energía extra obtenida!", "success")
    },
    'recogerBayas': {
        image: 'img/bayas.jpg',
        text: "Las bayas brillan con un resplandor extraño. Al probar una, sientes un hormigueo... ¡y de repente puedes hablar con los animales!",
        // Ejemplo de acción que modifica una habilidad del jugador
        options: [
            { text: "Hablar con un pájaro cercano", nextSceneId: 'hablarPajaro' },
            { text: "Buscar la salida del bosque", nextSceneId: 'finalVictoria' }
        ],
        onEnter: () => showMessage("¡Nueva habilidad: Hablar con animales!", "info")
    },
    'ayudarLobo': {
        image: 'img/lobo_amistad.jpg',
        text: "Curaste las heridas del lobo y, agradecido, te guía a través de un atajo secreto que te lleva a un tesoro oculto.",
        options: [
            { text: "Recoger el tesoro", nextSceneId: 'finalVictoria' }
        ],
        onEnter: () => playSfx('audio/treasure_sound.mp3')
    },
    'hablarPajaro': {
        image: 'img/pajaro_hablando.jpg',
        text: "El pájaro te revela el camino hacia la salida del bosque, pero te advierte de un guardián invisible. ¿Te arriesgas?",
        options: [
            { text: "Avanzar con cautela", nextSceneId: 'enfrentarGuardian' },
            { text: "Buscar otra salida", nextSceneId: 'desvio' }
        ]
    },
    'enfrentarGuardian': {
        image: 'img/guardian.jpg',
        text: "Un aura mística se materializa frente a ti. Es el Guardián del Bosque. Debes resolver su acertijo para pasar.",
        options: [
            { text: "Intentar resolver el acertijo", nextSceneId: 'acertijo' },
            { text: "Luchar", nextSceneId: 'lucharGuardian' } // Ejemplo de una rama de "combate"
        ]
    },
    'lucharGuardian': {
        image: 'img/final_derrota.jpg',
        text: "El Guardián es demasiado poderoso. Tu aventura termina aquí. (Final de derrota aleatorio)",
        options: [
            { text: "Volver a empezar", nextSceneId: 'start' }
        ],
        onEnter: () => {
            const endings = [
                "Un rayo de luz te desintegra.",
                "El bosque te absorbe.",
                "Despiertas de nuevo en la entrada, sin memoria del Guardián."
            ];
            const randomEnding = endings[Math.floor(Math.random() * endings.length)];
            storyText.innerHTML = `<p>${storyText.innerHTML} ${randomEnding}</p>`;
        }
    },
    'acertijo': {
        image: 'img/acertijo.jpg',
        text: "El Guardián te pregunta: 'Siempre estoy delante de ti, pero no me puedes ver. ¿Qué soy?'",
        options: [
            { text: "El Futuro", nextSceneId: 'finalVictoria', action: () => showMessage("¡Respuesta correcta!", "success") },
            { text: "Tu sombra", nextSceneId: 'finalDerrotaAcertijo', action: () => showMessage("¡Respuesta incorrecta!", "error") },
            { text: "El aire", nextSceneId: 'finalDerrotaAcertijo', action: () => showMessage("¡Respuesta incorrecta!", "error") }
        ]
    },
    'finalDerrotaAcertijo': {
        image: 'img/final_derrota.jpg',
        text: "El Guardián niega con la cabeza. La niebla te envuelve y pierdes el conocimiento. Tu aventura ha terminado.",
        options: [
            { text: "Volver a empezar", nextSceneId: 'start' }
        ]
    },
    'claroContinuacion': {
        image: 'img/claro_continuacion.jpg',
        text: "Después de la fuente, exploras más el claro. Encuentras un sendero cubierto de hojas. ¿Lo sigues?",
        options: [
            { text: "Sí, seguir el sendero", nextSceneId: 'desvio' },
            { text: "No, volver a la entrada del bosque", nextSceneId: 'start' }
        ]
    },
    'desvio': {
        image: 'img/desvio.jpg',
        text: "El sendero te lleva a un desvío inesperado. ¿Izquierda o derecha?",
        options: [
            { text: "Izquierda", nextSceneId: 'finalVictoria' }, // Podría ser otra rama
            { text: "Derecha", nextSceneId: 'finalDerrota' } // Podría ser otra rama
        ]
    },
    'finalVictoria': {
        image: 'img/final_victoria.jpg',
        text: "¡Felicidades! Has encontrado la salida secreta del bosque y descubriste un antiguo tesoro. ¡Has ganado la aventura!",
        options: [
            { text: "Jugar de nuevo", nextSceneId: 'start' }
        ],
        onEnter: () => {
            playBackgroundMusic('audio/musica_victoria.mp3'); // Nueva música para la victoria
            showMessage("¡VICTORIA!", "success", 5000); // Mensaje grande de victoria
        }
    },
    'finalDerrota': {
        image: 'img/final_derrota.jpg',
        text: "Caes en una trampa oculta y no puedes salir. Fin de la aventura.",
        options: [
            { text: "Volver a empezar", nextSceneId: 'start' }
        ],
        onEnter: () => playSfx('audio/game_over.mp3') // Sonido de derrota
    }
};

// =========================================================
//  ESTADO DEL JUEGO
// =========================================================
let currentSceneId = 'start'; // La escena inicial
let gameInterval; // Para un posible setInterval, si lo usáramos


// =========================================================
//  FUNCIONES AUXILIARES DE JUEGO
// =========================================================

/**
 * Muestra un mensaje temporal en la caja de mensajes.
 * @param {string} msg El texto del mensaje.
 * @param {string} type El tipo de mensaje (ej. 'success', 'error', 'info'). Añadir clases CSS para estilos.
 * @param {number} duration Duración en ms antes de que el mensaje se oculte.
 */
function showMessage(msg, type = '', duration = 3000) {
    messageBox.textContent = msg;
    messageBox.className = ''; // Limpia clases previas
    messageBox.classList.add(type); // Añade clase de tipo (ej. 'success')
    messageBox.classList.remove('hidden'); // Hace visible el mensaje

    setTimeout(() => {
        messageBox.classList.add('hidden'); // Oculta el mensaje después de la duración
    }, duration);
}

/**
 * Reproduce música de fondo.
 * @param {string} src La ruta al archivo de audio.
 */
function playBackgroundMusic(src) {
    if (backgroundMusic.src !== window.location.origin + '/' + src) { // Evita recargar si ya es la misma
        backgroundMusic.src = src;
        backgroundMusic.play().catch(e => console.log("No se pudo reproducir la música de fondo:", e));
    }
}

/**
 * Reproduce un efecto de sonido (SFX).
 * @param {string} src La ruta al archivo de audio.
 */
function playSfx(src) {
    sfx.src = src;
    sfx.play().catch(e => console.log("No se pudo reproducir el SFX:", e));
}


/**
 * Renderiza la escena actual en el DOM.
 * @param {string} sceneId El ID de la escena a cargar.
 */
function renderScene(sceneId) {
    // Validar si la escena existe
    const scene = scenes[sceneId];
    if (!scene) {
        console.error(`Escena con ID '${sceneId}' no encontrada.`);
        return;
    }

    currentSceneId = sceneId; // Actualiza la escena actual

    // 1. Ejecutar la función onEnter de la escena si existe
    if (scene.onEnter && typeof scene.onEnter === 'function') {
        scene.onEnter();
    }

    // 2. Actualizar la imagen de la escena
    sceneImage.src = scene.image;
    sceneImage.classList.add('fade-in'); // Añadir animación de fade-in
    // Quitar la clase después de la animación para que pueda volver a activarse
    sceneImage.addEventListener('animationend', () => {
        sceneImage.classList.remove('fade-in');
    }, { once: true }); // El { once: true } asegura que el listener se elimine después de una ejecución

    // 3. Actualizar el texto de la historia
    storyText.textContent = scene.text;
    storyText.classList.add('fade-in');
    storyText.addEventListener('animationend', () => {
        storyText.classList.remove('fade-in');
    }, { once: true });

    // 4. Limpiar opciones anteriores
    optionsContainer.innerHTML = '';

    // 5. Crear nuevos botones de opción
    scene.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.textContent = option.text;
        button.addEventListener('click', () => {
            // Ejecutar la acción de la opción si existe
            if (option.action && typeof option.action === 'function') {
                option.action();
            }
            // Mover a la siguiente escena
            renderScene(option.nextSceneId);
        });
        optionsContainer.appendChild(button);
    });
}

// =========================================================
//  INICIO DEL JUEGO
// =========================================================

// Cuando el DOM esté completamente cargado, renderizamos la escena inicial.
// Esto es el equivalente moderno y recomendado de 'body onload'.
document.addEventListener('DOMContentLoaded', () => {
    renderScene('start'); // Carga la primera escena al iniciar
});

// =========================================================
//  EJEMPLOS DE OTROS EVENTOS Y CONCEPTOS
// =========================================================

// Ejemplo de setTimeout: Muestra un mensaje inicial después de 2 segundos.
// setTimeout(() => {
//     showMessage("¡Bienvenido a la aventura! Elige sabiamente.", "info");
// }, 2000);

// Ejemplo de setInterval y clearInterval: Un contador que se puede detener.
// No se usa directamente en la aventura, pero es para demostrar el concepto.
let counter = 0;
let intervalId;

function startCounter() {
    // console.log("Contador iniciado...");
    // intervalId = setInterval(() => {
    //     counter++;
    //     console.log("Contador:", counter);
    // }, 1000); // Incrementa cada segundo
}

function stopCounter() {
    // console.log("Contador detenido.");
    // clearInterval(intervalId); // Detiene el intervalo
    // counter = 0; // Reinicia el contador
}

// Puedes añadir botones en el HTML para 'startCounter()' y 'stopCounter()'
// <button onclick="startCounter()">Iniciar Contador</button>
// <button onclick="stopCounter()">Parar Contador</button>

// Ejemplo de mouseover/mouseout: Cambiar estilo de un elemento al pasar el ratón
// (Podrías aplicarlo a los botones de opción, por ejemplo, pero ya lo manejamos con CSS :hover)
/*
const myElement = document.createElement('div');
myElement.textContent = "Pasa el ratón por aquí";
myElement.style.padding = '10px';
myElement.style.border = '1px solid white';
myElement.style.marginTop = '20px';
optionsContainer.insertAdjacentElement('afterend', myElement); // Añade un elemento después de las opciones

myElement.addEventListener('mouseover', () => {
    myElement.style.backgroundColor = 'lightgray';
    myElement.style.color = 'black';
});

myElement.addEventListener('mouseout', () => {
    myElement.style.backgroundColor = '';
    myElement.style.color = '';
});
*/

// Ejemplo de números aleatorios y arrays (ya usado en 'lucharGuardian' y 'finalVictoria')
// const randomNumbers = [1, 5, 9, 12, 20];
// const randomIndex = Math.floor(Math.random() * randomNumbers.length);
// console.log("Número aleatorio de la array:", randomNumbers[randomIndex]);