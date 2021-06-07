import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '1234' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addNumber = (event) => {
    event.preventDefault()

    const numberObject = {
      name: newName,
      number: newNumber
    }

    if(persons.filter(person => person.name === newName).length < 1){
      setPersons(persons.concat(numberObject)) 
    } 
    else {
      window.alert(`${newName} is already added to phonebook`)
    }

    /* if we want to prevent duplicate numbers
    if (persons.filter(person => person.number === newNumber).length < 1){
      setPersons(persons.concat(numberObject)) 
    }
    else {
      window.alert(`${newNumber} is already added to phonebook`)
    }
    */

    setNewName('')
    setNewNumber('')

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map(person =>
        <div key={person.name}>
            <div>
              {person.name} {person.number}
            </div>
        </div>
      )}
      </div>
    </div>
  )

}

export default App