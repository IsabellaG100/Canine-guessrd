import { useState } from "react";
import Select from "react-select";


function GameView(props){

    function homepageACB(){
        window.location.hash = "#/"
    }

    function guessCB(){
        // Add functionality, should save the guess somehow
        // and go to next game
        // and give scores??

        // temporary:
        window.location.hash = "#/results"

    };

    function handleSelectBreed(breed) {
        // Göra funktionen nedan till en prop?
        setSelectedOptionsBreed(breed);
    };

    function handleSelectOrigin(origin) {
        // Göra funtionen nedan till en prop?
        setSelectedOptionsOrigin(origin);
    };

    // Gör detta till en prop, behöver en för breeds
    // och en för origins
    const optionList = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
        { value: "white", label: "White" }
    ];

    const [selectedOptionBreed, setSelectedOptionsBreed] = useState();
    const [selectedOptionOrigin, setSelectedOptionsOrigin] = useState();

    return(
        <div>
            {//Button to start, don't know if i should do
             //a callback function here or not
            }
            <div className = "minilogoDiv">
                <button onClick = {homepageACB}
                        className = "minilogoButton">
                    <img src = "../src/assets/logo.svg"
                        height = {60}/>
                </button>
            </div>

            <div className = "game">
                {// Image of dog, have to decide propname/path
                }
                <div className = "dogImage">
                    <img src = {props.dogArray[1].imgThumb}
                         height = {200}/>
                </div>
                
                {//Change span to something else?
                }
                <div>
                    <h2>Breed:</h2>
                    <div>
                        <Select
                            options={optionList} 
                            placeholder="Select Breed"
                            value={selectedOptionBreed}
                            onChange={handleSelectBreed}
                            isSearchable={true}
                        />
                    </div>

                    <h2>Origin:</h2>
                    <div>
                        <Select
                            options={optionList} 
                            placeholder="Select Origin"
                            value={selectedOptionOrigin}
                            onChange={handleSelectOrigin}
                            isSearchable={true}
                        />
                    </div>
                </div>
            </div>

            {//Need to figure out how to do the timer
            }
            <span>TIMER{props.timer}</span>
            <button onClick={guessCB}>Guess</button>
        </div>
    );
}

export default GameView;