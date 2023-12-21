// leaderboardPresenter.jsx
import React, { useEffect, useState } from 'react';
import LeaderboardView from "../views/leaderboardView"
import { useNavigate } from 'react-router-dom';

export default function Leaderboard(props){
    const [leaderboardData, setLeaderboardData] = useState([]);
    const navigate = useNavigate();

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!props.model.firebase.isAuthenticated()) {
            navigate('/login');
        }
    }, [props.model, navigate]);

    useEffect(() => {
        // Fetch and set leaderboard data
        props.model.firebase.getLeaderboardData((data) => {
            setLeaderboardData(data);
        });
    }, [props.model.firebase]);

    return <LeaderboardView leaderboardData={leaderboardData}/>
}