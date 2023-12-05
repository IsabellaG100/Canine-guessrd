import { combineReducers } from 'redux';
import authReducer from './authReducer';
import gameReducer from './gameReducer';
import leaderboardReducer from './leaderboardReducer';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
    auth: authReducer,
    game: gameReducer,
    leaderboard: leaderboardReducer
});

export default rootReducer;
