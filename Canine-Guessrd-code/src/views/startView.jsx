import "/src/App.css"
import {slide as Menu} from "react-burger-menu"

function StartView(props){

    //temporary
    function startGameACB(){
        props.getDogs()
        window.location.hash = "#/game"
    }


    return(
        <div>
            <div className = "dropdownMenu">
                <Menu >
                    <a  id = "Profile" 
                        className = "menuItem" 
                        href = "#/start">
                        Profile
                    </a>

                    <a  id = "Leaderboard" 
                        className = "menuItem" 
                        href = "#/leaderboard">
                        Leaderboard
                    </a>

                    <a  id = "Logout" 
                        className = "menuItem" 
                        href = "#/login">
                        Log out
                    </a>

                </Menu>
            </div>

            <img src = "https://svgshare.com/i/10ZE.svg"
                 height = {400}/>
            <div className="start">
                <h3>Guess as many dogs as you can in 60 seconds</h3>
            </div>
            <div>
                <button className="startbutton"
                        onClick={startGameACB}>
                        Start Game
                </button>
                <p  className="info"
                    onClick={startGameACB}>
                    First time playing?
                    <img width="30" height="30" src="https://img.icons8.com/dotty/80/info.png" alt="info"/>
                </p>
            </div>
        </div>
    );
}

export default StartView;