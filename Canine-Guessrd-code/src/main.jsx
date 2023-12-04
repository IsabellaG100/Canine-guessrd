import {createElement} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import model from '../src/QuizModel.js'


import { observable, configure } from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions
const reactiveModel= observable(model);

window.React= {createElement:createElement};

import ReactRoot from "./ReactRoot.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactRoot model={reactiveModel} />
  </React.StrictMode>,
)


