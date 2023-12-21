// profilePresenter.jsx
import React, { useState, useEffect } from 'react';
import ProfileView from '../views/profileView';
import { useNavigate } from 'react-router-dom';

function ProfilePresenter(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [highscore, setHighscore] = useState(0);
    const [error, setError] = useState('');

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!props.model.firebase.isAuthenticated()) {
            navigate('/login');
        }
    }, [props.model, navigate]);

    useEffect(() => {
        if (props.model.firebase.isAuthenticated()) {
            // Fetch user data from Firebase
            props.model.firebase.getUserData(props.model.firebase.authUser.uid, (userData) => {
                if (userData) {
                    setUsername(userData.username);
                    setHighscore(userData.highscore);
                }
            });
        }
    }, [props.model.firebase]);

    const handleBackToStart = () => {
        navigate('/start');
    };

    return <ProfileView 
               username={username}
               highscore={highscore}
               error={error}
               onBackToStart={handleBackToStart}
           />;
}

export default ProfilePresenter;
