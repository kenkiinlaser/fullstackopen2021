import React, { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleSetGood = () => setGood(good + 1)
  const handleSetNeutral = () => setNeutral(neutral + 1)
  const handleSetBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleSetGood} text='good' />
      <Button handleClick={handleSetNeutral} text='neutral' />
      <Button handleClick={handleSetBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>

  )
}

export default App