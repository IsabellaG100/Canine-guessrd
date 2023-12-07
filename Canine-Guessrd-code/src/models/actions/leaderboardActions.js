// leaderboardActions.js
// Actions for handling the leaderboard in the CanineGuessrd app.
// Includes fetching and updating leaderboard data, and handling errors, all using firebaseService.js.

import { getLeaderboardData, setLeaderboardData, updateLeaderboardData } from '../../firebaseService';

// Action type constants for leaderboard operations
export const FETCH_LEADERBOARD_REQUEST = 'FETCH_LEADERBOARD_REQUEST';
export const FETCH_LEADERBOARD_SUCCESS = 'FETCH_LEADERBOARD_SUCCESS';
export const FETCH_LEADERBOARD_FAILURE = 'FETCH_LEADERBOARD_FAILURE';
export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD';

// Action creator for initiating a leaderboard data fetch request
export const fetchLeaderboardRequest = () => ({
    type: FETCH_LEADERBOARD_REQUEST
});

// Action creator for successful leaderboard data fetch
export const fetchLeaderboardSuccess = leaderboardData => ({
    type: FETCH_LEADERBOARD_SUCCESS,
    payload: leaderboardData
});

// Action creator for failed leaderboard data fetch
export const fetchLeaderboardFailure = error => ({
    type: FETCH_LEADERBOARD_FAILURE,
    payload: error
});

// Async action creator for fetching leaderboard data
export const fetchLeaderboard = () => async dispatch => {
    dispatch(fetchLeaderboardRequest());
    try {
        getLeaderboardData(data => {
            dispatch(fetchLeaderboardSuccess(data));
        });
    } catch (error) {
        dispatch(fetchLeaderboardFailure(error.message));
    }
};

// Action creator for updating the leaderboard
export const updateLeaderboard = (userId, data) => async dispatch => {
    try {
        await updateLeaderboardData(userId, data);
        dispatch(fetchLeaderboard()); // Re-fetch leaderboard data to update the state
    } catch (error) {
        dispatch(fetchLeaderboardFailure(error.message));
    }
};

// These actions enable the app to handle the leaderboard, showing players' scores,
// and keeping the information up-to-date and accurate.
