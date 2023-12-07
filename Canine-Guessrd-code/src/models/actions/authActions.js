// authActions.js
// Actions for handling user authentication in the CanineGuessrd app.
// Includes email/password login, Google OAuth login, user registration, logout, and guest login.

import { register, login, loginWithGoogle, logout } from '../../firebaseService';

// Action type constants
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const GUEST_LOGIN = 'GUEST_LOGIN';

// Action creator for authentication requests
export const authRequest = () => ({
    type: AUTH_REQUEST
});

// Action creator for successful authentication
export const authSuccess = user => ({
    type: AUTH_SUCCESS,
    payload: user
});

// Action creator for failed authentication
export const authFailure = error => ({
    type: AUTH_FAILURE,
    payload: error
});

// Action creator for successful logout
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
});

// Async action creator for registering a new user
export const registerUser = (email, password) => async dispatch => {
    dispatch(authRequest());
    try {
        const user = await register(email, password);
        dispatch(authSuccess(user));
    } catch (error) {
        dispatch(authFailure(error.message));
    }
};

// Async action creator for logging in a user
export const loginUser = (email, password) => async dispatch => {
    dispatch(authRequest());
    try {
        const user = await login(email, password);
        dispatch(authSuccess(user));
    } catch (error) {
        dispatch(authFailure(error.message));
    }
};

// Async action creator for logging in with Google OAuth
export const googleOAuthLogin = () => async dispatch => {
    dispatch(authRequest());
    try {
        const user = await loginWithGoogle();
        dispatch(authSuccess(user));
    } catch (error) {
        dispatch(authFailure(error.message));
    }
};

// Async action creator for logging out a user
export const logoutUser = () => async dispatch => {
    try {
        await logout();
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(authFailure(error.message));
    }
};

// Action creator for guest login
export const guestLogin = () => ({
    type: GUEST_LOGIN,
    payload: { isGuest: true }
});

// These actions allow the app to handle different authentication states and methods,
// ensuring that users can register, log in, log out, and play as guests.
