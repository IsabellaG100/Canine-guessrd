import {
    FETCH_LEADERBOARD_REQUEST,
    FETCH_LEADERBOARD_SUCCESS,
    FETCH_LEADERBOARD_FAILURE,
    UPDATE_LEADERBOARD
} from '../actions/leaderboardActions';

// Initial state setup for the leaderboard part of the store
const initialState = {
    leaderboardData: [], // Stores the list of leaderboard entries
    loading: false, // Flag to indicate if a leaderboard fetch is in progress
    error: null, // Holds error messages, if any, during fetch operations
};

const leaderboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEADERBOARD_REQUEST:
            // When we start fetching leaderboard data, set loading to true
            return {
                ...state,
                loading: true,
                error: null, // Reset errors on a new request
            };
        case FETCH_LEADERBOARD_SUCCESS:
            // Once data is successfully fetched, sort it by score in descending order
            const sortedData = action.payload.sort((a, b) => b.score - a.score);
            return {
                ...state,
                loading: false, // Fetching done, set loading to false
                leaderboardData: sortedData, // Update state with sorted data
            };
        case FETCH_LEADERBOARD_FAILURE:
            // In case of an error during fetch, update the error state
            return {
                ...state,
                loading: false, // Fetching done, even if it failed
                error: action.payload, // Store the error message
            };
        case UPDATE_LEADERBOARD:
            // To handle new leaderboard entries
            const updatedLeaderboard = [...state.leaderboardData, action.payload];
            // Sort the updated leaderboard to ensure it's in the right order
            updatedLeaderboard.sort((a, b) => b.score - a.score);
            return {
                ...state,
                leaderboardData: updatedLeaderboard, // Updated and sorted leaderboard
            };
        default:
            // For all other actions, return the current state
            return state;
    }
};

export default leaderboardReducer;
