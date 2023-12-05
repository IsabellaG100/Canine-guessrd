// Import the action type constants
import {
    FETCH_BREED_REQUEST,
    FETCH_BREED_SUCCESS,
    FETCH_BREED_FAILURE,
    SUBMIT_ANSWER,
    UPDATE_TIMER,
    END_GAME
} from '../actions/gameActions';

// Initial state for the game
const initialState = {
    breeds: [], // To store the breed data fetched from the API
    currentBreed: null, // The current breed to display
    loading: false, // To track the loading state of breed fetching
    error: null, // To store any errors during fetch
    score: 0, // The player's score
    timer: 60, // Example initial timer value
};

// The gameReducer function
const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BREED_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_BREED_SUCCESS:
            return {
                ...state,
                loading: false,
                breeds: action.payload, // Update breeds with data fetched
                currentBreed: action.payload[0], // Set the first breed as the current one
            };
        case FETCH_BREED_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SUBMIT_ANSWER:
            // Add logic to update score based on answer correctness
            return {
                ...state,
                // We'll update logic as needed
            };
        case UPDATE_TIMER:
            return {
                ...state,
                timer: state.timer - 1, // Decrement the timer
            };
        case END_GAME:
            return {
                ...state,
                // Reset or update game state for end of the game
            };
        default:
            return state;
    }
};

export default gameReducer;
