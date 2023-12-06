function StartView(props){

    function leaderboardACB(){
        window.location.hash = "#/leaderboard"
    }

    return(
        <div>
            {//Button to Leaderboard, might have to change prop
            }
            <div>
                <button onClick={leaderboardACB}>
                    <img src="../src/assets/trophyIcon.svg"></img>
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
                <button onClick={props.login}>Register</button>
            </div>
        </div>
    );
}

export default StartView;