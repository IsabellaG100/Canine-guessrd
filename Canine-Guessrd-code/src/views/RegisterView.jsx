// RegisterView.jsx
// This component renders the registration interface for the CanineGuessrd app.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../models/actions/authActions';

const RegisterView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle user registration
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser(email, password));
    };

    // Handle navigation back to LoginView
    const handleBackToLogin = () => {
        navigate('/login'); // Navigate to the login route
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Register</button>
            </form>
            <button onClick={handleBackToLogin}>Back to Login</button>
        </div>
    );
};

export default RegisterView;
