import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import quizModel from './models/QuizModel.js';
import firebaseModel from './models/firebaseModel';
import {observable, configure} from "mobx"


// Configure MobX
configure({ enforceActions: 'never' });

// Combine both models into a single object
const combinedModel = {
  quiz: quizModel,
  firebase: firebaseModel
};

// Make the combined model observable
const reactiveModel = observable(combinedModel)

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App model = {reactiveModel}/>
  </React.StrictMode>,
)

// Expose the model for debugging purposes
window.myModel = reactiveModel

