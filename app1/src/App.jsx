import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [balls, setBalls] = useState(0)
  const [wickets, setWickets] = useState(0)
  function handleRun(run , ball) {
    setScore(score + run)
    setBalls(balls + ball)
  }

  return (
    <div className="App">
      <h1>Score Board</h1>
      <h1>Score: {score}</h1>
      <h1>Balls: {balls}</h1>
      <h2>Wickets :{wickets}</h2>
      <button onClick={()=>{handleRun(0,1)}} >0 run </button>
      <button onClick={()=>{handleRun(1,1)}} >1 run </button>
      <button onClick={()=>{handleRun(2,1)}} >2 run </button>
      <button onClick={()=>{handleRun(3,1)}} >3 run </button>
      <button onClick={()=>{handleRun(4,1)}} >4 run </button>
      <button onClick={()=>{handleRun(6,1)}} >6 run </button>
      <button onClick={()=>{handleRun(1,0)}}  ballcount={false}>wide run</button>
      <button onClick={()=>{handleRun(1,0)}}  ballcount={false}>No ball </button>
      <button onClick={() => {setWickets(wickets + 1);setBalls(balls+1)}}>Wicket </button>
      </div>
  )
}

export default App
