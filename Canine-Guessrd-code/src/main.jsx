import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "/src/firebaseModel.js"
import Leaderboard from "/Users/alicetsoi/Documents/iprog/Canine-Guessrd/Canine-Guessrd-code/src/presenters/leaderboardPresenter.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Leaderboard />
  </React.StrictMode>,
)
