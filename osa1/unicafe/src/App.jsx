import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header/>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
    <h1>statistics</h1>
    <p>
      good {props.good}
    </p>
    <p>
      neutral {props.neutral}
    </p>
    <p>
      bad {props.bad}
    </p>
    </div>
  )
}

const Header = () => {
  return (
  <div>
    <h1>give feedback</h1>
  </div>
  )
  
}

export default App
