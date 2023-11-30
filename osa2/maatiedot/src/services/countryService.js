import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

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

export default {getAll, getCountry}
