// registerPresenter.jsx
import React from 'react';
import RegisterView from '../views/RegisterView';
import { useNavigate } from 'react-router-dom';


function RegisterPresenter(props) {
    const navigate = useNavigate();

    const handleRegister = async (email, password, username) => {
        try {
            await props.model.firebase.register(email, password, username);
            // Navigate to the next page or login page after successful registration
            navigate('/start'); // Replace '/login' with the actual path
        } catch (error) {
            alert('Registration Failed: ' + error.message);
        }
    };

    const handleRegisterWithGoogle = async () => {
        try {
            await props.model.firebase.loginWithGoogle();
            // Post-registration logic for Google sign-up (if different from standard registration)
            navigate('/start'); // Replace '/nextPage' with the actual path
        } catch (error) {
            alert('Google Registration Failed: ' + error.message);
        }
    };

    const handleBackToLogin = () => {
        navigate('/login'); // Navigate back to the login view
    };

    return <RegisterView 
               onRegister={handleRegister} 
               onRegisterWithGoogle={handleRegisterWithGoogle}
               onBackToLogin={handleBackToLogin}
           />;
}

export default RegisterPresenter;
