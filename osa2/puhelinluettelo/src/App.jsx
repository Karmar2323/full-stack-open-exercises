import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
    )

  const addName = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    if (persons.map(person => person.name).includes(person.name)) {
      alert(`${person.name} is already added to phonebook`)
      return
    }

    axios
      .post('http://localhost:3001/persons', person)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNameChange = (event) =>
    setNewName(event.target.value)

  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)

  const handleFilterChange = (event) =>
    setNewFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handleChange={handleFilterChange}/>
      <h3>add a new</h3>
      <PersonForm onSubmit={addName} nameValue={newName} onNameChange={handleNameChange}
         numberValue={newNumber} onNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      {personsToShow.map(person =>
        <Person key={person.name} contact={person}/>
      )}
    </div>
  )
}

export default App
