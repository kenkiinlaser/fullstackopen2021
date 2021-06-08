import React, { useState, useEffect } from 'react'
import Persons from './components/Persons.js'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'

import axios from 'axios'

/*
Filter
Persons
PersonForm
*/

const App = () => {

  //{ name: 'Arto Hellas', number: '1234' }
  const [ persons, setPersons] = useState([]) 

  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterPersons] = useState('Arto Hellas')


  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])



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

  const handleFilterChange = (event) => {
      console.log(event.target.value)
      setFilterPersons(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h2>Add a new number</h2>
      <PersonForm addNumber={addNumber} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filterName={filterName} />
    </div>
  )

}

export default App