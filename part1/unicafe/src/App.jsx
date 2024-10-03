import { useState } from 'react'

const Display = props => <h1>{props.text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticLine = (props) => {
  if (props.text === "percentage") {
    return (
      <tr>
      <td>{props.text}: </td>
      <td>{props.value}%</td>
    </tr>)
  }
  return(
    <tr>
      <td>{props.text}: </td>
      <td>{props.value}</td>
    </tr>)

    
}

const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <table>
        <StatisticLine text="good" value ={props.goodClicks} />
        <StatisticLine text="neutral" value ={props.neutralClicks} />
        <StatisticLine text="bad" value ={props.badClicks} />
        <StatisticLine text="all" value ={props.allClicks} />
        <StatisticLine text="average" value= {props.averageClicks} />
        <StatisticLine text="percentage" value= {props.percentageClicks} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, addAll] = useState(0)
  const [average, compAverage] = useState(0) 
  const [percentage, compPercentage] = useState(100) 


  const setGoodToValue = newValue => {
    console.log('Good value now', newValue)
    setGood(newValue)
    addToAll(all+1)
  }
  const setNeutralToValue = newValue => {
    console.log('Neutral value now', newValue)
    setNeutral(newValue)
    addToAll(all+1)
  }
  const setBadToValue = newValue => {
    console.log('Bad value now', newValue)
    setBad(newValue)
    addToAll(all+1)
  }
  const addToAll = all => {
    console.log('All values now', all)
    addAll(all)
    compNewAverage((good - bad)/all)
    compNewPercentage(100*good/all)
  } 
  const compNewAverage = (average) => {
    console.log('Average now', average)
    compAverage(average)
  }
  const compNewPercentage = (percentage) => {
    console.log('Percentage now', percentage)
    compPercentage(percentage)
  }

  return (
    <div>
      <div>
        <Display text="give feedback" />
        <Button handleClick={() => setGoodToValue(good + 1)} text="Good" />
        <Button handleClick={() => setNeutralToValue(neutral + 1)} text="Neutral" />
        <Button handleClick={() => setBadToValue(bad + 1)} text="Bad" />
        <Display text="statistics" />
        <Statistics allClicks={all} goodClicks={good} neutralClicks={neutral} badClicks={bad} averageClicks={average} percentageClicks={percentage}/>

      </div>
    </div>
  )
}

export default App