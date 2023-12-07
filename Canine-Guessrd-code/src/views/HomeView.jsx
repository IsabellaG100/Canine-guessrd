// HomeView.jsx

import React from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';
import { logoutUser } from '../models/actions/authActions'; // Import logoutUser action

const HomeView = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle user logout
    const handleLogout = () => {
        console.log("Clicked Log Out")
        dispatch(logoutUser()); // Dispatch the logout action
        console.log("Dispatch called");
        navigate('/login'); // Navigate to the login route
    };

    // Navigate to the game route
    const navigateToGame = () => {
        navigate('/game');
    };

    // Navigate to the leaderboard route
    const navigateToLeaderboard = () => {
        navigate('/leaderboard');
    };

    return (
        <div>
            <h1>Welcome to Canine Guessrd!</h1>
            <p>Test your knowledge of dog breeds!</p>
            <button onClick={navigateToGame}>Start Game</button>
            <button onClick={navigateToLeaderboard}>View Leaderboard</button>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default HomeView;
