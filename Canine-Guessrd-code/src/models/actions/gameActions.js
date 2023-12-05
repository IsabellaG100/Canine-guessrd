// Define the action type constants
export const FETCH_BREED_REQUEST = 'FETCH_BREED_REQUEST';
export const FETCH_BREED_SUCCESS = 'FETCH_BREED_SUCCESS';
export const FETCH_BREED_FAILURE = 'FETCH_BREED_FAILURE';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const UPDATE_TIMER = 'UPDATE_TIMER';
export const END_GAME = 'END_GAME';

// Action creators for fetching breed information
export const fetchBreedRequest = () => {
    return { type: FETCH_BREED_REQUEST };
};

export const fetchBreedSuccess = (breedData) => {
    return { type: FETCH_BREED_SUCCESS, payload: breedData };
};

export const fetchBreedFailure = (error) => {
    return { type: FETCH_BREED_FAILURE, payload: error };
};

// Action creator for submitting an answer
export const submitAnswer = (answer) => {
    return { type: SUBMIT_ANSWER, payload: answer };
};

// Action creator for updating the timer
export const updateTimer = () => {
    return { type: UPDATE_TIMER };
};

// Action creator for ending the game
export const endGame = () => {
    return { type: END_GAME };
};

// Async action creator for fetching breed information from the DogBreedDB API
export const fetchBreed = () => async (dispatch) => {
    dispatch(fetchBreedRequest());
    const url = 'https://dogbreeddb.p.rapidapi.com/?ordering=-breedName';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '***REMOVED***',
            'X-RapidAPI-Host': 'dogbreeddb.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        dispatch(fetchBreedSuccess(result));
    } catch (error) {
        dispatch(fetchBreedFailure(error.message));
    }
};
