import React, { useState } from 'react'

/*
const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}
Koska Display komponentti vain palauttaa counter muuttujan arvon
voidaan se määrittää nuolifunktiolla yhdellä rivillä
*/
const Display = ({ counter }) => <div>{counter}</div>

// eli jos näkee tälläistä eikä propseja missään niin ne on
// dekunstruktoitu, destructured
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  // counter == variable of the state
  // setCounter == functio jolla muutetaan tilaa
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />   
  </div>
  )
}

export default App
