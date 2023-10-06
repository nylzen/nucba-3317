const form = document.querySelector("#form");
const input = document.querySelector("#input");
const caja = document.querySelector(".caja");

// input.style.background = "blue";
caja.classList.add("tuki");

let tareas = [];

// let hola = ["holi", "asd", 8];

// const renderHTML = (param) => {
//   return `<li>${param}</li>`;
// };

// const renderizarTarea = (parametro) => {
//   caja.innerHTML = parametro.map(renderHTML).join("");
// };

const renderizarTarea = (parametro) => {
  caja.innerHTML = parametro
    .map((param, index) => {
      return `<li>${param} index: ${index}</li>`;
    })
    .join("");
};

const agregarTarea = (e) => {
  e.preventDefault();
  const tareaInput = input.value.trim();

  //   tareas.push(tareaInput);
  tareas = [...tareas, tareaInput];

  renderizarTarea(tareas);
  //   caja.innerHTML = tareas
  //     .map((tarea) => {
  //       return `<li>${tarea}</li>`;
  //     })
  //     .join("");
};

const init = () => {
  form.addEventListener("submit", agregarTarea);
};

init();
