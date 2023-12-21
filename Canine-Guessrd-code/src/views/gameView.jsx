
import Select from "react-select";
import Popup from "reactjs-popup";
import "/src/popup.css";


function GameView(props){

    function homepageACB(){
        window.location.hash = "#/start"
    }

    function guessCB(i){
        // Lägg till loading screen när den laddar in bilden
        const playerguesses = [props.selectedOptionBreed?.label || "---", props.selectedOptionOrigin?.label || "---"]
        props.setIndex(i)
        props.setSelectedOptionsBreed("Select Breed")
        props.setSelectedOptionsOrigin("Select Origin")
        console.log(playerguesses)
        props.saveGuess(playerguesses)

    };

    function handleSelectBreed(breed) {
        // Göra funktionen nedan till en prop?
        props.setSelectedOptionsBreed(breed);
    };

    function handleSelectOrigin(origin) {
        // Göra funtionen nedan till en prop?
        props.setSelectedOptionsOrigin(origin);
    };

    return(
        <div>
            <div className = "minilogoDiv">
                <Popup onOpen={props.pauseTimer} onClose={props.resumeTimer} trigger={
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
            <h1>
                Make your guess
            </h1>
            
            <div className = "game">
                <div className = "dogImage">
                    <img src = {props.dogArray[props.index].imgThumb}
                         height = {200}/>
                    <div className="timer">
                        {props.timer}
                    </div>
                </div>
                <div>
                    <h2>Breed:</h2>
                    <div>
                        <Select
                            options={props.breeds} 
                            placeholder="Select Breed"
                            value={props.selectedOptionBreed}
                            onChange={handleSelectBreed}
                            isSearchable={true}
                        />
                    </div>

                    <h2>Origin:</h2>
                    <div>
                        <Select
                            options={props.origins} 
                            placeholder="Select Origin"
                            value={props.selectedOptionOrigin}
                            onChange={handleSelectOrigin}
                            isSearchable={true}
                        />
                    </div>
                </div>
            </div>
            <button onClick={() => guessCB(props.index + 1)}>Guess</button>
        </div>
    );
}

export default GameView;