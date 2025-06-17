// Función para LAB 1: Ordenador
function lab1() {
  const ordenador1 = {
    marca: "HP",
    procesador: "i7",
    ram: "16Gb",
    hd: "1Tb",
    precio: 1500,
    extras: ["cámara HD", "micrófono estéreo", "disco de acceso rápido"],
    maletin: true
  };

  let resultado = "";

  // Mostrar frase inicial
  resultado += `Mi ordenador es un ${ordenador1.marca}, con procesador ${ordenador1.procesador} y ${ordenador1.ram} de RAM.\n\n`;

  // Recorremos el objeto con for in
  resultado += "Valores del objeto ordenador1:\n";
  for (let prop in ordenador1) {
    resultado += `${prop}: ${ordenador1[prop]}\n`;
  }

  // Mostrar tercer extra
  resultado += `\nTercer extra: ${ordenador1.extras[2]}`;

  document.getElementById("output").innerText = resultado;
}

// Función para LAB 2: Galletas
function lab2() {
  const galletas = {
    marca: "Artiach",
    nombre: "Chiquilín",
    descripcion: "galletas de mantequilla",
    precio: 2.75,
    hayExistencias: true
  };

  let resultado = "ANTES DE CAMBIOS:\n" + JSON.stringify(galletas, null, 2) + "\n\n";

  // CRUD:
  galletas.oferta = true; // Create
  galletas.descripcion = "galletas con mantequilla y cereales"; // Update
  delete galletas.hayExistencias; // Delete

  resultado += "DESPUÉS DE CAMBIOS:\n" + JSON.stringify(galletas, null, 2) + "\n\n";

  // Mostrar keys y values
  resultado += "SOLO PROPIEDADES (keys):\n" + Object.keys(galletas).join(", ") + "\n\n";
  resultado += "SOLO VALORES (values):\n" + Object.values(galletas).join(", ");

  document.getElementById("output").innerText = resultado;
}

// Función para LAB 3: Concesionario
function lab3() {
  // Creamos varios objetos coche
  const coche1 = { marca: "Toyota", modelo: "Corolla", potencia: "110 CV", precio: 18000 };
  const coche2 = { marca: "Ford", modelo: "Focus", potencia: "120 CV", precio: 19000 };
  const coche3 = { marca: "Renault", modelo: "Megane", potencia: "130 CV", precio: 20000 };

  // Array con todos los coches
  const concesionario = [coche1, coche2, coche3];

  // Preguntar qué campo mostrar
  let campo = prompt("¿Qué quieres ver? (marca, modelo, potencia, precio)");

  let resultado = `Mostrando: ${campo}\n\n`;

  for (let coche of concesionario) {
    if (coche[campo]) {
      resultado += `${coche[campo]}\n`;
    } else {
      resultado += "Propiedad no válida\n";
      break;
    }
  }

  document.getElementById("output").innerText = resultado;
}
