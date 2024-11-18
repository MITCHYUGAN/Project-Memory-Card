/* eslint-disable react/prop-types */
import { useState } from "react"
import gameData from "./GameData"

const GameBoard = ({ setScore, score, bestScore, setBestScore }) => {

    const [clickedKeys, setClickedKeys] = useState([])

    function calScore(id) {
        if (clickedKeys.includes(id)) {
            calBestScore(bestScore)
            // Reset the current score
            setScore(0)
        } else {
            // Add the new ID to the clickedKeys array
            setClickedKeys([...clickedKeys, id])
            // Increment the score
            setScore(score + 1)
        }
    }

    function calBestScore(bestscore) {
        // Update best score if current score is greater
        if (score > bestscore) {
            bestscore = score
            setBestScore(bestscore)
        }

        // Reset clicked items
        setClickedKeys([])
    }


    return (
        <section className="gameboard">
            {gameData.map(({ id, img, name }) => (
                <div className="game" key={id} onClick={() => calScore(id)}>
                    <img src={img} alt="" />
                    <p>{name}</p>
                </div>
            ))}
        </section>
    )
}

export default GameBoard