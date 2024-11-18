/* eslint-disable react/prop-types */
const ScoreBoard = ({score, bestScore}) => {
  return (
    <header className="scoreboard">
        <h1>Score: {score}</h1>
        <h1>Best Score: {bestScore}</h1>
    </header>
  )
}

export default ScoreBoard