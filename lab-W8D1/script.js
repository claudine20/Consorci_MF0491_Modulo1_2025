// Función que se ejecuta al hacer clic en el botón
function showAnimal() {
  // Obtenemos el valor ingresado en el input y lo pasamos a minúsculas
  const animal = document.getElementById("animalInput").value.toLowerCase();

  // Referencias a los elementos del DOM donde vamos a mostrar la imagen y el nombre
  const petDoor = document.getElementById("petDoor");
  const petName = document.getElementById("petName");

  // Diccionario con los animales disponibles y sus imágenes
  // Creamos un diccionario con los animales disponibles y su imagen
  const animals = {
    perro: {
      name: "Perro",
      image: "img/Perro.jpg"
    },
    gato: {
      name: "Gato",
      //image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=60"
      image: "img/Gato.jpg"
    },
    canario: {
      name: "Canario",
      image: "img/Canario.jpg"
    }
  };

  // Comprobamos si el animal está en el listado
  // Si el animal está en la lista, mostramos la imagen y el nombre
  if (animals[animal]) {
    // Si existe, actualizamos el fondo del div con la imagen
    petDoor.style.backgroundImage = `url('${animals[animal].image}')`;

    // Mostramos el nombre del animal en el pie de foto
    petName.innerText = animals[animal].name;
  } else {
    // Si no existe, limpiamos la imagen y mostramos mensaje de error
    petDoor.style.backgroundImage = "none";
    petName.innerText = "Animal no disponible. Intenta con perro, gato o canario.";
  }
}
