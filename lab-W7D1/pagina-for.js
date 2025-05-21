// 1. Imprime los números entre 20 y 50 , ambos incluidos, en orden DESCENDENTE
function imprimirDescendente() {
  let resultado = "Números del 50 al 20:\n"; // Inicia el texto a mostrar

  // Bucle que va desde 50 hasta 20, restando de uno en uno
  for (let i = 50; i >= 20; i--) {
    resultado += i + " "; // Añade cada número al resultado
  }

  // Muestra el resultado en el elemento con ID 'outputDescendente'
  document.getElementById("outputDescendente").innerText = resultado;
}

// 2. Imprime los números pares entre dos números introducidos por el usuario
function imprimirPares() {
  // Pide al usuario dos números
  const inicio = parseInt(prompt("Introduce el primer número:"));
  const fin = parseInt(prompt("Introduce el segundo número:"));

  let resultado = `Números pares entre ${inicio} y ${fin}:\n`; // Título del resultado

  // Bucle que recorre del número inicial al final
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) { // Verifica si el número es par
      resultado += i + " "; // Añade el número par al resultado
    }
  }

  // Muestra los pares encontrados
  document.getElementById("outputPares").innerText = resultado;
}

// 3. Carrito de la compra: se pide el precio de 5 productos
function carritoCompra() {
  let total = 0; // Variable para acumular el precio total
  let precios = ""; // Texto con los precios individuales

  // Bucle que se repite 5 veces, uno por cada producto
  for (let i = 1; i <= 5; i++) {
    let precio = parseFloat(prompt(`Introduce el precio del producto ${i}:`)); // Pide el precio

    // Repite si el usuario introduce un valor no válido
    while (isNaN(precio) || precio < 0) {
      precio = parseFloat(prompt(`⚠️ Precio no válido. Introduce un número positivo para el producto ${i}:`));
    }

    total += precio; // Suma el precio al total
    precios += `Producto ${i}: ${precio.toFixed(2)} €\n`; // Guarda el precio con 2 decimales
  }

  let resultado = precios + "\n"; // Comienza a construir el resultado final

  if (total >= 100) {
    const descuento = total * 0.15; // Calcula el 15% de descuento
    const totalConDescuento = total - descuento; // Aplica el descuento
    resultado += `💰 Total sin descuento: ${total.toFixed(2)} €\n`; // Precio original
    resultado += `🎉 Descuento aplicado (15%): -${descuento.toFixed(2)} €\n`; // Descuento
    resultado += `✅ Total final: ${totalConDescuento.toFixed(2)} €`; // Precio final
  } else {
    resultado += `🛒 Total a pagar: ${total.toFixed(2)} €`; // Si no hay descuento, muestra total simple
  }

  // Muestra el resumen en pantalla
  document.getElementById("outputCarrito").innerText = resultado;
}
