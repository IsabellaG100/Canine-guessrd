
import Select from "react-select";
import Popup from "reactjs-popup";
import "/src/index.css";


function GameView(props){

    function homepageACB(){
        window.location.hash = "#/start"
    }

    function guessCB(i){
        const playerguesses = [props.selectedOptionBreed?.label || "---", props.selectedOptionOrigin?.label || "---"]
        props.setIndex(i)
        props.setSelectedOptionsBreed(null)
        props.setSelectedOptionsOrigin(null)
        props.saveGuess(playerguesses)

    };

    function handleSelectBreed(breed) {
        props.setSelectedOptionsBreed(breed);
    };

    function handleSelectOrigin(origin) {
        props.setSelectedOptionsOrigin(origin);
    };

    return(
        <div>
            <div className = "minilogoDiv">
                <Popup onOpen={props.pauseTimer}
                       onClose={props.resumeTimer}
                       trigger={
                                <div>
                                    <button className = "minilogoButton">
                                        <img src = "https://svgshare.com/i/10ZE.svg"
                                            className="minilogoImage"/>
                                    </button>
                                    <button className="exitgame">
                                        Exit Game
                                    </button>
                                </div>
                                }
                       position="bottom left"
                       modal>
                    {close => (
                    <div className="modal">
                        <h2>Are you sure you want to quit?</h2>
                        <p>If you leave, all your progress will be lost</p>
                        <div>
                            <button className="modal-buttons"
                                    onClick = {homepageACB}>Yes</button>
                            <button className="modal-buttons"
                                    onClick={close}>No</button>
                        </div>
                    </div>
                    )}
                </Popup>
            </div>
            <h1>
                Make your guess
            </h1>
            <div className="gamecontainer">
                <span className="timer">
                     <p>Game ends in: &nbsp;</p>
                    {props.timer} 
                </span>
                <div className = "gamecontent">
                    <div className = "dogImage">
                        <img src = {props.dogArray[props.index].imgThumb}
                            height = {300}/>
                        <p>
                        You have guessed {props.index} dogs
                        </p>
                    </div>
                    <div>
                        <h2>Breed: <span className="answersfeedback" key={props.index}>{props.correctAnswerBreed}</span></h2>
                        <div>
                            <Select 
                                className = "select"
                                options={props.breeds} 
                                placeholder="Select Breed"
                                value={props.selectedOptionBreed}
                                onChange={handleSelectBreed}
                                isSearchable={true}
                            />
                        </div>

                        <h2>Origin: <span className="answersfeedback" key={props.index}>{props.correctAnswerOrigin}</span></h2>
                        <div>
                            <Select 
                                className = "select"
                                options={props.origins} 
                                placeholder="Select Origin"
                                value={props.selectedOptionOrigin}
                                onChange={handleSelectOrigin}
                                isSearchable={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <button className="gamebutton"
                    onClick={() => guessCB(props.index + 1)}>
                    {props.buttonText}
            </button>
        </div>
    );
}

export default GameView;