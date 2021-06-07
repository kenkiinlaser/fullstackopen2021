import React from 'react'


const Persons = ({persons, filterName}) => {

    return(
        <div>
        {persons.filter(person => person.name.toLowerCase().startsWith(filterName.toLowerCase())).map(person =>
        <div key={person.name}>
            <div>
                {person.name} {person.number}
            </div>
        </div>
        )}
        </div>
    )
}


export default Persons