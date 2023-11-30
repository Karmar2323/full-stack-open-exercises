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
  const [searchedCountry, setCountry] = useState('')
  const [countries, setCountries] = useState(null)
  const [resultCountry, setResultCountry] = useState(null)

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

  const handleFilterChange = event => {
    setCountry(event.target.value)
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

  return (
    <div>
      <Filter text='find countries' filter={searchedCountry} handleChange={handleFilterChange}/>
      <Countries countries={countriesToShow ?? []}/>
      <Country country={resultCountry}/>
    </div>
  )
}

export default App
