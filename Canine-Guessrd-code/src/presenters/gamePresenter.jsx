import GameView from "../views/gameView"
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

export default observer( function Game(props){
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.model.firebase.isAuthenticated()) {
          navigate('/login');
        }
      }, [props.model, navigate]);
    
    function gameFunction(dogPromiseState){
        
        console.log("promisestate in game:", dogPromiseState)
        console.log("data in game:", dogPromiseState.data)


        if (dogPromiseState?.promise){

            if (dogPromiseState.data){
                if(!props.model.quiz.gameStarted){
                props.model.quiz.startGame()
            }
                return (<GameView dogArray = {props.model.quiz.choosenDogs} breeds = {props.model.quiz.choosenDogBreeds} origins = {props.model.quiz.choosenDogOrigin}/>);
            
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