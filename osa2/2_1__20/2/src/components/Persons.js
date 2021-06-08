import React from 'react'
import PersonService from '../services/personservice'

const Persons = ({persons, filterName, setPersons}) => {

    const deleteUser = (id, name) => {
        console.log(id)
        console.log(name)
        if(window.confirm(`Delete ${name} ${id} ?`)){
            PersonService.deletePerson(
                id
                ).then(
                    data => {
                        PersonService.getAll().then(data => setPersons(data))
                        window.alert(`Deleted ${name} ${id} !`)
                    }
                    
                    
                )
        }

    }

    return(
        <div>
        {persons.filter(person => person.name.toLowerCase().startsWith(filterName.toLowerCase())).map(person =>
        <div key={person.name}>
            <div>
                {person.name} {person.number} <button onClick={() => deleteUser(person.id, person.name)}>delete</button>
            </div>
        </div>
        )}
        </div>
    )
}


export default Persons