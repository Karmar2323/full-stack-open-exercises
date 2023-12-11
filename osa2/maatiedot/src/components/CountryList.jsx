import BasicButton from "./BasicButton"
const CountryList = (props) => {
  return (
    props.names.map(name => (
        <div key={name}>
          {name}
          <BasicButton text='show' handleClick={() => props.showButtonHandler(name)}/>
        </div>
        )
      )
  )
}
export default CountryList
