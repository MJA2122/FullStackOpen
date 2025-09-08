import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

function App() {
  const [bad, setBad] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleBad = () => {
    setBad(bad + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleGood = () => {
    setGood(good + 1)
  }

  return (
    <>
      <h2>Give feedback</h2>
      <Button onClickFn={handleBad} text='bad' />
      <Button onClickFn={handleNeutral} text='neutral' />
      <Button onClickFn={handleGood} text='good' />
      <Statistics bad={bad} neutral={neutral} good={good} />
    </>
  )
}

export default App
