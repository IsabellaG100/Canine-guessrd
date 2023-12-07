// LoginView.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, guestLogin, googleOAuthLogin } from '../models/actions/authActions';

const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth); // Accessing the auth state

    useEffect(() => {
        if (auth.user) {
            navigate('/home'); // Navigate to HomeView if user is authenticated
        }
    }, [auth.user, navigate]);

    // Handle user login submission
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    };

    // Handle Google OAuth login
    const handleGoogleLogin = () => {
        dispatch(googleOAuthLogin());
    };

    // Navigate to the RegisterView
    const handleNavigateToRegister = () => {
        navigate('/register');
    };

    // Handle playing as guest, navigate to HomeView
    const handleGuest = () => {
        dispatch(guestLogin());
        navigate('/home');
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            <button onClick={handleNavigateToRegister}>Register</button>
            <button onClick={handleGuest}>Play as Guest</button>
            <button onClick={handleGoogleLogin}>Login with Google</button> 
        </div>
    );
};

export default LoginView;
