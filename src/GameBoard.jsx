/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import Notification from "./Notification"

const GameBoard = ({ setScore, score, bestScore, setBestScore }) => {

    const [clickedKeys, setClickedKeys] = useState([])
    const [pokemonMap, setPokemonMap] = useState({})
    const [shuffleData, setShuffleData] = useState([])

    const [headingText, setHeadingText ] = useState("")
    const [headingColor, setHeadingColor ] = useState("red")
    const [paragraphText, setParagraphText ] = useState("")

    function shuffleArray(array) {
        return array
        .map((item) => ({ ...item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({...item }) => item); // Remove the temporary `sort` property
    }

    // run the shuffleArray func whenever the score changes
    useEffect(() => {
        const dataAsArray = Object.keys(pokemonMap).map((key) => ({
            name: key,
            img: pokemonMap[key],
        }))
        setShuffleData(shuffleArray(dataAsArray))

        if (clickedKeys.length === 12) {
            setHeadingText("We Have a Winner")
            setParagraphText("Congratulation you've completed the game")
            setHeadingColor("green")
            console.log("Mee");
            setScore(0)
            setBestScore(0)
            setClickedKeys([])
            setTimeout(() => {
                setHeadingText("")
                setParagraphText("")
            }, 10000)
        }
    }, [score, pokemonMap, clickedKeys.length, setScore, setBestScore])

    function calScore(id) {
        if (clickedKeys.includes(id)) {
            calBestScore(bestScore)
            // Reset the current score
            setHeadingText("You Failed!")
            setTimeout(() => {
                setHeadingText("")
            }, 3000)
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
            setParagraphText("Best Score has been updated")
            setTimeout(() => {
                setParagraphText("")
            }, 3000)
        }

        // Reset clicked items
        setClickedKeys([])
    }

    // Fetch Data ==========================================

    const pokemons = [
        "caterpie",
        "metapod",
        "butterfree",
        "weedle",
        "kakuna",
        "beedrill",
        "pidgey",
        "pidgeotto",
        "pidgeot",
        "rattata",
        "raticate",
        "raichu",
    ]

    let url = ''


    useEffect(() => {
        pokemons.forEach(async (pokemon) => {
            url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const response = await fetch(url)
            const data = await response.json()
            setPokemonMap((prev) => ({
                ...prev,
                [pokemon]: data.sprites.other["official-artwork"].front_default
            }))
        })
    }, [url])

    return (
        <>
        <section className="gameboard">
            {
                shuffleData.map(({name, img}) => {                        
                        return (
                            <div key={name} className="game" onClick={() => calScore(name)}>
                                <img src={img} alt="" />
                                <p>{name}</p>
                            </div>
                        )
                    })
            }
        </section>
        <Notification heading={headingText} paragraph={paragraphText} headingColor={headingColor} />
        </>
    )
}

export default GameBoard