// 1. Imprimir del 20 al 5
function contar() {
  for (let i = 20; i >= 5; i--) {
    console.log(i);
  }
}

// 2. Cuadrados del 3 al 33
function cuadrados() {
  for (let i = 3; i <= 33; i++) {
    console.log(i * i);
  }
}

// 3. Función con día y tiempo
function elTiempo() {
  let dia = prompt("¿Qué día es?");
  let clima = prompt("¿Qué tiempo hace?");

  if (dia !== null && clima !== null) {
    console.log(`El ${dia.toLowerCase()} hará ${clima.toLowerCase()}.`);
  } else {
    console.log("Has cancelado la entrada de datos.");
  }
}

// 4. Array de recetas
let recetas = ["Tortilla", "Paella", "Gazpacho", "Pisto", "Lentejas"];
let divRecetas = document.getElementById("recetas");
divRecetas.innerHTML = "<ul>" + recetas.map(r => `<li>${r}</li>`).join("") + "</ul>";

// 5. Bucle while con lenguajes
function pedirLenguaje() {
  let lenguajes = ["Python", "Java", "C", "Ruby", "JavaScript"];
  let num;

  do {
    num = parseInt(prompt("Número de orden (1 a 5, 0 para salir):"));
    if (num > 0 && num <= lenguajes.length) {
      console.log(`Lenguaje: ${lenguajes[num - 1]}`);
    } else if (num !== 0) {
      console.log("Número fuera de rango");
    }
  } while (num !== 0);
}

// 6. Stock de Papá Noel
function repartirRegalos() {
  let stock = parseInt(prompt("¿Cuántos regalos hay inicialmente? (mayor a 100)"));
  while (isNaN(stock) || stock <= 100) {
    stock = parseInt(prompt("Por favor, introduce un número mayor a 100"));
  }

  let total = stock;
  let contenedor = document.getElementById("regalos");
  contenedor.innerHTML = "";

  while (stock > 0) {
    let repartidos = parseInt(prompt("¿Cuántos regalos has repartido hoy?"));
    if (isNaN(repartidos) || repartidos < 0) {
      alert("Introduce un número válido");
      continue;
    }
    stock -= repartidos;

    if (stock <= 0) {
      contenedor.innerHTML += `<p>¡Misión cumplida! Hasta el año que viene.</p>`;
    } else {
      contenedor.innerHTML += `<p>Quedan ${stock} regalos.</p>`;
      if (stock < 100) {
        contenedor.innerHTML += `<p><strong>¡Ojo, quedan menos de 100 regalos!</strong></p>`;
      }
    }
  }
}
