import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState([
    {text: 'If it hurts, do it more often.', votes: 0},
    {text: 'Adding manpower to a late software project makes it later!', votes: 0},
    {text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
    {text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
    {text: 'Premature optimization is the root of all evil.', votes: 0},
    {text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0},
    {text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0},
    {text: 'The only way to go fast, is to go well.', votes: 0},
  ])
  const [maxVotes, setMaxVotes] = useState(anecdotes[0].text)

  const handleSelect = () => {
    if (selected + 1 == anecdotes.length) {
      setSelected(0)
    } else {
      setSelected(selected + 1)
    }
  }

  const handleVote = () => {
    var newAnecdotes = [...anecdotes]
    newAnecdotes[selected].votes += 1

    var maxVotes = newAnecdotes.reduce((a, b) => a.votes >= b.votes ? a : b)
    setAnecdotes(newAnecdotes)
    setMaxVotes(maxVotes.text)
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected].text}</p>
      <p>has {anecdotes[selected].votes} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleSelect}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{maxVotes}</p>
    </>
  )
}

export default App
