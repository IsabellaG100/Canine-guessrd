import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "/src/firebaseModel.js"

import App from './App.jsx'
import model from '../src/QuizModel.js';
import { observable, configure } from "mobx";

configure({ enforceActions: "never", });  // we don't use Mobx actions

const reactiveModel= observable(model);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App model={reactiveModel}/>);

    /*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactRoot model={reactiveModel} />
  </React.StrictMode>,
)*/

window.myModel= reactiveModel;  
