// Creamos el div
const card = document.createElement("div");
card.classList.add("card");

// Creamos la img
const cardImg = document.createElement("img");
cardImg.src = "https://via.placeholder.com/150";
cardImg.classList.add("card-img");

// Creamos el titulo
const cardTitle = document.createElement("h3");
cardTitle.classList.add("card-title");
cardTitle.innerText = "Titulo de la tarjeta";

// Creamos el body
const cardBody = document.createElement("div");
cardBody.classList.add("card-body");
cardBody.innerText = "Contenido de la tarjeta";

// Creamos el button
const cardButton = document.createElement("button");
cardButton.classList.add("card-button");
cardButton.innerText = "Accion";

// Anexamos todos los elementos a la card
card.appendChild(cardImg);
card.appendChild(cardTitle);
card.appendChild(cardBody);
card.appendChild(cardButton);

// Creamos el contenedor
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
cardContainer.appendChild(card);

// document.body.appendChild(cardContainer);
// Agregemoslo al final del main
const main = document.querySelector("main");
main.appendChild(cardContainer);

// INNERHTML FORMA 2
const caja = document.querySelector(".caja");
// caja.innerHTML = `<h1 class="titulo">Titulo</h1>`;

// innerHtml + template literal ``
const titulo = "Titulo de la caja";
const animales = ["Perro", "Gato", "Iguana", "Tortuga"];

caja.innerHTML = `
    <div class='card'>
        <img src="https://via.placeholder.com/150" class='card-img' alt="" />
        <h2>${titulo}</h2>
        <p>Loremimpsum</p>
        ${animales.map((animal) => `<p>${animal}</p>`).join("")}
        <button class='card-button'>click</button>
    </div>
`;

// Funcion generadora
const contendedorGen = document.querySelector(".fn-generadora");

const cardInfo = {
  title: "Sera que funciona?",
  description: "Tuki",
  img: "https://picsum.photos/250/200",
};

// const createCardTemplate = (card) => {
//   const { title, description, img } = card;

//   return `
//   <div class='card'>
//     <img src="${img}" alt="${title} " class="card-img" />
//     <h3 class="card-title">${title}</h3>
//     <p>${description}</p>
//   </div>
//   `;
// };

// contendedorGen.innerHTML = createCardTemplate(cardInfo);

// FN generadora con map
const cardsContainer2 = document.querySelector(".cards-container");

const animalesObj = [
  {
    name: "Perro",
    description: "Ladra",
  },
  {
    name: "Gato",
    description: "Maulla",
  },
  {
    name: "Pez",
    description: "Nada",
  },
];

const createCardTemplate = (animal) => {
  const { name, description } = animal;

  return `
  <div class='card'>
    <h3 class="card-title">${name}</h3>
    <p>${description}</p>
  </div>
  `;
};

const cardsTemplate = animalesObj.map(createCardTemplate).join("");

// const test = animalesObj.map((animal) => {
//   const { name, description } = animal;

//   return `
//   <div class='card'>
//     <h3 class="card-title">${name}</h3>
//     <p>${description}</p>
//   </div>
//   `;
// });

// let dos = 2;

// dos += 5;
// console.log(dos);
cardsContainer2.innerHTML += cardsTemplate;

// Json

const jsonData = JSON.parse(`{
    "name": "Nelson",
    "age": 18,
    "numeros": [1, 2, 3, 4]
  }
  `);

// console.log(jsonData);
// console.log(JSON.stringify(jsonData));

const obj = [
  {
    nombre: "messi",
    edad: 20,
  },
  {
    nombre: "Dibu",
  },
];

// LOCALSTORAGE
localStorage.setItem("usuario", "messi");
localStorage.Messi = JSON.stringify(obj);

// Obtener datos del localstorace
const usuario = localStorage.getItem("usuario");

console.log(usuario);

const user = document.querySelector(".user");
user.innerHTML = `El usuario es: ${usuario}`;

const $p = document.querySelector(".holi");
const objeto = localStorage.getItem("Messi");
const holi = JSON.parse(objeto);

// $p.innerHTML = objeto;
console.log(new Date());
