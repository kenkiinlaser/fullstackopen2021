import React, { useState } from 'react'


const StatisticLine = ({text, value, all}) => {

  if (text === "positive") {
    return(
      <tr>
        <th>{text}</th>
        <th>{(value/all)*100}</th>
        <th>%</th>
      </tr>
    )
  }
  else if (text === "average"){
    return(
      <tr>
        <th>{text}</th>
        <th>{value/all}</th>
      </tr>
    )
  }
  else {
    return(
      <tr>
        <th>{text}</th>
        <th>{value}</th>
      </tr>
    )
  }

}

const Statistics = ({good, neutral, bad, all ,positive, average}) => {
  if (all > 0){
    return (
      <table>
        <thead>
        </thead>
        <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="positive" value={positive} all={all}/>
        <StatisticLine text="average" value={average} all={all}/>
        </tbody>
      </table>
    )
  }
  else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
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
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>

  )
}

export default App