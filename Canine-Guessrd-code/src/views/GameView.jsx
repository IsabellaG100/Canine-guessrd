import { useState } from "react";
import Select from "react-select";
import Popup from "reactjs-popup";
import "/src/popup.css";


function GameView(props){
    // Lägg till object för att spara player guesses

    function homepageACB(){
        window.location.hash = "#/start"
    }

    function guessCB(index){
        // Lägg till loading screen när den laddar in bilden
        const playerguesses = [selectedOptionBreed.label, selectedOptionOrigin.label]
        setIndex(index)
        setSelectedOptionsBreed("Select Breed")
        setSelectedOptionsOrigin("Select Origin")
        console.log(playerguesses)
        // temporary:
        //window.location.hash = "#/results"

    };

    function handleSelectBreed(breed) {
        // Göra funktionen nedan till en prop?
        setSelectedOptionsBreed(breed);
    };

    function handleSelectOrigin(origin) {
        // Göra funtionen nedan till en prop?
        setSelectedOptionsOrigin(origin);
    };

    const [selectedOptionBreed, setSelectedOptionsBreed] = useState();
    const [selectedOptionOrigin, setSelectedOptionsOrigin] = useState();
    const [index, setIndex] = useState(0);

    return(
        <div>
            {//Button to start, don't know if i should do
             //a callback function here or not
            }
            
            <div className = "minilogoDiv">
                <Popup trigger={
                    <button className = "minilogoButton">
                        <img src = "https://svgshare.com/i/10ZE.svg"
                            className="minilogoImage"/>
                    </button>} position="bottom left" modal>
                    {close => (
                    <div className="modal">
                        <h2>Are you sure you want to quit?</h2>
                        <p>If you leave, all your progress will be lost</p>
                        <div>
                            <button className="modal-buttons" onClick = {homepageACB}>Yes</button>
                            <button className="modal-buttons" onClick={close}>No</button>
                        </div>
                    </div>
                    )}
                </Popup>
            </div>

            <div className = "game">
                {// Image of dog, have to decide propname/path
                }
                <div className = "dogImage">
                    <img src = {props.dogArray[index].imgThumb}
                         height = {200}/>
                </div>
                
                {//Change span to something else?
                }
                <div>
                    <h2>Breed:</h2>
                    <div>
                        <Select
                            options={props.breeds} 
                            placeholder="Select Breed"
                            value={selectedOptionBreed}
                            onChange={handleSelectBreed}
                            isSearchable={true}
                        />
                    </div>

                    <h2>Origin:</h2>
                    <div>
                        <Select
                            options={props.origins} 
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
            <button onClick={() => guessCB(index + 1)}>Guess</button>
        </div>
    );
}

export default GameView;