// GameView.jsx
// This component represents the main gameplay interface of the CanineGuessrd app.

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDogData } from '../models/actions/gameActions';

const GameView = () => {
    const dispatch = useDispatch();
    const { dogData, loading, error } = useSelector(state => state.game);

    useEffect(() => {
        dispatch(fetchDogData());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Guess the Dog Breed!</h1>
            {dogData && (
                <div>
                    <img src={dogData.image} alt="Guess the breed" />
                    {/* Add more interactive elements like options for guessing the breed */}
                </div>
            )}
        </div>
    );
};

export default GameView;
