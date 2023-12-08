
// App.jsx
/*
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
                        <Route path="/register" element={<RegisterView />} />
                        <Route path="/home" element={<HomeView />} />
                        <Route path="/game" element={<GameView />} />
                        <Route path="/leaderboard" element={<LeaderboardView />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};
*/

import './App.css'

import Start from './presenters/startPresenter'
import Leaderboard from './presenters/leaderboardPresenter'
import Game from './presenters/gamePresenter'
import Results from './presenters/resultsPresenter'
import { observer } from "mobx-react-lite";

import {createElement} from "react"
window.React={createElement}; // install React JSX without importing all of React

import {  createHashRouter,  RouterProvider} from "react-router-dom";

function makeRouter(model){

    return createHashRouter([

      {
          path: "/",
          element: <Start model = {model} />,
      },
      {
          path: "/start",
          element: <Start model = {model} />,
      },
      {
          path: "/leaderboard",
          element: <Leaderboard model = {model} />,
      },
      {
        path: "/game",
        element: <Game model = {model} />,
      },
      {
        path: "/results",
        element: <Results model = {model} />,
      },

    ])
}


function App(props) {
  return (
    <div>
      <RouterProvider router={makeRouter(props.model)}/> 
    </div>
  )
}

export default observer(App);
