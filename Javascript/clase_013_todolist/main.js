// 1. Definimos las variables de los elementos
const taskInput = document.querySelector(".input-text");
const addForm = document.querySelector(".add-form");
const tasksContainer = document.querySelector(".tasks-list");
const deleteAllBtn = document.querySelector(".deleteAll-btn");

// Definir la lista de tareas
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

// ... Localstorage
const saveLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(taskList));
};

// Crear la funcion para renderizar
// Por un lado teniamos el HTML y por otro lado la funcion que mapeaba

// 4. template html
const createTask = ({ name, id }) => {
  //   const { name, id } = task;
  return `<li>${name}<img
      class="delete-btn"
      src="./img/delete.svg"
      alt="boton de borrar"
      data-id="${id}"
    />
  </li>`;
};

// 4. render
const renderTaskList = () => {
  tasksContainer.innerHTML = taskList.map((task) => createTask(task)).join("");
};

// 7. mostrar boton borrar todas
const toggleDeleteAllButton = () => {
  if (!taskList.length) {
    deleteAllBtn.classList.add("hidden");
    return;
  }
  deleteAllBtn.classList.remove("hidden");
};

// 5. VALIDACIONES
const isValidTask = (taskName) => {
  let isValid = true;

  if (!taskName.length) {
    alert("Por favor, ingresa una tarea");
    isValid = false;
  } else if (
    taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase())
  ) {
    alert("Ya existe una tarea con ese nombre");
    isValid = false;
  }

  return isValid;
};

// 3. Funcion para agregar tarea
const addTask = (e) => {
  e.preventDefault();
  //   Valor del input
  const taskName = taskInput.value.trim();

  if (isValidTask(taskName)) {
    taskList = [...taskList, { name: taskName, id: Date.now() }];
    renderTaskList();
    addForm.reset();
    toggleDeleteAllButton();
    saveLocalStorage();

    // console.log(taskList);
  }
};

// 6 REMOVER TAREA
const removeTask = (e) => {
  if (!e.target.classList.contains("delete-btn")) return;

  const filterId = Number(e.target.dataset.id);
  console.log(filterId);
  taskList = taskList.filter((task) => task.id !== filterId);
  renderTaskList();
  toggleDeleteAllButton();
  saveLocalStorage();
};

const removeAll = () => {
  taskList = [];
  renderTaskList();
  toggleDeleteAllButton();
  saveLocalStorage();
};

// 2.Funcion inicializadora
/**
 * Función que inicializa la aplicación y en donde ponemos los event listeners y funciones que queremos que se ejecuten al cargar la página.
 * Lo ideal es ir agregando cada evento a medida que se vayan necesitando, y no hacerlo desde el principio o todo al final.
 */
const init = () => {
  document.addEventListener("DOMContentLoaded", renderTaskList);
  addForm.addEventListener("submit", addTask);
  tasksContainer.addEventListener("click", removeTask);
  deleteAllBtn.addEventListener("click", removeAll);
  document.addEventListener("DOMContentLoaded", toggleDeleteAllButton);
};

init();
