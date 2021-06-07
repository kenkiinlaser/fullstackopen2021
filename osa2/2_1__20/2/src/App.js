import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNumber = (event) => {
    event.preventDefault()

    const numberObject = {
      name: newName
    }

    if(persons.filter(person => person.name === newName).length < 1){
      setPersons(persons.concat(numberObject)) 
    }
    else {
      window.alert(`${newName} is already added to phonebook`)
    }
    setNewName('')

  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input 
          value={newName}
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
            <div>{person.name}</div>
        </div>
      )}
      </div>
    </div>
  )

}

export default App