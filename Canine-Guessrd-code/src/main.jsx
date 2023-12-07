import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "/src/firebaseModel.js"
import App from './App.jsx'

import model from "../src/QuizModel.js"
import {observable, configure} from "mobx"

configure({enforeActions: "never", })

const reactiveModel = observable(model)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App model = {reactiveModel}/>
  </React.StrictMode>,
)

window.myModel = reactiveModel

