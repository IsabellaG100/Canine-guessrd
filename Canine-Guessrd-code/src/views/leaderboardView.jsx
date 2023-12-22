import {slide as Menu} from "react-burger-menu";

export default function LeaderboardView(props){

    function backACB(){
        history.back()
    }

    function homepageACB(){
        window.location.hash = "#/start"
    }

    return (
        <div>

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

            <h1>Leaderboard</h1>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Highscore</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.leaderboardData.map(playersTableRowCB)}
                    </tbody>
                </table>
            </div>

            <div className = "backDiv">
                <button onClick = {backACB}
                        className = "backButton">
                    Back
                </button>
            </div>

        </div>
    )

    function playersTableRowCB(user, index){
        return <tr key={index}> 
            <td>
                {user.username}
            </td>
            <td>
                {user.highscore}
            </td>
        </tr>
    }
}