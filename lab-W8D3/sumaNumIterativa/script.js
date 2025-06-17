// Esperamos al clic del botón para comenzar el proceso
document.getElementById("startButton").addEventListener("click", startSumming);

// Función principal
function startSumming() {
  let continueLoop = true; // Controla el bucle
  let totalSum = 0; // Acumulador total de sumas
  const historyList = document.getElementById("historyList");
  const finalSum = document.getElementById("finalSum");

  historyList.innerHTML = ""; // Limpiamos lista anterior si la hubiera
  finalSum.textContent = ""; // Limpiamos mensaje final

  while (continueLoop) {
    // Pedimos dos números
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));

    // Validación básica
    if (isNaN(num1) || isNaN(num2)) {
      alert("⚠️ Por favor introduce números válidos.");
      continue; // Volver a empezar esta iteración
    }

    // Calculamos y mostramos la suma
    let suma = num1 + num2;
    totalSum += suma; // Acumulamos

    // Mostramos en pantalla esta suma parcial
    const li = document.createElement("li");
    li.textContent = `${num1} + ${num2} = ${suma}`;
    historyList.appendChild(li);

    // Preguntamos si desea continuar
    let respuesta = prompt("¿Quieres continuar? (S/N)").toLowerCase();

    if (respuesta !== "s") {
      continueLoop = false; // Salimos del bucle
    }
  }

  // Mostramos la suma total acumulada al final
  finalSum.textContent = `🔢 La suma total de todos los números introducidos es: ${totalSum}`;
}
