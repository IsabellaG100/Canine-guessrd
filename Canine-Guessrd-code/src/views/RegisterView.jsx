// registerView.jsx
import React, { useState } from 'react';

function RegisterView(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    // Update state on input change
    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function handleUsernameChange(e){
        setUsername(e.target.value);
    }

    function homepageACB(){
        window.location.hash = "#/login"
    }

    return (
        <div className="registercontainer">
            <div className = "minilogoDiv">
                <button onClick = {homepageACB}
                        className = "minilogoButton">
                    <img src = "https://svgshare.com/i/10ZE.svg"
                         className="minilogoImage"/>
                </button>
            </div>
            <h1>Register</h1>
            <input className='registerform'
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            <input className='registerform'
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
            />
            <input className='registerform'
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <button className='registerbuttons' onClick={() => props.onRegister(email, password, username)}>Register</button>
            <button className='registerbuttons' onClick={props.onRegisterWithGoogle}>Register with Google</button>
            <p>
                Already have an account?
                <button onClick={props.onBackToLogin}>Back to Login</button>
            </p>
        </div>
    );
}

export default RegisterView;
