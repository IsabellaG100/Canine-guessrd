import { useState } from "react"
export default function ResultsView(props){

    function leaderboardACB(){
        window.location.hash = "#/leaderboard"
    }

    function homepageACB(){
        window.location.hash = "#/start"
    }

    function startGameACB(){
        props.playAgain()
        window.location.hash = "#/game"
    }

    function changeSlideACB(index){
        setIndex(index)
    }

    const [index, setIndex] = useState(0);

    return (
        <div>

            <div className = "leaderboardDiv">
                <button onClick = {leaderboardACB}
                        className = "leaderboardButton">
                    <img src = "https://svgshare.com/i/10ZW.svg"
                         height = {35}/>
                </button>
            </div>
            <div className = "minilogoDiv">
                <button onClick = {homepageACB}
                        className = "minilogoButton">
                    <img src = "https://svgshare.com/i/10ZE.svg"
                         className="minilogoImage"/>
                </button>
            </div>

            <h1>Score: {props.score} </h1>

            <div className = "results">
                <button onClick = {() => changeSlideACB(index - 1)}
                        disabled = {index === 0}
                        className = "resultsNavL">
                    <img src = "https://svgshare.com/i/10Zg.svg"
                         height = {20}/>
                </button>

                <img src = {props.correctDogs[index].imgThumb}
                     height = {200}
                     className = "dogImage"/>
                
                <span>
                    <p className = "answersTitle">
                        Breed:
                    </p>
                    <p className = "answersTitle">
                        Origin: 
                    </p>
                </span>

                <span className = "answers">
                    <span>
                        <p>
                            {props.guessedDogs[index].breedName} 
                        </p>
                        <p>
                            {props.correctDogs[index].breedName}
                        </p>
                    </span>

                    <span>
                    <p>
                            {props.guessedDogs[index].origin} 
                        </p>
                        <p>
                            {props.correctDogs[index].origin}
                        </p>
                    </span>
                </span>

                <button onClick = {() => changeSlideACB(index + 1)}
                        disabled = {index === props.guessedDogs.length - 1}
                        className = "resultsNavR">
                    <img src = "https://svgshare.com/i/10Yw.svg"
                         height = {20}/>
                </button>

            </div>

            <button onClick = {startGameACB}>
                Play again
            </button>

            <button onClick = {homepageACB}>
                Quit
            </button>

        </div>
    )
}