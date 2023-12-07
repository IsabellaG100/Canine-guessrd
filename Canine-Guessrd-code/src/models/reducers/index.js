// index.js
// This file combines all individual reducers (auth, game, and leaderboard) into a single root reducer.
// The root reducer will then be used to create the Redux store.

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import gameReducer from './gameReducer';
import leaderboardReducer from './leaderboardReducer';

// Combining all reducers into one root reducer
// Each reducer manages a different part of the app's state.
const rootReducer = combineReducers({
    auth: authReducer, // Manages state related to user authentication
    game: gameReducer, // Manages state related to the game's functionality (dog data, timer, etc.)
    leaderboard: leaderboardReducer // Manages state related to the leaderboard (scores and rankings)
});

// Exporting the root reducer so it can be used in the store configuration
export default rootReducer;
