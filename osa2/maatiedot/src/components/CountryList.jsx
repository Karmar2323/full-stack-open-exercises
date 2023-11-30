const CountryList = ({names}) => {
  return (
    names.map(name => (
        <div key={name}>
          {name}
        </div>
        )
      )
  )
}
export default CountryList
