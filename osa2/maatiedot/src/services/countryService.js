import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather"

const getAll = () => {
  console.log('requesting all')
  const request = axios.get(baseUrl + "all")
  return request.then(response => response.data)
}

const getCountry = (name) => {
  console.log('requesting name')
  const request = axios.get(baseUrl + "name/" + name.toLowerCase())
  return request.then(response => response.data)
}

const getWeather = (lat, lon, YOUR_API_KEY) => {
  console.log('requesting weather', weatherUrl)
  const request = axios.get(weatherUrl + `?lat=${lat}&lon=${lon}&units=metric&APPID=${YOUR_API_KEY}`)
  return request.then(response => response.data)
}

export default {getAll, getCountry, getWeather}
