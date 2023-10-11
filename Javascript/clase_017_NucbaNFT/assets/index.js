// Contenedor de productos
const productsContainer = document.querySelector(".products-container");
// Boton ver mas
const showMoreBtn = document.querySelector(".btn-load");
// Contenedor Categorias
const categoriesContainer = document.querySelector(".categories");
// El HTML Collection de todas las categorias
const categoriesList = document.querySelectorAll(".category");

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
    
        <button class="btn-add">Add</button>
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

// Funcion init
const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);
};

init();
