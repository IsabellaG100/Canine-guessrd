// registerView.jsx
import React, { useState } from 'react';

function RegisterView(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    // Update state on input change
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);

    return (
        <div className="register-container">
            <h1>Register</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <button onClick={() => props.onRegister(email, password, username)}>Register</button>
            <button onClick={props.onRegisterWithGoogle}>Register with Google</button>
            <p>
                Already have an account? 
                <button onClick={props.onNavigateLogin}>Login</button>
                <button onClick={props.onBackToLogin}>Back to Login</button>
            </p>
        </div>
    );
}

export default RegisterView;
