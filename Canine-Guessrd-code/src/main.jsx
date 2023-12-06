import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "/src/firebaseModel.js"

import App from './App.jsx'
import Leaderboard from "/Users/alicetsoi/Documents/iprog/Canine-Guessrd/Canine-Guessrd-code/src/presenters/leaderboardPresenter.jsx"
import Results from "/Users/alicetsoi/Documents/iprog/Canine-Guessrd/Canine-Guessrd-code/src/presenters/resultsPresenter.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Results />
  </React.StrictMode>,
)
