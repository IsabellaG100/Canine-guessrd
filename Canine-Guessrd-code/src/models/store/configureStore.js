// configureStore.js
// This file sets up and configures the Redux store for the CanineGuessrd app using Redux Toolkit.

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers'; // Importing the combined root reducer

// The Redux store is a centralized place that holds the entire state of the application.
// It allows our React components to access the state and dispatch actions to update the state.
// This function configures the store and automatically sets up the Redux DevTools Extension and includes Redux Thunk middleware by default.
const store = configureStore({
    reducer: rootReducer,
});

// Exporting the store to be used in the app
export default store;
