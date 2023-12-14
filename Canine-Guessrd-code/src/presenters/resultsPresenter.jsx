import ResultsView from "../views/resultsView"
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Results(props){
    const navigate = useNavigate();

    useEffect(() => {
      if (!props.model.firebase.isAuthenticated()) {
        navigate('/login');
      }
    }, [props.model, navigate]);
    
    return <ResultsView />
}