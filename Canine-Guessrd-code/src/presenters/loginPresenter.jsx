// loginPresenter.jsx
import React, { useState } from 'react';
import LoginView from '../views/loginView';
import { useNavigate } from 'react-router-dom';

function LoginPresenter(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            // Use the login function passed as a prop
            await props.model.firebase.login(email, password);
            // Navigate to the start page after successful login
            navigate('/start');
        } catch (er) {
            setError(er.message);
        }
    };

    const handleLoginWithGoogle = async () => {
        try {
            // Use the Google login function passed as a prop
            await props.model.firebase.loginWithGoogle();
            navigate('/start');
        } catch (er) {
            setError(er.message);
        }
    };

    const handleNavigateRegister = () => {
        navigate('/register'); // Navigate to the registration view
    };

    return (
        <LoginView             
            email={email}
            onEmailChange={setEmail}
            password={password}
            onPasswordChange={setPassword}
            onLogin={handleLogin}
            error={error}
            onLoginWithGoogle={handleLoginWithGoogle}
            onNavigateRegister={handleNavigateRegister}
        />
    );
}

export default LoginPresenter;
