import React, { useState } from 'react'

const Statistics = ({good, neutral, bad, all, positive, average}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>positive: {(positive / all) * 100} %</p>
      <p>average: {average / all}</p>
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
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleSetGood = () => {
    setAll(all + 1)
    setAverage(average + 1)
    setGood(good + 1)
    setPositive(positive + 1)
  }
  const handleSetNeutral = () => {
    setAll(all + 1)
    setAverage(average + 0)
    setNeutral(neutral + 1)
  }
  const handleSetBad = () => {
    setAll(all + 1)
    setAverage(average - 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleSetGood} text='good' />
      <Button handleClick={handleSetNeutral} text='neutral' />
      <Button handleClick={handleSetBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>

  )
}

export default App