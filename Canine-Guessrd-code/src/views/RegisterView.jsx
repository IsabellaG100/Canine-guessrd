// registerView.jsx
import React from 'react';
import React from 'react';

function RegisterView(props) {

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
                onChange={(e) => props.onUsernameChange(e.target.value)}
            />
            <input className='registerform'
                type="email"
                placeholder="Email"
                value={props.email}
                onChange={(e) => props.onEmailChange(e.target.value)}
            />
            <input className='registerform'
                type="password"
                placeholder="Password"
                value={props.password}
                onChange={(e) => props.onPasswordChange(e.target.value)}
            />
            {props.error && <p className="error">{props.error}</p>}
            <button className='registerbuttons' onClick={props.onRegister}>Register</button>
            <button className='registerbuttons' onClick={props.onRegisterWithGoogle}>Register with Google</button>
            <p>
                Already have an account?
                <button onClick={props.onBackToLogin}>Back to Login</button>
            </p>
        </div>
    );
}

export default RegisterView;
