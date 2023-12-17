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
            {//Button to Leaderboard, might have to change prop
            }
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

            {// Logo image, must decide where we want to store it
            }
            <img src = "https://svgshare.com/i/10ZE.svg"
                 height = {400}/>

            <div>
                
                {/*temporary*/}
                <button onClick={startGameACB}>Start Game</button>
            </div>
        </div>
    );
}

export default StartView;