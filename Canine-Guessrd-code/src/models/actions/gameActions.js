// gameActions.js
// Actions for managing game logic in the CanineGuessrd app.
// Includes fetching dog data, submitting answers, updating the timer, and managing game scores.

import { fetchBreedInfo } from '../../dogApiService';

// Action type constants
export const FETCH_DOG_DATA_REQUEST = 'FETCH_DOG_DATA_REQUEST';
export const FETCH_DOG_DATA_SUCCESS = 'FETCH_DOG_DATA_SUCCESS';
export const FETCH_DOG_DATA_FAILURE = 'FETCH_DOG_DATA_FAILURE';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const UPDATE_TIMER = 'UPDATE_TIMER';
export const UPDATE_SCORE = 'UPDATE_SCORE';

// Action creator for initiating a request to fetch dog data
export const fetchDogDataRequest = () => ({
    type: FETCH_DOG_DATA_REQUEST
});

// Action creator for successful dog data fetch
export const fetchDogDataSuccess = dogData => ({
    type: FETCH_DOG_DATA_SUCCESS,
    payload: dogData
});

// Action creator for failed dog data fetch
export const fetchDogDataFailure = error => ({
    type: FETCH_DOG_DATA_FAILURE,
    payload: error
});

// Async action creator for fetching dog data from DogBreedDB
export const fetchDogData = () => async dispatch => {
    dispatch(fetchDogDataRequest());
    try {
        const data = await fetchBreedInfo();
        dispatch(fetchDogDataSuccess(data));
    } catch (error) {
        dispatch(fetchDogDataFailure(error.message));
    }
};

// Action creator for submitting an answer
export const submitAnswer = answer => ({
    type: SUBMIT_ANSWER,
    payload: answer
});

// Action creator for updating the game timer
export const updateTimer = time => ({
    type: UPDATE_TIMER,
    payload: time
});

// Action creator for updating the game score
export const updateScore = score => ({
    type: UPDATE_SCORE,
    payload: score
});

// These actions enable the app to handle different aspects of the game like fetching dog data,
// responding to player answers, keeping track of time, and updating scores.
