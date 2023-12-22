import ResultsView from "../views/resultsView"
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function navigateToStartACB(){
    window.location.hash = "#/start"
}

export default function Results(props){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [index, setIndex] = useState(0);

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

    function playAgainACBHandler(){
        props.model.quiz.startGame()
    }

    function displayAnswerBreed(index){
        if(props.model.quiz.guessedDogs[index].breedName === props.model.quiz.choosenDogs[index].breedName){
            return {feedback: "correct", opacity: "0"}
        } else {
            return {feedback: "incorrect", opacity: "100"}
        }
    }

    function displayAnswerOrigin(index){
        if(props.model.quiz.guessedDogs[index].origin === props.model.quiz.choosenDogs[index].origin){
            return {feedback: "correct", opacity: "0"}
        } else {
            return {feedback: "incorrect", opacity: "100"}
        }
    }

    if(props.model.quiz.choosenDogs.length !== 0){
        return (<ResultsView 
            score = {props.model.quiz.score} 
            guessedDogs = {props.model.quiz.guessedDogs}
            correctDogs = {props.model.quiz.choosenDogs}
            playAgain = {playAgainACBHandler}
            index = {index}
            setIndex = {setIndex}
            answerFeedbackBreed = {displayAnswerBreed(index)}
            answerFeedbackOrigin = {displayAnswerOrigin(index)}/>);   
    }else{
        return (<div>
            <span>You have to play the game to recieve results</span>
            <div>
                <button onClick={navigateToStartACB} >Back to start</button>
            </div>
            </div>);
    }
    
}