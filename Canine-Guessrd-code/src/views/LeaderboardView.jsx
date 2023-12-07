// LeaderboardView.jsx
// This component shows the leaderboard of the CanineGuessrd app.

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeaderboard } from '../models/actions/leaderboardActions';

const LeaderboardView = () => {
    const dispatch = useDispatch();
    const { leaderboardData, loading, error } = useSelector(state => state.leaderboard);

    useEffect(() => {
        dispatch(fetchLeaderboard());
    }, [dispatch]);

    if (loading) return <p>Loading leaderboard...</p>;
    if (error) return <p>Error loading leaderboard: {error}</p>;

    return (
        <div>
            <h1>Leaderboard</h1>
            <ul>
                {leaderboardData.map((entry, index) => (
                    <li key={index}>{entry.username}: {entry.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default LeaderboardView;
