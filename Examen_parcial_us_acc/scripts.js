// Aumentar y disminuir el tamaño del texto
const increaseBtn = document.getElementById("increaseText"); // Botón para aumentar texto
const decreaseBtn = document.getElementById("decreaseText"); // Botón para disminuir texto
let fontSize = 16; // Tamaño base

increaseBtn?.addEventListener("click", () => {
  fontSize += 2; // Aumenta en 2px
  document.body.style.fontSize = fontSize + "px"; // Aplica nuevo tamaño
});

decreaseBtn?.addEventListener("click", () => {
  if (fontSize > 10) fontSize -= 2; // Disminuye pero no menos de 10px
  document.body.style.fontSize = fontSize + "px"; // Aplica nuevo tamaño
});

// Activar/desactivar modo oscuro
const darkModeToggle = document.getElementById("darkMode"); // Checkbox modo oscuro

darkModeToggle?.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode"); // Cambia clase dark-mode en el body
});

// Validación accesible del formulario
const contactForm = document.getElementById("contactForm"); // Formulario de contacto

contactForm?.addEventListener("submit", function (e) {
  e.preventDefault(); // Previene el envío por defecto
  let valid = true; // Bandera de validación

  // Validar nombre
  const name = document.getElementById("nameInput");
  const errorName = document.getElementById("error-name");
  if (!name.value.trim()) {
    errorName.textContent = "Name is required."; // Mensaje de error
    name.setAttribute("aria-invalid", "true");
    valid = false;
  } else {
    errorName.textContent = ""; // Limpia mensaje
    name.removeAttribute("aria-invalid");
  }

  // Validar email
  const email = document.getElementById("emailInput");
  const errorEmail = document.getElementById("error-email");
  if (!email.value.includes("@")) {
    errorEmail.textContent = "Valid email is required."; // Mensaje de error
    email.setAttribute("aria-invalid", "true");
    valid = false;
  } else {
    errorEmail.textContent = "";
    email.removeAttribute("aria-invalid");
  }

  // Validar asunto
  const subject = document.getElementById("subjectInput");
  const errorSubject = document.getElementById("error-subject");
  if (!subject.value.trim()) {
    errorSubject.textContent = "Subject is required.";
    subject.setAttribute("aria-invalid", "true");
    valid = false;
  } else {
    errorSubject.textContent = "";
    subject.removeAttribute("aria-invalid");
  }

  // Validar mensaje
  const message = document.getElementById("messageInput");
  const errorMessage = document.getElementById("error-message");
  if (!message.value.trim()) {
    errorMessage.textContent = "Message is required.";
    message.setAttribute("aria-invalid", "true");
    valid = false;
  } else {
    errorMessage.textContent = "";
    message.removeAttribute("aria-invalid");
  }

  if (valid) {
    alert("Form submitted successfully!"); // Mensaje de éxito (puede cambiarse por envío real)
    contactForm.reset(); // Limpia el formulario
  }
});
