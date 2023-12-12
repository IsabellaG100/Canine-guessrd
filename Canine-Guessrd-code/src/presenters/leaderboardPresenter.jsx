// leaderboardPresenter.jsx
import React, { useEffect, useState } from 'react';
import LeaderboardView from "../views/leaderboardView"
import { useNavigate } from 'react-router-dom';

export default function Leaderboard(props){
    const [leaderboardData, setLeaderboardData] = useState([]);
    //const navigate = useNavigate();

    useEffect(() => {
        // Fetch and set leaderboard data
        props.model.firebase.getLeaderboardData((data) => {
            setLeaderboardData(data);
        });
    }, [props.model.firebase]);

    return <LeaderboardView leaderboardData={leaderboardData}/>
}