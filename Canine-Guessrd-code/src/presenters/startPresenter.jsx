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

    const navigateToProfile = () => navigate('/profile');
    const navigateToLeaderboard = () => navigate('/leaderboard');

    function generateGameACB(){
        props.model.quiz.showGame = false;
        props.model.quiz.showResult = false;
        props.model.quiz.getDataFromAPI()
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


    return <StartView 
               getDogs={generateGameACB} 
               navigateToProfile={navigateToProfile} 
               navigateToLeaderboard={navigateToLeaderboard} 
               logout={handleLogout} />;
}