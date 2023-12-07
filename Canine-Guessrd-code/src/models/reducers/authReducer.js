// authReducer.js
// Reducer for handling authentication-related state changes in the CanineGuessrd app.

import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGOUT_SUCCESS,
  GUEST_LOGIN
} from '../actions/authActions';

// Initial state of the authentication part of the store
const initialState = {
  user: null, // Holds the user object on successful login or null otherwise
  loading: false, // Indicates if an authentication request is in progress
  error: null, // Holds error messages, if any, during authentication
  isGuest: false // Indicates if the current user is a guest
};

// The authReducer function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case AUTH_REQUEST:
          // When authentication request starts, set loading to true
          return {
              ...state,
              loading: true,
              error: null // Clear any previous errors
          };
      case AUTH_SUCCESS:
          // On successful authentication, store the user data
          return {
              ...state,
              user: action.payload,
              loading: false,
              isGuest: false // User is not a guest
          };
      case AUTH_FAILURE:
          // If authentication fails, store the error message
          return {
              ...state,
              loading: false,
              error: action.payload,
              user: null // Clear any existing user data
          };
      case LOGOUT_SUCCESS:
          // When user logs out, reset to initial state
          console.log('Handling LOGOUT_SUCCESS');
          return {
              ...initialState
          };
      case GUEST_LOGIN:
          // When continuing as a guest, set isGuest to true
          return {
              ...state,
              isGuest: true,
              user: null // No user data for guests
          };
      default:
          // Return the current state for any other actions
          return state;
  }
};

export default authReducer;
