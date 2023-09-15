// 1. traemos el elemento del html

const h3Alert = document.querySelector("#h3Alert");
// console.log(h3Alert);

// 2. le agregamos un escuchador y le decimos lo que va a psar cuando pase ese evento
// h3Alert.addEventListener("click", () => {
//   console.log("Escuchando evento desde js");
// });

// const consolear = () => console.log("holis");
h3Alert.addEventListener("click", consolear);
function consolear() {
  console.log("hola");
}

// <----------------------------Focus/blur------------------------->
const inputBlur = document.querySelector("#inputBlur");

// console.log(inputBlur);

inputBlur.addEventListener("focus", () => {
  //   console.log("tas focus");
  inputBlur.style.backgroundColor = "blue";
  inputBlur.style.padding = "20px";
});

inputBlur.addEventListener("blur", () => {
  inputBlur.style.backgroundColor = "";
  inputBlur.style.padding = "";
});

// <----------------------------Change------------------------->
const inputChange = document.querySelector("#inputChange");
// console.dir(inputChange);

inputChange.addEventListener("change", () => {
  console.log("Cambio el value");
  //   console.log(e.target.value);
});

// <---------------------------- event ------------------------->
const buttonTarget = document.querySelector(".btn");

buttonTarget.addEventListener("click", (event) => {
  //   console.log(event);
  //   console.dir(event.target.textContent);
  const texto = event.target.textContent;
  console.log(texto.toUpperCase());
});

// <--------------------- event default ------------------------->
const form = document.querySelector(".form");
const input = document.querySelector(".inputForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue === "") {
    console.log("Flaco llena el form");
  } else {
    console.log("El input es " + inputValue);
  }
});
// <--------------------- stopPropagation ------------------------->

const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
// console.log(parent, child);

parent.addEventListener("click", () => {
  console.log("parent");
});

child.addEventListener("click", (e) => {
  console.log("child");
  e.stopPropagation();
});

// <---------------------  ------------------------->
const image = document.querySelector(".messi");
const hide = document.querySelector("#hide");
const show = document.querySelector("#show");
const toggle = document.querySelector("#toggle");

// hide.addEventListener("click", () => {
//   image.style.opacity = "0";
// });

// show.addEventListener("click", () => {
//   image.style.opacity = "100%";
// });

// toggle.addEventListener("click", () => {
//   image.classList.toggle("ocultar");
//   if (image.classList.contains("ocultar")) {
//     toggle.innerText = "Mostar";
//   }

//   if (!image.classList.contains("ocultar")) {
//     toggle.innerText = "Ocultar";
//   }
// });

const addClass = document.querySelector("#addClass");

// addClass.addEventListener("click", () => {
//   image.classList.remove("border");
// });

// CAMBIAR SRC
const btnSrc = document.querySelector("#cambiarSrc");
console.log(btnSrc);

btnSrc.addEventListener("click", () => {
  //   image.setAttribute("src", "./img/messi.jpg");
  image.src = "./img/messi.jpg";

  setTimeout(() => {
    image.src = "./img/messi.avif";
  }, 5000);
});
