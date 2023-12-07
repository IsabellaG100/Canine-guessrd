// gameReducer.js
// Reducer for handling state changes related to game logic in the CanineGuessrd app.

import {
    FETCH_DOG_DATA_REQUEST,
    FETCH_DOG_DATA_SUCCESS,
    FETCH_DOG_DATA_FAILURE,
    SUBMIT_ANSWER,
    UPDATE_TIMER,
    UPDATE_SCORE
} from '../actions/gameActions';

// Initial state of the game part of the store
const initialState = {
    dogData: null, // Holds the dog data fetched from the API
    loading: false, // Indicates if a dog data fetch request is in progress
    error: null, // Holds error messages, if any, during dog data fetching
    answers: [], // Stores the player's answers
    timer: 0, // Tracks the game timer
    score: 0 // Tracks the player's score
};

// The gameReducer function
const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOG_DATA_REQUEST:
            // When the dog data fetch request starts, set loading to true
            return {
                ...state,
                loading: true,
                error: null // Clear any previous errors
            };
        case FETCH_DOG_DATA_SUCCESS:
            // On successful dog data fetch, store the data
            return {
                ...state,
                dogData: action.payload,
                loading: false
            };
        case FETCH_DOG_DATA_FAILURE:
            // If fetching dog data fails, store the error message
            return {
                ...state,
                loading: false,
                error: action.payload,
                dogData: null // Clear any existing dog data
            };
        case SUBMIT_ANSWER:
            // Store the player's answer
            return {
                ...state,
                answers: [...state.answers, action.payload]
            };
        case UPDATE_TIMER:
            // Update the game timer
            return {
                ...state,
                timer: action.payload
            };
        case UPDATE_SCORE:
            // Update the player's score
            return {
                ...state,
                score: action.payload
            };
        default:
            // Return the current state for any other actions
            return state;
    }
};

export default gameReducer;
