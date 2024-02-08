const Filter = (props) => {
  return(
    <div>
      filter shown with <input id="filter" autoComplete="name"
      value={props.filter} onChange={props.handleChange}/>
    </div>
  )
}
export default Filter
