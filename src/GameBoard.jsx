/* eslint-disable react/prop-types */
import gameData from "./GameData"

const GameBoard = ({ setScore, score, bestScore, setBestScore }) => {
    return (
        <section className="gameboard">
            {gameData.map(({ id, img, name }) => (
                <div className="game" key={id}>
                    <img src={img} alt="" />
                    <p>{name}</p>
                </div>
            ))}
        </section>
    )
}

export default GameBoard