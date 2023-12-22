// profileView.jsx
import React from 'react';
import {slide as Menu} from "react-burger-menu";

function ProfileView(props) {

    function backACB(){
        history.back()
    }

    function homepageACB(){
        window.location.hash = "#/start"
    }

    return (
        <div className="profile-container">

            <div className = "dropdownMenu">
                <Menu >
                    <a  id = "Home" 
                        className = "menuItem" 
                        href = "#/start">
                        Home
                    </a>

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

            <div className = "minilogoDiv">
                <button onClick = {homepageACB}
                        className = "minilogoButton">
                    <img src = "https://svgshare.com/i/10ZE.svg"
                         className="minilogoImage"/>
                </button>
            </div>

            <h1>Profile</h1>
            <p>Username: {props.username}</p>
            <p>Highscore: {props.highscore}</p>

            {props.error && <p className="error">{props.error}</p>}

            <div className = "backDiv">
                <button onClick = {backACB}
                        className = "backButton">
                    <img src = "https://svgshare.com/i/10Zg.svg"
                         height = {20}/>
                </button>
            </div>

        </div>
    );
}

export default ProfileView;
