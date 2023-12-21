// profileView.jsx
import React from 'react';

function ProfileView(props) {
    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <p>Username: {props.username}</p>
            <p>Highscore: {props.highscore}</p>

            {props.error && <p className="error">{props.error}</p>}

            <button onClick={props.onBackToStart}>Back to Start</button>
        </div>
    );
}

export default ProfileView;
