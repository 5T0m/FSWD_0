import { useState } from 'react'

const Display = props => <h1>{props.text}</h1>


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const updateVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const selectNextAnecdote = () => {
    setSelected((selected + 1) % anecdotes.length)
  }
  if (selected >= anecdotes.length) {
    setSelected(0)
  }
  const maxVotes = (votes) => {
    return votes.indexOf(Math.max(...votes))
  }

  return (
    <div>
      <Display text="Anecdote of the day"  />
      {anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <Button handleClick={updateVotes} text="vote"/>
      <Button handleClick={selectNextAnecdote} text="next anecdote"/>
      <Display text="Anecdote with the most votes"  />
      <div>{anecdotes[maxVotes(votes)]}</div>
      <div>has {votes[maxVotes(votes)]} votes</div>
    </div>
  )
}

export default App