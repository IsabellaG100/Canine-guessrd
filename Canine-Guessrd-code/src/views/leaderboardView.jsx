export default function LeaderboardView(props){

    function backACB(){
        history.back()
    }

    function homepageACB(){
        window.location.hash = "#/start"
    }

    return (
        <div>

            <div className = "leaderboardDiv">
                <button onClick = {backACB}
                        className = "backButton">
                    <img src = "https://svgshare.com/i/10Zg.svg"
                         height = {30}/>
                </button>
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

        </div>
    )

    function playersTableRowCB(user){
        return <tr key = {user.id} >
            <td>
                {user.username}
            </td>
            <td>
                {user.highscore}
            </td>
        </tr>
    }
}