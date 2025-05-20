// ========================
// 1. TABLAS DE MULTIPLICAR
// ========================
// Esta función genera tablas de multiplicar para los números entre "desde" y "hasta".
function mostrarTablas() {
  // Captura los valores del input y los convierte a número entero
  const desde = parseInt(document.getElementById("desde").value);
  const hasta = parseInt(document.getElementById("hasta").value);
  let output = ""; // Inicializa una variable para almacenar el resultado

  // Verifica que los valores sean válidos: entre 1 y 10, y que 'hasta' sea mayor que 'desde'
  if (isNaN(desde) || isNaN(hasta) || desde < 1 || hasta > 10 || desde >= hasta) {
    output = "Por favor introduce dos números entre 1 y 10, y el segundo debe ser mayor que el primero.";
  } else {
    // Bucle externo para recorrer cada número entre 'desde' y 'hasta'
    for (let i = desde; i <= hasta; i++) {
      output += `Tabla del ${i}:\n`; // Título de la tabla actual
      // Bucle interno para generar la tabla de multiplicar del número actual
      for (let j = 1; j <= 10; j++) {
        output += `${i} x ${j} = ${i * j}\n`; // Calcula y añade cada línea
      }
      output += "\n"; // Añade espacio entre tablas
    }
  }

  // Muestra el resultado en el elemento con id 'tablasOutput'
  document.getElementById("tablasOutput").innerText = output;
}

// ====================================
// 2. ACCESO A DATOS EN BUCLES  MULTI-DIMENSIONALES
// ====================================
function accederDatos() {
  // Arrays multidimensionales con números y nombres
  const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];
  const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];

  let output = ""; // Variable para almacenar la salida

  // Accede a números específicos en la estructura de arrays anidados
  output += `Número 26: ${medidas[2][2][1]}\n`;
  output += `Número 134: ${medidas[0][1]}\n`;
  output += `Número 92: ${medidas[2][3]}\n\n`;

  // Accede a nombres específicos
  output += `Nombre Rosa: ${nombres[2][1]}\n`;
  output += `Nombre Roberto: ${nombres[1][2]}\n\n`;

  // a) Muestra todos los nombres de mascotas en una sola línea separados por comas
  output += "Mascotas en una línea: " + nombres[0].join(", ") + "\n";

  // b) Muestra los nombres de mascotas en líneas separadas con guión
  output += "Mascotas en líneas separadas:\n";
  nombres[0].forEach(nombre => output += `- ${nombre}\n`);

  // Muestra la salida en el elemento con id 'datosOutput'
  document.getElementById("datosOutput").innerText = output;
}

// ========================
// 3. GALLETA DE LA FORTUNA
// ========================
function galletaFortuna() {
  // Array con nombres de estudiantes
  const estudiantes = ["Ferdi", "Laura", "Marco", "Isabel", "Lucía", "Tomás"];
  // Array con frases aleatorias de fortuna
  const frases = [
    "Este fin de semana debes escuchar tus sueños.",
    "Tu suerte llegará cuando menos lo esperes.",
    "Un viaje inesperado te traerá alegría.",
    "Hoy es un buen día para comenzar algo nuevo.",
    "Alguien cercano tiene buenas noticias para ti."
  ];

  // Selecciona aleatoriamente un estudiante
  const estudiante = estudiantes[Math.floor(Math.random() * estudiantes.length)];
  // Selecciona aleatoriamente una frase de fortuna
  const fortuna = frases[Math.floor(Math.random() * frases.length)];

  // Crea el mensaje final combinando estudiante y fortuna
  const resultado = `Vaticinio para ${estudiante}:\n${fortuna}`;
  // Muestra el resultado en el elemento con id 'fortunaOutput'
  document.getElementById("fortunaOutput").innerText = resultado;
}
