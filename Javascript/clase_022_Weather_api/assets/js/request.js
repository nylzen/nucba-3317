// Guardamos la api key
const API_KEY = "f23176137cce83c695f822bfc22bee5a"

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=



const requestCity = async (city) => {

    const options = {
        units: 'metric',
        lang: 'es'
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${options.units}&lang=${options.lang}&APPID=${API_KEY}`)

        if(response.status === 404) {
            console.error('Error a traer los datos del clima')
        }
    
        const data = await response.json()
        return data
        
    } catch (error) {
        console.error(error)
    }
}
