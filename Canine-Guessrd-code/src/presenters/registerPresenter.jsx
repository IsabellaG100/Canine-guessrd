// registerPresenter.jsx
import React, { useState } from 'react';
import RegisterView from '../views/registerView';
import { useNavigate } from 'react-router-dom';


function RegisterPresenter(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            await props.model.firebase.register(email, password, username);
            // Navigate to the next page or login page after successful registration
            navigate('/start'); // Replace '/login' with the actual path
        } catch (er) {
            setError(er.message);
        }
    };

    const handleRegisterWithGoogle = async () => {
        try {
            await props.model.firebase.loginWithGoogle();
            // Post-registration logic for Google sign-up (if different from standard registration)
            navigate('/start'); // Replace '/nextPage' with the actual path
        } catch (er) {
            setError(er.message);
        }
    };

    const handleBackToLogin = () => {
        navigate('/login'); // Navigate back to the login view
    };

    return <RegisterView 
               email={email}
               onEmailChange={setEmail}
               password={password}
               onPasswordChange={setPassword}
               username={username}
               onUsernameChange={setUsername}
               onRegister={handleRegister}
               error={error}
               onRegisterWithGoogle={handleRegisterWithGoogle}
               onBackToLogin={handleBackToLogin}
           />;
}

export default RegisterPresenter;
