// profileView.jsx
import React from 'react';

function ProfileView(props) {
    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <p>Username: {props.username}</p>
            <p>Highscore: {props.highscore}</p>

            <input type="text" placeholder="New Username" value={props.newUsername} onChange={(e) => props.onNewUsernameChange(e.target.value)} />
            <button onClick={props.onChangeUsername}>Change Username</button>

            <input type="email" placeholder="New Email" value={props.newEmail} onChange={(e) => props.onNewEmailChange(e.target.value)} />
            <button onClick={props.onChangeEmail}>Change Email</button>

            {props.error && <p className="error">{props.error}</p>}

            <button onClick={props.onBackToStart}>Back to Start</button>
        </div>
    );
}

export default ProfileView;
