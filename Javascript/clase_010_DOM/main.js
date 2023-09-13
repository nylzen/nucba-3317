// getElementById()
// Che, del documento(html) traeme el elemento que tenga el id tanto "logo"
const logo = document.getElementById("logo");
// console.log(logo);
// console.dir(logo);
// console.log(logo.innerText);
// console.log(logo.href);

// getElementsByClassname()
const $li = document.getElementsByClassName("link");
// console.log(li[0].innerHTML);

// const links = [...li];
const links = Array.from($li);

// links.forEach((item) => console.log(item.innerHTML));
//  getElementsByTagName()

const pTags = document.getElementsByTagName("p");
// console.log(pTags);
const pTagArray = [...pTags];

// pTagArray.forEach((item) => console.log(item.textContent));

// querySelector()
const caja1 = document.querySelector("#caja1");
// console.log(caja1);
const caja2 = document.querySelector(".caja2");
// console.dir(caja2);
// console.log(caja2.innerHTML);

// console.log(document.querySelector("p").innerHTML);

// querySelectorAll()
const li = document.querySelectorAll(".link");
// console.log(li);

// const liArray = Array.from(li);
const liArray = [...li];
// console.log(liArray);

// liArray.forEach((li) => console.log(li));
const mapli = liArray.map((item) => item);
// console.log(mapli);

// if (window.confirm("tuki")) {
//   console.log("E verda");
// } else {
//   console.log("falso");
// }

// Crear elemento desde js
/*
1. traer el div
2. crear elemento
3. darle contenido
4. agregarlo en e div
*/

const container = document.querySelector(".container");
// console.log(container);

// Crear el elemento
const h2 = document.createElement("h2");
// console.log(h2.textContent) // no tiene nada;

// darle contenido
h2.textContent = "Hola estoy escribiendo desde js :tuki:";

// Lo agregamos
// container.appendChild(h2);

// setTimeout(() => {
//   container.appendChild(h2);
// }, 5000);

const btn = document.getElementById("btn");
const tuki = document.querySelector(".tuki");

btn.addEventListener("click", () => {
  console.log("HOAAAAAJK");
  //   tuki.style.background = "crimson";
  tuki.classList.add("messi");
  tuki.textContent = "ME CAMBIE DE COLOR";
  //   window.scrollTo(0, 0);
});
