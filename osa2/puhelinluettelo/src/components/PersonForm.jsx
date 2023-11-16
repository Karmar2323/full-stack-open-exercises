const PersonForm = (props) => {
    return(
      <form onSubmit={props.onSubmit}>
        <div>
          name: <input id="name" autoComplete="name"
          value={props.nameValue} onChange={props.onNameChange}/>
        </div>
        <div>
          number: <input id="number"
          value={props.numberValue} onChange={props.onNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm
