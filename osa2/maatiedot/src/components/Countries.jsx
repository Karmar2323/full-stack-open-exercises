
import CountryList from './CountryList'

const Countries = props => {
  const advice = ' matches, specify another filter'
  if (!props.countries) {
    return null
  }
  const length = props.countries.length
  console.log('countries', length)
  if (length > 10) {
    return <div>Too many{advice}</div>
  }
  if (length === 1) {
    return null
  }
  if (length < 1) {
    return <div>No{advice}</div>
  }
  if (length <= 10) {
    return <CountryList names={props.countries} />
  }
  return <div>No{advice}</div>
}

export default Countries
