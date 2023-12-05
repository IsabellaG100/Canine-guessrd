// LoginView.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Needed for navigation
import { loginUser, registerUser, guestLogin } from '../models/actions/authActions';

const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Hook for navigation

    // Handle user login submission
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    };

    // Handle new user registration
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser(email, password));
    };

    // Handle playing as guest, navigate to HomeView
    const handleGuest = (e) => {
        e.preventDefault();
        dispatch(guestLogin()); // Dispatch the guest login action
        navigate('/home'); // Navigate to the home route
    };

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
                <button onClick={handleGuest}>Play as Guest</button>
            </form>
        </div>
    );
};

export default LoginView;
