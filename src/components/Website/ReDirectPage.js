
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function RedirectPage(props) {

    let navigate = useNavigate();
  
    if (props.redirect===true){
            navigate('/get');
        
    return (<div></div>);
    }
    else{
        return null;
    }
    
  }