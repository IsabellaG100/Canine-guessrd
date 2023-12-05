// Import the action type constants
import { 
    AUTH_REQUEST, 
    AUTH_SUCCESS, 
    AUTH_FAILURE, 
    LOGOUT_SUCCESS, 
    GUEST_LOGIN  // Include the GUEST_LOGIN action type
  } from '../actions/authActions';
  
  // Initial state for the authentication
  const initialState = {
    user: null, // Will hold the user object on successful login or null otherwise
    loading: false, // To track the loading state of authentication requests
    error: null, // To store any authentication error messages
    isGuest: false, // To track if the user is logged in as a guest
  };
  
  // The authReducer function
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTH_REQUEST:
        // Initiate the authentication process
        return {
          ...state,
          loading: true,
          error: null, // Clear any previous errors
        };
      case AUTH_SUCCESS:
        // Successfully authenticated the user
        return {
          ...state,
          loading: false,
          user: action.payload, // Store the user object
          error: null, // Clear any errors
          isGuest: false, // User is not a guest
        };
      case AUTH_FAILURE:
        // Authentication failed with an error
        return {
          ...state,
          loading: false,
          user: null, // Clear any existing user data
          error: action.payload, // Store the error message
        };
      case LOGOUT_SUCCESS:
        // User has logged out
        return {
          ...state,
          user: null, // Clear the user object
          error: null, // Clear any errors
          isGuest: false, // User is not a guest
        };
      case GUEST_LOGIN:
        // User is continuing as a guest
        return {
          ...state,
          user: null, // No user object for guests
          isGuest: true, // Mark the session as guest
          error: null, // Clear any errors
        };
      default:
        // No changes for other actions, return the current state
        return state;
    }
  };
  
export default authReducer;
  