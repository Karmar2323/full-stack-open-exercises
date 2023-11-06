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
    const avg = (good - bad) / clicks
    const positive = `${100 * good/clicks} %`
    return (
      <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={clicks}/>
      <StatisticLine text="average" value={avg}/>
      <StatisticLine text="positive" value={positive}/>
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

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Header = () => (
    <h1>give feedback</h1>
)

export default App
