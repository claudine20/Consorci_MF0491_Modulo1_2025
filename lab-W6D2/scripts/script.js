//Mini-ejercicios JS !!!


// Ejercicio 1- Pide al usuario dos números. Muestra el resultado de la resta de ambos, en pantalla y/o en consola
function Resta(a, b) { // Declaración la función resta
  return a - b; // Retorna la resta de a y b
}
let numer1 = parseInt(prompt("Introduce un número: ")); // Solicita al usuario un número
let numer2 = parseInt(prompt("Introduce otro número: ")); // Solicita al usuario otro número

console.log("Resta: ", Resta(numer1, numer2)); // Imprime la resta de ambos, en consola.
alert("Resta " + Resta(numer1, numer2)); // Imprime la resta de ambos, en pantalla





// Ejercicio 2- Pide al usuario que introduzca nombre, localidad donde vive y hobby. Que se muestre en una sola frase: "Te llamas XXX, vives en YYY, y te gusta ZZZ".
let nombre = prompt("Introduce tu nombre: "); // Solicita al usuario un nombre
let localidad = prompt("Introduce tu localidad: "); // Solicita la localidad donde vive
let hobby = prompt("Introduce tu hobby: "); // Solicita su hobby 
datosUsario = `Te llamas ${nombre}, vives en ${localidad}, y te gusta ${hobby}`; // Crea una variable que almacena los datos del usuario

console.log(datosUsario); // Imprime los datos del usuario en consola.
alert(datosUsario); // Imprime los datos del usuario en pantalla.



// Ejercicio 3- Pedir el radio al usuario para calcular el área de un círculo. Buscad la fórmula para calcular la superficie del círculo y el valor de PI (con 4 decimales).
let radio = parseFloat(prompt("Introduce el radio del círculo: ")); // Solicita al usuario el radio del círculo.
const PI= 3.1416; // Asigna el valor de PI a una variable;PI= 3.1416; 
let area = PI * Math.pow(radio, 2); // Calcula el área del círculo usando la fórmula A = π * r^2
//let area =  Math.PI * radio ** 2; // Otra forma de calcular el área del círculo usando la fórmula A = π * r^2

console.log(`El área de un círculo con radio ${radio} es: ${area}`); // Imprime el área del círculo en consola.
alert(`El área de un círculo con radio ${radio} es: ${area}`); // Imprime el área del círculo en pantalla.
