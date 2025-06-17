// -----------------------------
// 1. Cálculo del Peso Ideal (IMC)
// -----------------------------

function calculateIdealWeight() {
  // Obtenemos la altura desde el input
  const heightInput  = parseFloat(document.getElementById("height").value);
  
  // Obtenemos el peso desde el input
  const weight = parseFloat(document.getElementById("weight").value);

  // Validamos que los campos no estén vacíos
  if (isNaN(heightInput ) || isNaN(weight) || heightInput  <= 0) {
    document.getElementById("imcResult").innerText = "Introduce valores válidos.";
    return;
  }

//Si el usuario introduce altura en centímetros (por ejemplo, 170), la convertimos a metros
  const height = heightInput > 3 ? heightInput / 100 : heightInput;

  // Calculamos el índice de masa corporal (IMC) con la fórmula: peso / (altura * altura)
  const imc = weight / (height * height);

  // Redondeamos el IMC a 2 decimales
  const imcRounded = imc.toFixed(2);

  // Mostramos el resultado y la interpretación
  let message = `Para la altura ${height} m y el peso ${weight} kg, tu IMC es ${imcRounded}. `;

  // Interpretación del IMC
  if (imc < 18.5) {
    message += "Estás por debajo del peso recomendado.";
  } else if (imc < 25) {
    message += "Tu peso es normal.";
  } else if (imc < 30) {
    message += "Tienes sobrepeso.";
  } else {
    message += "Tienes obesidad.";
  }

  // Mostramos el mensaje en el div
  document.getElementById("imcResult").innerText = message;
}

// ----------------------------------
// 2. Rellenar Ticket de Cine
// ----------------------------------

function fillTicket() {
  // Recogemos todos los valores introducidos por el usuario
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const row = document.getElementById("row").value;
  const seat = document.getElementById("seat").value;

  // Insertamos esos valores dentro de los spans del ticket
  document.getElementById("ticketName").innerText = name || "----";
  document.getElementById("ticketDate").innerText = date || "----";
  document.getElementById("ticketRow").innerText = row || "----";
  document.getElementById("ticketSeat").innerText = seat || "----";
}
