// Traer todos los elementos del html
const form = document.getElementById('form')
const cityInput = document.querySelector('.search-input')
const cardContainer = document.querySelector('.card-container')
const searchMsg = document.querySelector('.search-msg')

const roundNumber = (number) => Math.round(number)

// Controlador para simplificar la data de la ciudad que nos llega
const getCityData = (cityData) => {
    return {
        cityName: cityData.name,
        imageName: cityData.weather[0].icon,
        cityWeatherInfo: cityData.weather[0].description,
        cityTemp: roundNumber(cityData.main.temp),
        cityST: roundNumber(cityData.main.feels_like),
        cityMaxTemp: roundNumber(cityData.main.temp_max),
        cityMinTemp:roundNumber(cityData.main.temp_min),
        cityHumidity: cityData.main.humidity
    }
}

const createCityTemplate = (cityData) => {
    const {
        cityName, 
        imageName, 
        cityWeatherInfo,
        cityTemp,
        cityST,
        cityMaxTemp,
        cityMinTemp,
        cityHumidity
    } = getCityData(cityData)

    return `
    <div class="weather-card animate">
    <div class="weather-info-container">
      <h2 class="weather-title">${cityName}</h2>
      <p class="weather-description">${cityWeatherInfo}</p>
      <div class="weather-temp-container">
        <span class="weather-temp">${cityTemp} °</span>
        <span class="weather-st">${cityST}° ST</span>
      </div>
    </div>
    <div class="weather-img-container">
      <img src="./assets/img/${imageName}.png" alt="weather image" />
    </div>
    <div class="weather-extra-container">
      <div class="weather-minmax-container">
        <span class="weather-span"><i class="fa-solid fa-arrow-up-long"></i>Max: ${cityMaxTemp}º</span>
        <span class="weather-span"><i class="fa-solid fa-arrow-down-long"></i>Min: ${cityMinTemp}º</span>
      </div>
      <span class="weather-humidity">${cityHumidity}% Humedad</span>
    </div>
  </div>
    `
}

const renderCityCard = (cityData) => {
    cardContainer.innerHTML = createCityTemplate(cityData)
}


const changeSearchMsg = (cityData) => {
    const cityName = cityData.name;
    searchMsg.textContent = `Asi esta el clima en ${cityName}, ¿Querés ver el clima de otra ciudad?`
}

// Funcion para ver si el input esta vacio
const isEmptyInput = () => cityInput.value.trim() === ''



// Funcion para ver si la ciudad es valida

// const isInvalidCity = (cityData) => cityData.cod === '404' 
const isInvalidCity = (cityData) => !cityData.id 

const searchCity = async (e) => {
    e.preventDefault()

    // Si el input esta vacio que tire un alert
     if(isEmptyInput()){
        alert('Por favor ingresa una ciudad')
        return
     }

    //  Si el input no esta vacio realice la busqueda
    const fetchedCity = await requestCity(cityInput.value)

    // Si la ciudad no existe nos muestre un error
    if(isInvalidCity(fetchedCity)){
        alert('No existe la ciudad')
        form.reset()
        return
    }

    // Si la ciudad existe renderizamos    
    renderCityCard(fetchedCity)
    changeSearchMsg(fetchedCity)
    form.reset()
}






// Funcion init para inicializar
const init = () => {
    form.addEventListener('submit', searchCity)
}

init()