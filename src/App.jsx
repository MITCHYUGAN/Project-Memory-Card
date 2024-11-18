import { useState } from 'react'
import './App.css'
import GameBoard from './GameBoard'
import ScoreBoard from './ScoreBoard'

function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <main className='app'>
      <h1>Memory Game</h1>
      <ScoreBoard score={score} bestScore={bestScore}/>
      <GameBoard score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
    </main>
  )
}

export default App
