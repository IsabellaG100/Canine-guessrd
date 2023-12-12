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
                        height = {60}/>
                </button>
            </div>

            <h1>Leaderboard</h1>
            <table>
                <tbody>
                    {props.leaderboardData.map(playersTableRowCB)}
                </tbody>
            </table>

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