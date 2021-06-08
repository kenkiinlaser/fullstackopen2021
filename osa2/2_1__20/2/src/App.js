import React, { useState, useEffect } from 'react'
import Persons from './components/Persons.js'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import PersonService from './services/personservice'


/*
Filter
Persons
PersonForm
*/

const App = () => {

  //{ name: 'Arto Hellas', number: '1234' }
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterPersons] = useState('')


  useEffect(() => {
    PersonService
      .getAll().then(
        data => {
          //console.log(data)
          setPersons(data)
        }
      )
  }, [])

  const addNumber = (event) => {
    event.preventDefault()

    const numberObject = {
      name: newName,
      number: newNumber
    }

    if(persons.filter(person => person.name === newName).length < 1){
      PersonService
      .create(numberObject).then(
        data => {
          console.log(data)
          setPersons(persons.concat(numberObject)) 
        }
      )
    } else {
      //window.alert(`${newName} is already added to phonebook`)
      if(window.confirm(`${newName} is already added to phonebook, replace old one?`)){
        PersonService
        .update(persons.filter(person => person.name === newName)[0].id, numberObject).then(
          PersonService
          .getAll().then(
            data => {
              //console.log(data)
              setPersons(data)
            }
          )
        )
      }
    }

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
      <Persons persons={persons} filterName={filterName} setPersons={setPersons}/>
    </div>
  )

}

export default App