
export default function ResultsErrorView(){

    function navigateToStartACB(){
        window.location.hash = "#/start"
    }

    return(
        <div>
            <span class="" >You have to play the game to recieve results</span>
            <div>
                <button onClick={navigateToStartACB} >Back to Start</button>
            </div>
        </div>
    );
}