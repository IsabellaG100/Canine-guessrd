// registerView.jsx
import React from 'react';

function RegisterView(props) {

    // Update state on input change
    function handleEmailChange(e){
        props.setEmail(e.target.value);
    }

    function handlePasswordChange(e){
        props.setPassword(e.target.value);
    }

    function handleUsernameChange(e){
        props.setUsername(e.target.value);
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
                value={props.username}
                onChange={handleUsernameChange}
            />
            <input className='registerform'
                type="email"
                placeholder="Email"
                value={props.email}
                onChange={handleEmailChange}
            />
            <input className='registerform'
                type="password"
                placeholder="Password"
                value={props.password}
                onChange={handlePasswordChange}
            />
            <button className='registerbuttons' onClick={() => props.onRegister(props.email, props.password, props.username)}>Register</button>
            <button className='registerbuttons' onClick={props.onRegisterWithGoogle}>Register with Google</button>
            <p>
                Already have an account?
                <button onClick={props.onBackToLogin}>Back to Login</button>
            </p>
        </div>
    );
}

export default RegisterView;
