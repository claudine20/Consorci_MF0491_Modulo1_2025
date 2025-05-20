// ==========================
// 1. LISTADO DEL ZOO A LA INVERSA
// ==========================

function mostrarZooInverso() {
  // Declaramos el array del zoo
  let zoo = ['León', 'Elefante', 'Jirafa', 'Cebra', 'Mono', 'Hipopótamo'];

  // Declaramos la variable output antes de usarla
  let output = "Listado del zoo al revés:\n";

  // Mostramos el listado del zoo al revés en consola
  console.log("Listado del zoo al revés:");

  // Recorremos el array al revés: desde el último índice hasta el primero
  for (let i = zoo.length - 1; i >= 0; i--) {
    console.log(zoo[i]); // Esto lo muestra en consola
    output += zoo[i] + "\n"; // Esto construye el texto para mostrar en la página
  }

  // Esta línea es la que muestra el resultado en el HTML
  document.getElementById("outputZooInverso").innerText = output;
}




// ==========================
// 2. CATÁLOGO DE MÚSICA (CRUD)
// ==========================

let catalogo = ['Queen', 'The Beatles', 'Coldplay', 'Nirvana', 'Miles Davis'];

// Función: mostrar todo
function mostrarTodo() {
  console.log("\nCatálogo actual:");
  catalogo.forEach((banda, index) => {
    console.log(`${index}: ${banda}`);
  });
}

// Función: borrar primero
function borrarPrimero() {
  catalogo.shift();
  console.log("Se borró la primera banda.");
  mostrarTodo(); // Muestra el nuevo catálogo
}

// Función: borrar último
function borrarUltimo() {
  catalogo.pop();
  console.log("Se borró la última banda.");
  mostrarTodo(); // Muestra el nuevo catálogo
}

// Función: borrar/cambiar por índice
function modificarPorIndice() {
  let indice = parseInt(prompt("Introduce el índice a modificar:"));
  if (isNaN(indice) || indice < 0 || indice >= catalogo.length) {
    alert("Índice no válido.");
    return;
  }

  let accion = prompt("¿Quieres borrar o cambiar este elemento? (borrar/cambiar)");
  if (accion === "borrar") {
    catalogo.splice(indice, 1);
  } else if (accion === "cambiar") {
    let nuevo = prompt("Introduce el nuevo nombre:");
    catalogo.splice(indice, 1, nuevo);
  } else {
    alert("Opción no válida.");
    return
  }
  mostrarTodo(); // Muestra el nuevo catálogo
}

// Función: buscar banda y mostrar índice
function buscarBanda() {
  let nombre = prompt("Introduce el nombre de la banda:");
  let indice = catalogo.indexOf(nombre);
  if (indice === -1) {
    alert("No se encontró la banda.");
    console.log(`La banda "${nombre}" no se encuentra en el catálogo.`);
  } else {
    alert(`La banda está en la posición ${indice}`);
    console.log(`La banda "${nombre}" está en la posición ${indice}.`);
  }
}

// Función: mostrar banda por índice
function mostrarPorIndice() {
  let indice = parseInt(prompt("Introduce el índice a mostrar:"));
  if (isNaN(indice) || indice < 0 || indice >= catalogo.length) {
    alert("Índice no válido.");
    console.log("Índice fuera de rango.");
  } else {
    alert(`Banda: ${catalogo[indice]}`);
    console.log(`Banda en la posición ${indice}: ${catalogo[indice]}`);
  }
}

// Función: mostrar todas las bandas del catálogo mediante.foreach()
function mostrarTodasLasBandas() {
  let mensaje = "Listado completo del catálogo:\n";

  catalogo.forEach(function(banda, indice) {
    mensaje += `${indice}: ${banda}\n`;
  });

  alert(mensaje);

  // También mostrar por consola
  console.log("\nListado completo del catálogo:");
  catalogo.forEach((banda, index) => {
    console.log(`${index}: ${banda}`);
  });
}


// EXTRA: añadir bandas en bucle hasta que el usuario escriba "fin"
function añadirBandas() {
  let nueva;
  while (true) {
    nueva = prompt("Introduce una banda para añadir (escribe 'fin' para salir):");
    if (nueva.toLowerCase() === 'fin') break;
    catalogo.push(nueva);
  }
}

// ==========================
// MENÚ PRINCIPAL
// ==========================

function menuMusica() {
  let opcion;

  do {
    opcion = prompt(
      "CATÁLOGO DE MÚSICA\n" +
      "1. Mostrar todo\n" +
      "2. Borrar primero\n" +
      "3. Borrar último\n" +
      "4. Modificar por índice (borrar o cambiar)\n" +
      "5. Buscar banda\n" +
      "6. Mostrar por índice\n" +
      "7. Mostrar todas las bandas\n" +
      "8. Añadir bandas (hasta 'fin')\n" +
      "0. Salir"
    );

    switch (opcion) {
      case "1":
        mostrarTodo();
        break;
      case "2":
        borrarPrimero();
        break;
      case "3":
        borrarUltimo();
        break;
      case "4":
        modificarPorIndice();
        break;
      case "5":
        buscarBanda();
        break;
      case "6":
        mostrarPorIndice();
        break;
        case "7":
        mostrarTodasLasBandas();
        break;
      case "8":
        añadirBandas();
        break;
      case "0":
        alert("Saliendo del programa...");
        break;
      default:
        alert("Opción no válida");
    }

  } while (opcion !== "0");
}

// Ejecutar menú
menuMusica();
