function StartView(props){
    return(
        <div>
            {//Button to Leaderboard, might have to change prop
            }
            <div>
                <button onClick={props.goToLeaderboard}>
                    <image src="#"></image>
                </button>
            </div>

            {// Logo image, must decide where we want to store it
            }
            <img src="image"></img>

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