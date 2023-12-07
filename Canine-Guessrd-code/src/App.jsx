// App.jsx

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import store from './models/store/configureStore'; // Make sure this path is correct
import LoginView from './views/LoginView'; // Make sure this path is correct
import RegisterView from './views/RegisterView'; // Make sure this path is correct
import HomeView from './views/HomeView'; // Make sure this path is correct
import GameView from './views/GameView'; // Make sure this path is correct
import LeaderboardView from './views/LeaderboardView'; // Make sure this path is correct

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/login" />} />
                        <Route path="/login" element={<LoginView />} />
                        <Route path="/register" element={<RegisterView />} /> {/* Make sure this line is added */}
                        <Route path="/home" element={<HomeView />} />
                        <Route path="/game" element={<GameView />} />
                        <Route path="/leaderboard" element={<LeaderboardView />} />
                        {/* Add other routes if needed */}
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
