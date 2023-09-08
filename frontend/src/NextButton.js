import React from 'react';
import {Link} from "react-router-dom";



const NextButton = (props) => {
    // check if last next button to call the end_session route and log out user automatically
    if (props.route === "/thankyou") {
        fetch('/end_session')
        console.log("Route called successfully")
    }

    return (
        <button className='btn btn-large btn-primary next-btn'><Link to={props.route}>Next</Link></button>
    );
}

export default NextButton;