import "/src/App.css"
import {slide as Menu} from "react-burger-menu"
import Popup from "reactjs-popup";

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
                        href = "#/profile">
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
                <Popup trigger={
                    <p  className="info">
                        First time playing?
                        <img width="30"
                             height="30"
                             src="https://img.icons8.com/dotty/80/info.png"
                             alt="info"/>
                    </p>}
                    position="bottom left" modal>
                    {close => (
                    <div className="modal">
                        <h1>
                            How To Play
                        </h1>
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <iframe allow="autoplay;"
                                referrerpolicy="strict-origin"
                                src="https://www.kapwing.com/e/65838d15b235e2e148939673">
                        </iframe>
                        <button onClick={close}>
                            Got it!
                        </button>
                    </div>)}
                </Popup>
            </div>
        </div>
    );
}

export default StartView;