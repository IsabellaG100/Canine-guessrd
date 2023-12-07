// leaderboardReducer.js
// Reducer for handling state changes related to the leaderboard in the CanineGuessrd app.

import {
    FETCH_LEADERBOARD_REQUEST,
    FETCH_LEADERBOARD_SUCCESS,
    FETCH_LEADERBOARD_FAILURE,
    UPDATE_LEADERBOARD
} from '../actions/leaderboardActions';

// Initial state of the leaderboard part of the store
const initialState = {
    leaderboardData: [], // Holds the list of leaderboard entries
    loading: false, // Indicates if a leaderboard fetch or update request is in progress
    error: null // Holds error messages, if any, during leaderboard operations
};

// The leaderboardReducer function
const leaderboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEADERBOARD_REQUEST:
            // When a leaderboard data fetch request starts, set loading to true
            return {
                ...state,
                loading: true,
                error: null // Clear any previous errors
            };
        case FETCH_LEADERBOARD_SUCCESS:
            // On successful leaderboard data fetch, store the data
            return {
                ...state,
                leaderboardData: action.payload,
                loading: false
            };
        case FETCH_LEADERBOARD_FAILURE:
            // If fetching leaderboard data fails, store the error message
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPDATE_LEADERBOARD:
            // Update the leaderboard with new data
            // This assumes that the payload is the entire updated leaderboard
            return {
                ...state,
                leaderboardData: action.payload,
                loading: false // Assuming the update process is instantaneous
            };
        default:
            // Return the current state for any other actions
            return state;
    }
};

export default leaderboardReducer;
