
import './App.css'

import Start from './presenters/startPresenter'
import Leaderboard from './presenters/leaderboardPresenter'
import Game from './presenters/gamePresenter'
import Results from './presenters/resultsPresenter'

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


function App() {
  return (
    <div>
      


      <RouterProvider router={makeRouter(/*model*/)}/> 
    </div>
  )
}

export default App
