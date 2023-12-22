import GameView from "../views/gameView"
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import timerStore from "../TimerFile";

export default observer( function Game(props){
    
    function resumeTimerACBHandler(){
        timerStore.startTimer()
    }
    
    function pauseTimerACBHandler(){
        timerStore.stopTimer()
    }
    
    function sendGuesstoModelACB(guess){
        props.model.quiz.setGussedDogs(guess);
    }
    const navigate = useNavigate();

    useEffect(() => {
        if (timerStore.timer === 0 || props.model.quiz.choosenDogs.length-1 === props.model.quiz.guessedDogs.length) {
          window.location.hash = "#/results"
        }
      }, [timerStore.timer]);

      
    useEffect(()=>{
        timerStore.startTimer();

        return () => {
            timerStore.stopTimer();
            timerStore.resetTimer();
        }
    }, []);

    useEffect(() => {
        if (!props.model.firebase.isAuthenticated()) {
          navigate('/login');
        }
      }, [props.model, navigate]);

    const [selectedOptionBreed, setSelectedOptionsBreed] = useState();
    const [selectedOptionOrigin, setSelectedOptionsOrigin] = useState();
    const [index, setIndex] = useState(0);
    
    function gameFunction(dogPromiseState){
        if (dogPromiseState?.promise){

            if (dogPromiseState.data){
                if(!props.model.quiz.showGame){
                    props.model.quiz.startGame()
            }                
                return (<GameView   dogArray = {props.model.quiz.choosenDogs} 
                                    breeds = {props.model.quiz.choosenDogBreeds} 
                                    origins = {props.model.quiz.choosenDogOrigin}
                                    saveGuess = {sendGuesstoModelACB}
                                    timer = {timerStore.timer}
                                    pauseTimer={pauseTimerACBHandler}
                                    resumeTimer={resumeTimerACBHandler}
                                    selectedOptionBreed = {selectedOptionBreed}
                                    setSelectedOptionsBreed = {setSelectedOptionsBreed}
                                    selectedOptionOrigin = {selectedOptionOrigin}
                                    setSelectedOptionsOrigin = {setSelectedOptionsOrigin}
                                    buttonText = {(selectedOptionBreed || selectedOptionOrigin)? "Guess" : "Skip"}
                                    index = {index}
                                    setIndex = {setIndex}
                                    correctAnswerBreed = {{answer: props.model.quiz.correctAnswerBreed, color: (props.model.quiz.correctAnswerBreed === "Correct!")? "#006e37" : "red"}}
                                    correctAnswerOrigin = {{answer: props.model.quiz.correctAnswerOrigin, color: (props.model.quiz.correctAnswerOrigin === "Correct!")? "#006e37" : "red"}}
                                    />);
        
            } else if (dogPromiseState.error){
                return (dogPromiseState.error)

            } else {
                return <img src="https://brfenergi.se/iprog/loading.gif" alt="Loading" />
            }

        } else {
            return ("no data")
        }
    }

    return gameFunction(props.model.quiz.dogBreedPromiseState)
}
)