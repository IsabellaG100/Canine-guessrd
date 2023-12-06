export default function LeaderboardView(props){

    function backACB(){
        window.location.hash = "#/"
    }

    function homepageACB(){
        window.location.hash = "#/"
    }

    return (
        <div>
            <button onClick = {backACB}>
                
            </button>

            <button onClick = {homepageACB}>
                <img src = "#"/>
            </button>

            <h1>Leaderboard</h1>
            <table>
                <tbody>
                    {/*props.placeholder.map(playersTableRowCB)*/}
                </tbody>
            </table>

        </div>
    )

    function playersTableRowCB(placeholder){
        return <tr key = {placeholder.id} >
            <td>
                {/*placeholder.name*/}
            </td>
            <td>
                {/*placeholder.highscore*/}
            </td>
        </tr>
    }
}