
export default function ResultsErrorView(){

    function navigateToStartACB(){
        window.location.hash = "#/start"
    }

    return(
        <div>
            <h3>You have to play the game to recieve results</h3>
            <div>
                <button onClick={navigateToStartACB} >Back to Start</button>
            </div>
        </div>
    );
}