export default function LeaderboardView(props){

    function backACB(){
        history.back()
    }

    function homepageACB(){
        window.location.hash = "#/"
    }

    return (
        <div>
            <button onClick = {backACB}>
                <img src = "../src/assets/backIcon.svg"/>
            </button>

            <button onClick = {homepageACB}>
                <img src = "../src/assets/logo.svg"
                     height = {60}/>
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