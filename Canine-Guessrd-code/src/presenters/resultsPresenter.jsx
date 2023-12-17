import ResultsView from "../views/resultsView"
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Results(props){

    const navigate = useNavigate();

    useEffect(() => {
      if (!props.model.firebase.isAuthenticated()) {
        navigate('/login');
      }
    }, [props.model, navigate]);

    props.model.quiz.calculateScore();
    
    // Check if the user is authenticated and has a highscore
    if (props.model.firebase.isAuthenticated()) {
      const userId = props.model.firebase.authUser.uid;
      const username = props.model.firebase.authUser.displayName || props.model.firebase.authUser.email;
      const score = props.model.quiz.score;
      // Check if it's a new highscore and update if necessary
      props.model.firebase.checkAndUpdateHighscore(userId, username, score);
    }
    
    return (<ResultsView 
              score = {props.model.quiz.score} 
              guessedDogs = {props.model.quiz.guessedDogs}
              correctDogs = {props.model.quiz.choosenDogs}/>);
}