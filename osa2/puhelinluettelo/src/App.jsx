import { useState, useEffect } from 'react'
import personService from './services/personService'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
    })
  }, [])

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  const updateNumber = person => {
    const id = persons.find(contact => contact.name === person.name).id

    personService
    .update(id, person)
    .then(returnedPerson => {
      console.log('changed id', returnedPerson.id)
      setPersons(persons.map(contact => contact.id !== id ? contact : returnedPerson))
      setNewName('')
      setNewNumber('')
    })
    .catch(error => console.log('failed: ', error))
  }

  const addName = event => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    if (persons.map(person => person.name).includes(person.name)) {
      if (confirm(`${person.name} is already added to phonebook,
      replace old number with a new one?`)) {
        updateNumber(person)
      }
      return
    }

    personService
      .create(person)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
  }

  const deleteName = (id) => {
    console.log('delete clicked', id)
    if (!window.confirm(`Delete ${persons.filter(p => p.id === id)[0].name}?`)) {
      return
    }
    else {
      personService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(error => {
        console.log(error)
        alert('the contact was already deleted from server')
        setPersons(persons.filter(p => p.id !== id))
      })
    }
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
      <PersonList persons={personsToShow} deleteName={deleteName}/>
    </div>
  )
}

export default App
