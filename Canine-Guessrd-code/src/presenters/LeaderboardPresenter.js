// LeaderboardPresenter.js
// This presenter manages the leaderboard-related state and logic in the CanineGuessrd app.

import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaderboard } from './actions/leaderboardActions';

const useLeaderboardPresenter = () => {
    const dispatch = useDispatch();
    const leaderboardState = useSelector(state => state.leaderboard);

    // Function to initiate fetching leaderboard data
    const initiateFetchLeaderboard = () => {
        dispatch(fetchLeaderboard());
    };

    return {
        ...leaderboardState,
        initiateFetchLeaderboard
    };
};

export default useLeaderboardPresenter;
