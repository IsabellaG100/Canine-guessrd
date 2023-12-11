// loginView.jsx
import React, { useState } from 'react';

function LoginView(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <div className="login-container">
            <h1>Login</h1>
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
            <button onClick={() => props.onLogin(email, password)}>Login</button>
            <button onClick={props.onLoginWithGoogle}>Login with Google</button>
            <p>
                Don't have an account? <button onClick={props.onNavigateRegister}>Register</button>
            </p>
        </div>
    );
}

export default LoginView;
