import React from 'react';
import {Link} from "react-router-dom";



// will add a new user if it is the first next button
/*
const handleNextButtonClick = (route) => {
    if (route == "/survey") {
        fetch('/backend/app/add_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}
*/


const NextButton = (props) => {
    return (
        <button className='btn btn-large btn-primary next-btn'><Link to={props.route}>Next</Link></button>
    );
}

export default NextButton;