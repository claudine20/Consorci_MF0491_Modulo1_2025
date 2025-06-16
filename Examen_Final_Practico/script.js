// Cargar tareas desde localStorage o iniciar como array vacío
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all"; // Filtro actual (todas, completadas, pendientes)

// Ejecutar una vez que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("task-form");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const taskList = document.getElementById("task-list");
  const filterButtons = document.querySelectorAll(".filters button");

  // Evento al enviar el formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevenir recarga de la página
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    // Validación: el título es obligatorio
    if (!title) return alert("El título es obligatorio");

    // Crear objeto de tarea
    const newTask = {
      id: Date.now(), // ID único usando timestamp
      title,
      desc,
      completed: false
    };

    // Agregar nueva tarea y guardar
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    form.reset(); // Limpiar campos
  });

  // Aplicar filtro al hacer clic en un botón
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter;
      renderTasks(); // Mostrar tareas filtradas
    });
  });

  // Guardar tareas en localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Renderizar lista de tareas
  function renderTasks() {
    taskList.innerHTML = ""; // Limpiar lista antes de renderizar

    // Filtrar tareas según el filtro seleccionado
    let filteredTasks = tasks;
    if (currentFilter === "completed") {
      filteredTasks = tasks.filter(task => task.completed);
    } else if (currentFilter === "pending") {
      filteredTasks = tasks.filter(task => !task.completed);
    }

    // Crear elementos visuales para cada tarea
    filteredTasks.forEach(task => {
      const li = document.createElement("li");
      li.className = `task ${task.completed ? "completed" : ""}`;

      // Contenido textual
      const content = document.createElement("div");
      content.innerHTML = `<strong>${task.title}</strong><br><small>${task.desc}</small>`;

      // Controles de acción
      const actions = document.createElement("div");
      const completeBtn = document.createElement("button");
      completeBtn.textContent = task.completed ? "Pendiente" : "Completada";
      completeBtn.classList.add("complete-btn"); // Añadimos la clase
      completeBtn.addEventListener("click", () => toggleComplete(task.id));

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Eliminar";
      deleteBtn.classList.add("delete-btn"); //clase personalizada
      // Añadir evento para eliminar tarea
      deleteBtn.addEventListener("click", () => deleteTask(task.id));

      // Añadir botones y contenido al <li>
      actions.appendChild(completeBtn);
      actions.appendChild(deleteBtn);
      li.appendChild(content);
      li.appendChild(actions);
      taskList.appendChild(li); // Añadir a la lista
    });
  }

  // Alternar estado de completado de una tarea
  function toggleComplete(id) {
    tasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
  }

  // Eliminar una tarea por ID
  function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
  }

  // Renderizar tareas al cargar la página
  renderTasks();
});
