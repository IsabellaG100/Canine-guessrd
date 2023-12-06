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
        slide_i -= 1
    }

    function nextACB(){
        slide_i += 1
    }

    return (
        <div>

            <button onClick = {leaderboardACB}>
                <img src = "#"/>
            </button>

            <button onClick = {homepageACB}>
                <img src = "#"/>
            </button>

            <h1>Score: {/*props.placeholder.score*/} </h1>

            <div>
                <button onClick = {previousACB}
                        disabled = {slide_i === 0}>
                    &lt;
                </button>

                <img src = "#"/>

                <span>
                    <p>
                        Breed: {/*props.placeholder.breedGuess[slide_i]*/}
                        <div>{/*props.placeholder.correctBreed[slide_i]*/}</div>
                    </p>
                    <p>
                        Origin: {/*props.placeholder.originGuess[slide_i]*/}
                        <div>{/*props.placeholder.correctOrigin[slide_i]*/}</div>
                    </p>
                </span>

                <button onClick = {nextACB}
                        disabled = {slide_i === props.length}>
                    &gt;
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