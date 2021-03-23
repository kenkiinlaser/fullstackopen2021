import React from 'react'
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you´re {props.age} years old </p>
    </div>
  )
}

const App = () => {

  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Kalle" age={26 + 10}/>
      <Hello name={nimi} age={ika}/>
    </div>
  )
}

export default App
