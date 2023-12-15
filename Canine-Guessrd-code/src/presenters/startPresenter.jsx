import StartView from "../views/startView"
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Start(props){
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to login if not authenticated
        if (!props.model.firebase.isAuthenticated()) {
          navigate('/login');
        }
      }, [props.model, navigate]);

    function generateGameACB(){
        props.model.quiz.showGame = false;
        props.model.quiz.getDataFromAPI()
        console.log("This is the index array", props.model.quiz.RandomArrayDogIndex)
        console.log("promisestate at start", props.model.quiz.dogBreedPromiseState)
        props.model.quiz.generateRandomArrayOfIndex()
        console.log(props.model.quiz.RandomArrayDogIndex)
        
    }

    function handleLogout() {
        props.model.firebase.logout()
            .then(() => {
                navigate('/login'); // Redirect to login view after successful logout
            })
            .catch((error) => {
                console.error('Logout failed:', error);
            });
    }

    return <StartView getDogs = {generateGameACB} logout={handleLogout}/>
}