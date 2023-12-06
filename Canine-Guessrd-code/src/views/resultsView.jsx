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
                <img src = "../src/assets/trophyIcon.svg"/>
            </button>

            <button onClick = {homepageACB}>
                <img src = "../src/assets/logo.svg"
                     height = {60}/>
            </button>

            <h1>Score: {/*props.placeholder.score*/} </h1>

            <div>
                <button onClick = {previousACB}
                        disabled = {slide_i === 0}>
                    <img src = "../src/assets/backIcon.svg"
                         height = {20}/>
                </button>

                <img src = "#"/>

                <span>
                    <p>
                        Breed: {/*props.placeholder.breedGuess[slide_i]*/}
                        <p>{/*props.placeholder.correctBreed[slide_i]*/}</p>
                    </p>
                    <p>
                        Origin: {/*props.placeholder.originGuess[slide_i]*/}
                        <p>{/*props.placeholder.correctOrigin[slide_i]*/}</p>
                    </p>
                </span>

                <button onClick = {nextACB}
                        disabled = {slide_i === props.length}>
                    <img src = "../src/assets/nextIcon.svg"
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