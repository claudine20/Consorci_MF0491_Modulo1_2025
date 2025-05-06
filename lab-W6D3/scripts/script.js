//Mini-ejercicios condicionales !!!

/*1- ENTRADA DISCOTECA

A la entrada a una discoteca, se pregunta al cliente qué edad tiene. Darle una respuesta diferente si la edad es mayor, menor o igual a 18 años. */
// let edad = prompt("¿Cuántos años tienes?");
// if (edad > 18) {
//     alert("Puedes entrar a la discoteca.");
// }

function entradaDiscoteca() {
    const edad = prompt("¿Qué edad tienes?");
    if (edad >= 18) {
      alert("¡Puedes entrar a la discoteca! ¡Disfruta de la noche!");
    } else if (edad < 18 && edad > 0) {
      alert("Lo siento, eres menor de edad. No puedes entrar.");
    } else {
      alert("Por favor, introduce una edad válida.");
    }
  }

// Ejecutamos el ejercicio 1, llamando a la función entradaDiscoteca():
entradaDiscoteca();


// Ejercicio 2 - CINCO COLORES
//Se le pide al usuario que escoja un color (azul, verde, rojo, amarillo y violeta) y darle una respuesta en relación al color elegido. Ejemplo: "el azul es como el mar, siempre que el cielo sea azul (y sea de día)". Dar otra respuesta en el caso que NO elija ninguno de los colores anteriores.


function cincoColores() {
    const color = prompt("Elige un color entre azul, verde, rojo, amarillo o violeta:");
    switch (color.toLowerCase()) {
      case "azul":
        alert("El azul es como el mar, siempre que el cielo sea azul (y sea de día).");
        break;
      case "verde":
        alert("El verde es el color de la esperanza y de muchos campos en primavera.");
        break;
      case "rojo":
        alert("El rojo es un color vibrante que se asocia al calor, a la pasión y la energía.");
        break;
      case "amarillo":
        alert("El amarillo irradia alegría, como el sol en un día de verano.");
        break;
      case "violeta":
        alert("El violeta es un color misterioso, a menudo asociado con la creatividad.");
        break;
      default:
        alert("No has elegido ninguno de los colores indicados.");
    }
  }
  
  // Ejecutamos el ejercicio 2, llamando a la función cincoColores():
  cincoColores();



//Ejercicio 3 - LAMPARA NO ENCIENDE
//Hacer 2 preguntas prompt (si/no). Se puede anidar dos condicionales (uno dentro de otro). Crear el código con condicionales para el algoritmo representado por el siguiente diagrama de flujo:


// Algoritmo para saber por qué no enciende la lámpara
function lamparaNoEnciende() {
    const enchufada = prompt("¿Está la lámpara enchufada? (sí/no)").toLowerCase();
    if (enchufada === "si" || enchufada === "sí") { // estamos aceptando las dos posibles formas de escribir ("sí","si") con o sin tilde.
      const focoQuemado = prompt("¿Está el foco quemado? (sí/no)").toLowerCase();
      if (focoQuemado === "si" || focoQuemado === "sí") {
        alert("Debes reemplazar el foco.");
      } else if (focoQuemado === "no") {
        alert("Debes comprar una nueva lámpara.");
      } else {
        alert("Respuesta no válida.");
      }
    } else if (enchufada === "no") {
      alert("Debes enchufar la lámpara.");
    } else {
      alert("Respuesta no válida.");
    }
  }
  
  // Ejecutamos el ejercicio 3, llamando a la función lamparaNoEnciende():
  lamparaNoEnciende();
  



