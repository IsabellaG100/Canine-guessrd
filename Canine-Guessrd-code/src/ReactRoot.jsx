import DogBreed from "../src/presenters/dogbreedPresenter.jsx";
import App from "../src/App.jsx"
import { createRoot } from 'react-dom/client';
import {createElement} from "react"
window.React={createElement}; // install React JSX without importing all of React

import {  createHashRouter,  RouterProvider, useParams} from "react-router-dom";

function ReactRoot(props){
    return(
    <div>
        <RouterProvider router={makeRouter(props.model)} />
    </div>
    );
}

function makeRouter(model){
    // model will be needed in a MVP application
    // not used here
    return createHashRouter([
    {
        path: "/",
        element: <DogBreed model={model} />,
    },


])
}