// Guardamos las credenciales válidas
const validUsername = "admin";  // Usuario correcto
const validPassword = "1234";   // Contraseña correcta

let attempts = 3; // Contador de intentos permitidos

// Capturamos el botón y le añadimos evento click
document.getElementById("loginBtn").addEventListener("click", function () {
  // Obtenemos los valores introducidos por el usuario
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Comprobamos si las credenciales son correctas
  if (user === validUsername && pass === validPassword) {
    message.style.color = "green";
    message.textContent = "✅ Acceso concedido. Redirigiendo...";
    // Abrimos una nueva página si son correctos
    setTimeout(() => {
      window.open("https://www.w3schools.com");
    }, 1500);
  } else {
    // Si fallan, restamos un intento
    attempts--;
    message.style.color = "red";
    if (attempts > 0) {
      message.textContent = `❌ Usuario o contraseña incorrectos. Intentos restantes: ${attempts}`;
    } else {
      message.textContent = "❌ Has superado el número máximo de intentos. Acceso bloqueado.";
      // Desactivamos el botón después del último intento
      document.getElementById("loginBtn").disabled = true;
      document.getElementById("loginBtn").style.backgroundColor = "gray";
    }
  }
});
