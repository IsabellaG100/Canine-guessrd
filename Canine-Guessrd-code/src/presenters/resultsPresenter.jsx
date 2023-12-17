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
    
    return (<ResultsView 
              score = {props.model.quiz.score} 
              length = {props.model.quiz.guessedDogs.length}
              guessedDogs = {props.model.quiz.guessedDogs}
              correctDogs = {props.model.quiz.choosenDogs}/>);
}