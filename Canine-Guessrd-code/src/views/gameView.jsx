function GameView(props){

    function returnToStartCB(){
        // Add functionality, should pause the game and give a popup
    };

    function guessCB(){
        // Add functionality, should save the guess somehow
        // and go to next game
    };

    return(
        <div>
            {//Button to start, don't know if i should do
             //a callback function here or not
            }
            <button onClick={returnToStartCB}>{props.logoSmall}</button>

            <div>
                {// Image of dog, have to decide propname/path
                }
                <img src={props.imageURL}></img>
                
                {//Change span to something else?
                }
                <span>Breed: LÄGG TILL DROPDOWNMENY HÄR</span>
                <span>Origin: LÄGG TILL DROPDOWNMENY HÄR</span>
            </div>

            {//Need to figure out how to do the timer
            }
            <span>{props.timer}</span>
            <button onClick={guessCB}>Guess</button>
        </div>
    );
}

export default GameView;