// Contenedor de productos
const productsContainer = document.querySelector(".products-container");
// Boton ver mas
const showMoreBtn = document.querySelector(".btn-load");
// Contenedor Categorias
const categoriesContainer = document.querySelector(".categories");
// El HTML Collection de todas las categorias
const categoriesList = document.querySelectorAll(".category");
// Carrito
const cartBtn = document.querySelector(".cart-label");
// Boton para abrir y cerrar el menu
const menuBtn = document.querySelector(".menu-label");
// Carrito div
const cartMenu = document.querySelector(".cart");
// Menu (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
// Overlay
const overlay = document.querySelector(".overlay");
// Cart bubble
const cartBubble = document.querySelector(".cart-bubble");
// Total del carrito
const total = document.querySelector(".total");
// Boton de comprar
const buyBtn = document.querySelector(".btn-buy");
// Boton para borrar
const deleteBtn = document.querySelector(".btn-delete");
// Cart container
const productsCart = document.querySelector(".cart-container");

// Seteamos el carrito
let cart = [];

/* --------- Logica reder products ---------- */
// Funcion para crear el html del producto
// TODO: AGREGAR DATASETS AL BUTTON
const createProductTemplate = (product) => {
  const { id, name, bid, user, userImg, cardImg } = product;
  return `<div class="product">
    <img src="${cardImg}" alt="${name}" />
    
    <!-- contenedor para la info -->
    <div class="product-info">
      <!-- Top -->
      <div class="product-top">
        <h3>${name}</h3>
        <p>Current Bid</p>
      </div>
    
      <!-- mid -->
      <div class="product-mid">
        <div class="product-user">
          <img src="${userImg}" alt="${user}" />
          <p>@${user}</p>
        </div>
        <span>${bid}</span>
      </div>
    
      <!-- bot -->
      <div class="product-bot">
        <div class="offer-time">
          <img src="./assets/img/fire.png" alt="fueguito" />
          <p>05:12:07</p>
        </div>
    
        <button class="btn-add"
        data-id='${id}' 
        data-name='${name}'
        data-bid='${bid}' 
        data-img='${cardImg}'
        >Add</button>
      </div>
    </div>
    </div>`;
};

// Funcion para renderizar productos
const renderProducts = (productList) => {
  productsContainer.innerHTML += productList
    .map(createProductTemplate)
    .join("");
};

/* --------- Logica ver mas ---------- */

// Funcion para saber si estamos al final del array
const isLastIndexOf = () => {
  return appState.currentProductsIndex === appState.productsLimit - 1;
};

// Funcion para renderizar mas productos cuando apretamos ver mas
const showMoreProducts = () => {
  appState.currentProductsIndex += 1;

  let { products, currentProductsIndex } = appState;

  renderProducts(products[currentProductsIndex]);

  if (isLastIndexOf()) {
    showMoreBtn.classList.add("hidden");
  }
};

// Funcion para ocultar el boton ver mas si hay una categoria seleccionada
const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
    showMoreBtn.classList.remove("hidden");
  }

  showMoreBtn.classList.add("hidden");
};

/* --------- Logica filtros ---------- */
// Funcion para cambiar el estado de los botones de las categorias
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];

  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }

    categoryBtn.classList.add("active");
  });
};

// Funcion para cambiar el estado del filtro activo
const changeFiltersState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  setShowMoreVisibility(appState.activeFilter);
};

// Funcion para filtrar los productos
const renderFilteredProducts = () => {
  const filteredProducts = productsData.filter(
    (product) => product.category === appState.activeFilter
  );

  renderProducts(filteredProducts);
};

// Funcion para aplicar filtro
const applyFilter = ({ target }) => {
  if (!isInactiveFilterBtn(target)) return;
  changeFiltersState(target);
  productsContainer.innerHTML = "";
  if (appState.activeFilter) {
    renderFilteredProducts();
    appState.currentProductsIndex = 0;
    return;
  }
  renderProducts(appState.products[0]);
};

// Funcion para saber si el elemento que apretamos es un boton de categoria y no esta activo
const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

/* --------- Logica Menu/Carrito Modal ---------- */
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");

  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }

  overlay.classList.toggle("show-overlay");
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");

  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

// Funcion para cerrar el menu cuando se clickea el overlay
const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

// Funcion para cerrar menues, cuando scrolleamos
const closeOnScroll = () => {
  if (
    barsMenu.classList.contains("open-menu") &&
    cartMenu.classList.contains("open-cart")
  ) {
    return;
  }

  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

/* --------- --------------- ---------- */
/* --------- Logica carrito  ---------- */
/* --------- --------------- ---------- */
// Render carrito
const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">Agrega un producto raton</p>`;
    return;
  }

  alert("tuki");
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const product = e.target.dataset;

  // Tendriamos que hacer un if para verificar que el producto a agregar no este en el carrito
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
  } else {
    createCartProduct(product);
  }

  renderCart();
  console.log(cart);
};

// Funcion para agregar una unidad al producto
const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  );
};

// Funcion para saber si un producto ya existe en el carrito
const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

// Funcion para crear un objeto con la info del produ que queremos agregar al carrito
const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

// Funcion init
const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);

  cartBtn.addEventListener("click", toggleCart);
  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeOnOverlayClick);
  window.addEventListener("scroll", closeOnScroll);

  productsContainer.addEventListener("click", addProduct);
  document.addEventListener("DOMContentLoaded", renderCart);
};

init();
