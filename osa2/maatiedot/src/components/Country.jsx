import UnorderedList from './UnorderedList'
import Weather from './Weather'

const Country = props => {
  if(!props.country) {
    return null
  }
  return (
  <div>
    <h1>{props.country["name"]["common"]}</h1>
    <div>capital {props.country["capital"][0]}</div>
    <div>area {props.country.area}</div>
    <h4>languages:</h4>
    <ul>
      <UnorderedList langObj={props.country.languages}/>
    </ul>
    <img src={props.country.flags.png} alt={props.country.flags.alt}
      width="160"
    />
    <Weather city={props.country["capital"][0]} weather={props.weather}/>
  </div>
  )
}

export default Country
