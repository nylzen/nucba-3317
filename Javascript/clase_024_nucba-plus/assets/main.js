// Traemos del dom los elementos
const cardsContainer = document.querySelector(".cards-container");
const btnContainer = document.querySelector(".pagination");
const prevBTN = document.querySelector(".left");
const nextBTN = document.querySelector(".right");
const pageNumber = document.querySelector(".page-number");
const filterButtons = document.querySelectorAll(".btn");
const filterContainer = document.querySelector(".filter-container");

// https://developer.themoviedb.org/docs/image-basics base url para la img
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

// AppState
const appState = {
  page: null,
  total: null,
  searchParameter: TRENDING,
};

// Mostrar Peliculas
const showMovies = async () => {
  cardsContainer.innerHTML = renderLoader();
  const movies = await fetchMovies(appState.searchParameter);
  appState.page = movies.page;
  appState.total = movies.total_pages;
  // console.log(appState)
  setPaginationState();
  renderCards(movies.results);
};

// Funcion para renderizar el loader
const renderLoader = () => {
  return `
    <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    `;
};

// Funcion para setear el estado actual de la paginacion
const setPaginationState = () => {
  pageNumber.textContent = appState.page;
  togglePreviousBtn(appState.page);
  toggleNextBtn(appState.page, appState.total);
};

const togglePreviousBtn = (page) => {
  if (page === 1) {
    prevBTN.classList.add("disabled");
  } else {
    prevBTN.classList.remove("disabled");
  }
};

const toggleNextBtn = (page, total) => {
  if (page === total) {
    nextBTN.classList.add("disabled");
  } else {
    nextBTN.classList.remove("disabled");
  }
};

// Template HTML a renderizar
const createCardTemplate = (movie) => {
  //   console.log(movie.poster_path);
  const { title, poster_path, vote_average, release_date } = movie;

  return `
    <div class="card">
        <img loading="lazy" src="${
          poster_path
            ? IMG_BASE_URL + poster_path
            : "./assets/img/placeholder.png"
        }" alt="pelicula" class="card-img" />
        <div class="card-popularity">${formatVoteAverage(vote_average)}% de popularidad</div>
        <div class="card-content">
            <h2>${title}</h2>
            <p>Fecha de estreno: ${formatDate(release_date)}</p>
        </div>
    </div>
    `;
};

const formatVoteAverage = (voteAverage) => Math.floor(voteAverage * 10)

const formatDate = (date) => {
    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
}



// Renderizar
const renderCards = (movies) => {
  cardsContainer.innerHTML = movies
    .map((movie) => createCardTemplate(movie))
    .join("");
};

/* ----------------------------------------------*/
// --------------------CAMBIAR PAGINA------------
// ----------------------------------------------

// Funcion para cambiar de pagina hacia adelante
const nextPage = () => {
  if (appState.page === appState.total) return;
  appState.page += 1;
  changePage();
};

// Funcion para cambiar de pagina hacia atras
const previousPage = () => {
  if (appState.page === 1) return;
  appState.page -= 1;
  changePage();
};

// Funcion para cambiar de pagina
const changePage = async () => {
  cardsContainer.innerHTML = renderLoader();
  const movies = await fetchMovies(appState.searchParameter, appState.page);
  setPaginationState();
  renderCards(movies.results);
};

/* ----------------------------------------------*/
// --------------------CAMBIAR CATEGORIA----------
// ----------------------------------------------
const changeSearchParameter = (e) => {
  if (!isActiveCategoryBtn(e.target)) return;
  const selectedParameter = e.target.dataset.filter
  appState.searchParameter = parameterSelector(selectedParameter)
  setActiveButton(selectedParameter)
  showMovies()
};

const isActiveCategoryBtn = (btn) =>
  btn.classList.contains("btn") && !btn.classList.contains("btn--active");

const parameterSelector = (filterType) => {
  return filterType === "TOPRATED"
    ? TOPRATED
    : filterType === "UPCOMING"
    ? UPCOMING
    : TRENDING;
};

const setActiveButton = (selectedParameter) => {
    // console.log(selectedParameter)
    const buttons = [...filterButtons]
    console.log(buttons)
    buttons.forEach(btn => {
        if(btn.dataset.filter != selectedParameter){
            btn.classList.remove('btn--active')
        } else {
            btn.classList.add('btn--active')
        }
    })
}

const init = () => {
  window.addEventListener("DOMContentLoaded", showMovies);
  nextBTN.addEventListener("click", nextPage);
  prevBTN.addEventListener("click", previousPage);
  filterContainer.addEventListener("click", changeSearchParameter);
};

init();
