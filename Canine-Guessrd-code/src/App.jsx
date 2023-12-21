import './App.css'
import Start from './presenters/startPresenter'
import Leaderboard from './presenters/leaderboardPresenter'
import Game from './presenters/gamePresenter'
import Results from './presenters/resultsPresenter'
import Login from './presenters/loginPresenter' 
import Register from './presenters/registerPresenter'; 
import Profile from './presenters/profilePresenter'; 


import {createElement} from "react"
window.React={createElement}; // install React JSX without importing all of React

import {  createHashRouter,  RouterProvider} from "react-router-dom";

function makeRouter(model){

    return createHashRouter([

      {
          path: "/",
          element: <Login model = {model}/>,
      },
      {
        path: "/login",
        element: <Login model = {model}/>,
      },
      {
        path: "/register",
        element: <Register model = {model}/>,
      },
      {
          path: "/start",
          element: <Start model = {model}/>,
      },      
      {
        path: "/profile",
        element: <Profile model = {model}/>,
      },
      {
          path: "/leaderboard",
          element: <Leaderboard model = {model}/>,
      },
      {
        path: "/game",
        element: <Game model = {model}/>,
      },
      {
        path: "/results",
        element: <Results model = {model}/>,
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


export default App;
