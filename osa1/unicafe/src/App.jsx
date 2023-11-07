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
    const stats = {
      "good": good,
      "neutral": neutral,
      "bad": bad,
      "all": clicks,
      "average": avg,
      "positive": positive
    }
    return (
      <div>
      <h1>statistics</h1>
      <StatisticTable stats={stats}/>
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

const StatisticTable = (props) => {

  const buildRow = (index, stats) => {
    const key = Object.keys(stats)[index]
    return (
      <tr key={key}>
        <td>
          {key} {props.stats[key]}
        </td>
      </tr>
    )
  }

  const buildRows = (size, stats) => {
    let rowItem = new Array(size)
    for (let k = 0; k < size; k++) {
      rowItem[k] = buildRow(k, stats)
    }
    return rowItem
  }

  return (
    <table>
      <tbody>
        {buildRows(Object.keys(props.stats).length, props.stats)}
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) => (
    <div>
      <p>{text} {value}</p>
    </div>
  )

const Header = () => (
    <h1>give feedback</h1>
)

export default App
