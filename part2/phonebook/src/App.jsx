import React, { useState } from 'react'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import FormData from './components/FormData'

const App = () => {
  const [persons, setPersons] = useState([
      { name: 'Mary Poppendieck', number: '0612345678', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Arto Hellas', number: '040-123456', id: 4 },
    ])
  const [newName, setNewName] = useState('Enter name here')
  const [newNumber, setNewNumber] = useState('Enter number here')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNameFocus = () => {
    setNewName('')
  }

  const handleNumberFocus = () => {
    setNewNumber('')
  }
  const handleFilterFocus = () => {
    setNewFilter('')
  }


  const addName = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const nameObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(newFilter.toLowerCase()) || 
    person.number.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} handleFilterFocus={handleFilterFocus} />
      
      <h3>Add a new</h3>
      <FormData addName={addName}
        handleNameChange={handleNameChange} handleNameFocus={handleNameFocus}
        handleNumberChange={handleNumberChange} handleNumberFocus={handleNumberFocus}        
        />

      <h3>Numbers</h3>
      <Contacts list={filteredPersons} />
    </div>
  )
}

export default App