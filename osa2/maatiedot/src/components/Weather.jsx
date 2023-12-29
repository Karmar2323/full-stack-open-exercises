const Weather = props => {
  if (!props.weather) {
    return null
  }
  const iconUrl = `https://openweathermap.org/img/wn/${Object.values(props.weather["weather"][0])[3]}@2x.png`
  console.log("loading: " + iconUrl)
    return (
      <div>
      <h2>Weather in {props.city}</h2>
      <p>temperature {props.weather["main"]["temp"]} Celcius</p>
      <img src={iconUrl} alt={props.weather["weather"]["description"]}/>
      <p>wind {props.weather["wind"]["speed"]} m/s</p>
      </div>
   )
}

export default Weather
