// loginView.jsx
import React, { useState } from 'react';

function LoginView(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function leaderboardACB(){
        window.location.hash = "#/leaderboard"
    }

    return (
        <div>
            {//Button to Leaderboard, might have to change prop
            }
            <div className = "leaderboardDiv">
                <button onClick={leaderboardACB}
                        className = "leaderboardButton">
                    <img src = "https://svgshare.com/i/10ZW.svg"
                         height = {35}/>
                </button>
            </div>

            {// Logo image, must decide where we want to store it
            }
            <img src = "https://svgshare.com/i/10ZE.svg"
                 height = {400}/>

            <div className="login-container">
                <div>
                    <input className="loginform"
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={handleEmailChange} 
                    />
                    <input className="loginform" 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                    />
                    <button onClick={() => props.onLogin(email, password)}>Login</button>
                </div>
                
                <p>Or continue with...</p>
                <button onClick={props.onLoginWithGoogle}>
                    Login with Google
                </button>
                <p>
                    Don't have an account? <button onClick={props.onNavigateRegister}>Register</button>
                </p>
            </div>
        </div>
    );
}

export default LoginView;
