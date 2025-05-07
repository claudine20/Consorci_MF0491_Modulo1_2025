// Condicionales beca y gasolina!!!


// 1- BECA ESTUDIANTE
function becaEstudiante() {
    const edad = parseInt(prompt("¿Qué edad tienes?"));
    const residencia = prompt("¿Dónde resides?").toLowerCase().trim();
    const familiaNumerosaInput = prompt("¿Tienes familia numerosa? (sí/no)").toLowerCase().trim();
    const esGenioProgramacionInput = prompt("¿Eres un genio de la programación? (sí/no)").toLowerCase().trim();
  
    const esFamiliaNumerosa = familiaNumerosaInput === "sí" || familiaNumerosaInput === "si"; // Cambiado a "si" para permitir ambas opciones
    const esGenioProgramacion = esGenioProgramacionInput === "sí"  || esGenioProgramacionInput === "si";
  
    if ((edad >= 18 && residencia === "barcelona") ||
        (edad > 30 && esFamiliaNumerosa) ||
        (edad >= 12 && edad <= 18 && esGenioProgramacion)) {
      alert("¡Felicidades! Cumples con los requisitos para la beca.");
    } else {
      alert("Lo siento, no cumples con los requisitos para la beca.");
    }
  }
  
  // Llamamos a la función becaEstudiante() para ejecutarla:
  becaEstudiante();

  
  
  
  // 2- COCHE NO ARRANCA
  function cocheNoArranca() {
    const viveCerca = confirm("¿Vives cerca? (sí/no)");  // Usando confirm para permitir respuestas booleanas
    const ganasDeCaminar = confirm("¿Tienes ganas de caminar? (sí/no)");  // Usando confirm para permitir respuestas booleanas
  
    if (viveCerca && ganasDeCaminar) {
      alert("Te vas andando y ya lo arreglarás mañana.");
    } else {
      const tieneGasolina = confirm("¿Tiene gasolina?");
      if (!tieneGasolina) {
        const tieneDinero = confirm("¿Tienes dinero?");
        if (tieneDinero) {
          alert("Hay que poner gasolina.");
        } else {
          alert("Vas en metro.");
        }
      } else {
        const tieneBateria = confirm("¿Tiene batería?");
        if (!tieneBateria) {
          alert("Hay que recargar la batería.");
        } else {
          alert("Pásate por el mecánico.");
        }
      }
    }
  }
  
  // Llamamos a la función cocheNoArranca() para ejecutarla:
  cocheNoArranca();

 