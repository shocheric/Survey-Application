import React from 'react';
import {Link} from "react-router-dom";


const NextButton = (props) => {
    return (
        <button className='btn btn-large btn-primary next-btn'><Link to={props.route}>Next</Link></button>
    )
}

export default NextButton;