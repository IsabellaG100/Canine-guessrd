// profilePresenter.jsx
import React, { useState, useEffect } from 'react';
import ProfileView from './views/ProfileView';
import { useNavigate } from 'react-router-dom';

function ProfilePresenter(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [highscore, setHighscore] = useState(0);
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (props.model.firebase.isAuthenticated()) {
            setUsername(props.model.firebase.authUser.displayName);
            setHighscore(props.model.firebase.authUser.highscore); // Ensure you have highscore in the user's data
        }
    }, [props.model.firebase]);

    const handleChangeUsername = async () => {
        try {
            await props.model.firebase.updateUsername(newUsername);
            setUsername(newUsername);
            setNewUsername('');
        } catch (er) {
            setError(er.message);
        }
    };

    const handleChangeEmail = async () => {
        try {
            await props.model.firebase.updateEmail(newEmail);
            setNewEmail('');
        } catch (er) {
            setError(er.message);
        }
    };

    const handleBackToStart = () => {
        navigate('/start');
    };

    return <ProfileView 
               username={username}
               highscore={highscore}
               newUsername={newUsername}
               onNewUsernameChange={setNewUsername}
               onChangeUsername={handleChangeUsername}
               newEmail={newEmail}
               onNewEmailChange={setNewEmail}
               onChangeEmail={handleChangeEmail}
               error={error}
               onBackToStart={handleBackToStart}
           />;
}

export default ProfilePresenter;
