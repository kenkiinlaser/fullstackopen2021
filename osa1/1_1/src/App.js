import React, { useState } from 'react'

// dekunstruktuoi propsit komponentille
//{good, neutral, bad, all, average, positive}
const Statistics = ({feedbacks}) => {
  //console.log(props)
  return (
    <div>
      <h1>Statistics</h1>
      good: {feedbacks.good}
      <br />
      neutral: {feedbacks.neutral}
      <br />
      bad: {feedbacks.bad}
      <br />
      all: {feedbacks.all}
      <br />
      average: {feedbacks.average}
      <br />
      positive: {feedbacks.positive}
    </div>
  )
}

const App = () => {
  /*
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // kaikki yhteensä, keskiarvo, positiiviset
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  */
  const [feedbacks, setFeedback] = useState({
    good:0,
    neutral:0,
    bad:0,
    all: 0,
    average: 0,
    positive: 0,
  })

  const handleSetGood = () => {
    const newFeedbacks = { 
      good: feedbacks.good + 1,
      bad: feedbacks.bad,
      neutral: feedbacks.neutral,
      all: feedbacks.all + 1,
      average: ((feedbacks.good * 1) + (feedbacks.neutral * 0) + (feedbacks.bad * -1)) / feedbacks.all,
      positive: ((feedbacks.all - feedbacks.bad - feedbacks.neutral) / feedbacks.good) * 100
    }
    setFeedback(newFeedbacks)
  }

  const handleSetNeutral = () => {
    const newFeedbacks = { 
      good: feedbacks.good,
      bad: feedbacks.bad,
      neutral: feedbacks.neutral + 1,
      all: feedbacks.all + 1,
      average: ((feedbacks.good * 1) + (feedbacks.neutral * 0) + (feedbacks.bad * -1)) / feedbacks.all,
      positive: ((feedbacks.all - feedbacks.bad - feedbacks.neutral) / feedbacks.good) * 100
    }
    setFeedback(newFeedbacks)
  }

  const handleSetBad = () => {
    const newFeedbacks = { 
      good: feedbacks.good,
      neutral: feedbacks.neutral,
      bad: feedbacks.bad + 1,
      all: feedbacks.all + 1,
      average: ((feedbacks.good * 1) + (feedbacks.neutral * 0) + (feedbacks.bad * -1)) / feedbacks.all,
      positive: ((feedbacks.all - feedbacks.bad - feedbacks.neutral) / feedbacks.good) * 100
    }
    setFeedback(newFeedbacks)
  }




  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleSetGood}>good</button>
      <button onClick={handleSetNeutral}>neutral</button>
      <button onClick={handleSetBad}>bad</button>
      <Statistics feedbacks={feedbacks}/>
    </div>
  )
}

export default App