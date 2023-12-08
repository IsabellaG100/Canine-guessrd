export default function ResultsView(props){
    
    const slide_i = 0

    function leaderboardACB(){
        window.location.hash = "#/leaderboard"
    }

    function homepageACB(){
        window.location.hash = "#/start"
    }

    function startGameACB(){
        window.location.hash = "#/game"
    }

    function previousACB(){
        /*slide_i -= 1*/
    }

    function nextACB(){
        /*slide_i += 1*/
    }

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
                        height = {60}/>
                </button>
            </div>

            <h1>Score: {/*props.placeholder.score*/} </h1>

            <div className = "results">
                <button onClick = {previousACB}
                        disabled = {slide_i === 0}
                        className = "resultsNavL">
                    <img src = "https://svgshare.com/i/10Zg.svg"
                         height = {20}/>
                </button>

                <img src = "#"
                     className = "dogImage"/>

                <span className = "answersTitles">
                    <p>
                        Breed:
                        
                    </p>
                    <p>
                        Origin: 
                    </p>
                </span>

                <span className = "answers">
                    <span className = "breedAnswers">
                        <p>
                            {/*props.placeholder.breedGuess[slide_i]*/} player answer1
                        </p>
                        <p>
                            {/*props.placeholder.correctBreed[slide_i]*/} correct answer1
                        </p>
                    </span>

                    <span className = "originAnswers">
                        <p>
                            {/*props.placeholder.originGuess[slide_i]*/} player answer2
                        </p>
                        <p>
                            {/*props.placeholder.correctOrigin[slide_i]*/} correct answer2
                        </p>
                    </span>
                </span>

                <button onClick = {nextACB}
                        disabled = {slide_i === props.length}
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