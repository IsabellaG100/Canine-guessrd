// loginView.jsx
import React from 'react';

function LoginView(props) {

    function leaderboardACB(){
        window.location.hash = "#/leaderboard"
    }

    return (
        <div>
            {// Logo image, must decide where we want to store it
            }
            <img src = "https://svgshare.com/i/10ZE.svg"
                 height = {400}/>

            <div className="login-container">
                <div>
                    <input className="loginform"
                        type="email" 
                        placeholder="Email" 
                        value={props.email} 
                        onChange={(e) => props.onEmailChange(e.target.value)}
                    />
                    <input className="loginform" 
                        type="password" 
                        placeholder="Password" 
                        value={props.password} 
                        onChange={(e) => props.onPasswordChange(e.target.value)} 
                    />
                    <button onClick={props.onLogin}>Login</button>
                </div>

                {props.error && <p className="error">{props.error}</p>}
                
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
