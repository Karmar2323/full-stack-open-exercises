/**maiden tiedot: exercises 2.18. - 2.20. from fullstackopen.com
 * retrieves country data from studies.cs.helsinki.fi/restcountries
 * embeds images of flags from API created by https://flagpedia.net
 * solution by Markus Karjalainen
*/
import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'
import countryService from './services/countryService'

const App = () => {
  const [searchedCountry, setSearchedCountry] = useState('')
  const [countries, setCountries] = useState(null)
  const [resultCountry, setResultCountry] = useState(null)
  const [capitalWeather, setCapitalWeather] = useState(null)
  const api_key = import.meta.env.VITE_SOME_KEY || ''

  useEffect(() => {
    if(!countries) {
      // get remote once when countries == null, then filter the object locally
      countryService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
    }
  }, [countries])

  useEffect(() => {
    if (!countries) {
      return
    }
    if (countriesToShow.length === 1) { 
      console.log("getting result", countriesToShow[0])
      // requests of same name repeats if user keeps writing more letters
      countryService
        .getCountry(countriesToShow[0]) // common name
        .then(response => {
          setResultCountry(response)
        })
        .catch(e => console.log(e))
    }
    else {
      setResultCountry(null)
    }
  }, [searchedCountry])

  useEffect(() => {
    if (!countries || !resultCountry || api_key === '')  {
      console.log("weather unavailable")
      return
    }
    countryService
      .getWeather(resultCountry["capitalInfo"]["latlng"][0],
        resultCountry["capitalInfo"]["latlng"][1], api_key)
      .then(response => {
        setCapitalWeather(response)
      })
      .catch(e => console.log(e))
  }, [resultCountry])

  const handleFilterChange = event => {
    setSearchedCountry(event.target.value)
  }

  const filterCountries = countryList => {
    if (!countryList) {
      return []
    }
    const countryArray = countries.map(c => c["name"]["common"]).filter(nc =>
      nc.toLowerCase().includes(searchedCountry.toLowerCase())
    )
    return countryArray
  }
  
  const countriesToShow = filterCountries(countries)

  const onShowButton = name => {
    setSearchedCountry(name)
  }

  return (
    <div>
      <Filter text='find countries' filter={searchedCountry} handleChange={handleFilterChange}/>
      <Countries countries={countriesToShow} showButtonHandler={onShowButton}/>
      <Country country={resultCountry} weather={capitalWeather}/>
    </div>
  )
}

export default App
