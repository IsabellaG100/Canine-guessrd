// GamePresenter.js
// This presenter manages the game-related state and logic in the CanineGuessrd app.

import { useDispatch, useSelector } from 'react-redux';
import { fetchDogData, submitAnswer } from './actions/gameActions';

const useGamePresenter = () => {
    const dispatch = useDispatch();
    const gameState = useSelector(state => state.game);

    // Function to initiate fetching dog data
    const initiateFetchDogData = () => {
        dispatch(fetchDogData());
    };

    // Function to handle answer submission
    const handleSubmitAnswer = (answer) => {
        dispatch(submitAnswer(answer));
    };

    return {
        ...gameState,
        initiateFetchDogData,
        handleSubmitAnswer
    };
};

export default useGamePresenter;
