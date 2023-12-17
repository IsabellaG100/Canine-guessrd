import ResultsView from "../views/resultsView"
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function Results(props){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (!props.model.firebase.isAuthenticated()) {
            navigate('/login');
        } else {
            // Fetch the user data from the database
            props.model.firebase.getUserData(props.model.firebase.authUser.uid, (userData) => {
                setUsername(userData.username);
            });
        }
    }, [props.model, navigate]);

    // Calculate the score
    props.model.quiz.calculateScore();

    // Check if the user is authenticated and has a high score
    if (props.model.firebase.isAuthenticated() && username) {
        const userId = props.model.firebase.authUser.uid;
        const score = props.model.quiz.score;
        // Check if it's a new high score and update if necessary
        props.model.firebase.checkAndUpdateHighscore(userId, username, score);
    }

    
    return (<ResultsView 
              score = {props.model.quiz.score} 
              length = {props.model.quiz.guessedDogs.length}
              guessedDogs = {props.model.quiz.guessedDogs}
              correctDogs = {props.model.quiz.choosenDogs}/>);
}