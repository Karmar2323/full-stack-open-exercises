import { useState, useEffect } from 'react'
import personService from './services/personService'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [noteMessage, setNoteMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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

  const stopNotification = messageSetter => {
    setTimeout(() => {
      messageSetter(null)
    }, 4000)
  }

  const updateNumber = person => {
    const id = persons.find(contact => contact.name === person.name).id

    personService
    .update(id, person)
    .then(returnedPerson => {
      setNoteMessage(`Updated ${returnedPerson.name}`)
      stopNotification(setNoteMessage)
      setPersons(persons.map(contact => contact.id !== id ? contact : returnedPerson))
      setNewName('')
      setNewNumber('')
    })
    .catch (error => {
      setErrorMessage(`Information of ${person.name} has already been removed from server`)
      stopNotification(setErrorMessage)
      setPersons(persons.filter(p => p.id !== id))
      console.log('failed: ', error)
    })
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
        setNoteMessage(`Added ${response.name}`)
        stopNotification(setNoteMessage)
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
      .catch (error => {
        setErrorMessage(`Failed to create ${person.name}`)
        stopNotification(setErrorMessage)
        console.log('failed: ', error)
      })
  }

  const deleteName = id => {
    const deletedName = persons.filter(p => p.id === id)[0].name
    if (!window.confirm(`Delete ${deletedName}?`)) {
      return
    }
    else {
      personService
      .deletePerson(id)
      .then(response => {
        setNoteMessage(`Deleted ${deletedName}`)
        stopNotification(setNoteMessage)
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(error => {
        console.log(error)
        setErrorMessage(`Information of ${deletedName} has already been removed from server`)
        stopNotification(setErrorMessage)
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
      <Notification message={errorMessage} color={'darkred'} />
      <Notification message={noteMessage} color={'darkgreen'} />
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
