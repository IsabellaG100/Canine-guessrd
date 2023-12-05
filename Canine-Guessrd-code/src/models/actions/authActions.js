// authActions.js
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebaseConfig'; 

// Get the authentication instance from the initialized Firebase app
const auth = getAuth(app);

// Action type constants
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const GUEST_LOGIN = 'GUEST_LOGIN'; // New action type for guest login

// Action creator for authentication requests
export const authRequest = () => {
    return { type: AUTH_REQUEST };
};

// Action creator for successful authentication
export const authSuccess = (user) => {
    return { type: AUTH_SUCCESS, payload: user };
};

// Action creator for failed authentication attempts
export const authFailure = (error) => {
    return { type: AUTH_FAILURE, payload: error };
};

// Action creator for successful logouts
export const logoutSuccess = () => {
    return { type: LOGOUT_SUCCESS };
};

// Async action creator for logging in users
export const loginUser = (email, password) => (dispatch) => {
    dispatch(authRequest());
    signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => dispatch(authSuccess(user)))
        .catch((error) => dispatch(authFailure(error.message)));
};

// Async action creator for registering users
export const registerUser = (email, password) => (dispatch) => {
    dispatch(authRequest());
    createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => dispatch(authSuccess(user)))
        .catch((error) => dispatch(authFailure(error.message)));
};

// Async action creator for logging out users
export const logoutUser = () => (dispatch) => {
    signOut(auth)
        .then(() => dispatch(logoutSuccess()))
        .catch((error) => dispatch(authFailure(error.message)));
};

// Action creator for guest login
export const guestLogin = () => {
    return { type: GUEST_LOGIN, payload: { isGuest: true } };
};
