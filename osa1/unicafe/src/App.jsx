import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)

  const increase = (value, setter) => {
    setter(value + 1);
    setAllClicks(allClicks + 1)
  }

  return (
    <div>
      <Header/>
      <Button text={'good'} handleClick={() => increase(good, setGood)}/>
      <Button text={'neutral'} handleClick={() => increase(neutral, setNeutral)}/>
      <Button text={'bad'} handleClick={() => increase(bad, setBad)}/>
      <Statistics good={good} neutral={neutral} bad={bad} clicks={allClicks}/>
    </div>
  )
}

const Button = ({text, handleClick}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Statistics = ({good, neutral, bad, clicks}) => {
  if(clicks > 0) {
    return (
      <div>
      <h1>statistics</h1>
      <p>
        good {good}
      </p>
      <p>
        neutral {neutral}
      </p>
      <p>
        bad {bad}
      </p>
      <MoreStatistics good={good} neutral={neutral} bad={bad}/>
      </div>
    )
  }
  return(
    <div>
      <h1>statistics</h1>
      <p>no feedback given</p>
    </div>
  )
}

const MoreStatistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  let positive = 0
  let avg = 0
  if (total !== 0) {
    avg = (good * 1 + neutral * 0 + bad * -1) / total
    positive = 100 * good/total
  }
  
  return(
    <div>
      <p>all {total}</p>
      <p>average {avg} (good=1, neutral = 0, bad = -1)</p>
      <p>positive {positive} %</p>
    </div>
  )
}

const Header = () => (
    <h1>give feedback</h1>
)

export default App
