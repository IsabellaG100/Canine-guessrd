// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './models/store/configureStore';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView'; // Import the HomeView component
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="/home" element={<HomeView />} /> {/* Route for HomeView */}
            {/* Define other routes as needed */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
