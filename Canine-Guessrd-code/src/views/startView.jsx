import "/src/App.css"

function StartView(props){

    function leaderboardACB(){
        window.location.hash = "#/leaderboard"
    }

    //temporary
    function startGameACB(){
        props.getDogs()
        window.location.hash = "#/game"
    }

    return(
        <div>
            {//Button to Leaderboard, might have to change prop
            }
            <div className = "leaderboardDiv">
                <button onClick={leaderboardACB}
                        className = "leaderboardButton">
                    <img src = "../src/assets/trophyIcon.svg"
                         height = {35}/>
                </button>
            </div>

            {// Logo image, must decide where we want to store it
            }
            <img src = "../src/assets/logo.svg"
                 height = {400}/>

            <div>
                {//Login buttons, must decide if login is a prop or a function in this file??
                }
                <button onClick={props.login}>Log in</button>
                
                {/*temporary*/}
                <button onClick={startGameACB}>Start</button>

                <button onClick={props.login}>Register</button>
            </div>
        </div>
    );
}

export default StartView;