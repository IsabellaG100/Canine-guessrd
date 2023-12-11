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
                    <img src = "https://svgshare.com/i/10ZW.svg"
                         height = {35}/>
                </button>
            </div>

            {// Logo image, must decide where we want to store it
            }
            <img src = "https://svgshare.com/i/10ZE.svg"
                 height = {400}/>

            <div>
                
                {/*temporary*/}
                <button onClick={startGameACB}>Start</button>
                <button onClick={props.logout}>Log out</button>
            </div>
        </div>
    );
}

export default StartView;