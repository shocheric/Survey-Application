import React from 'react';
import { useState } from 'react';

const Rewrite = (props) => {
    // set toggle to false by default
    const [toggled, setToggled] = useState(false);
    // function to rotate toggle arrow when clicked
    const handleClickDescription = () => {
        const toggle = document.getElementById("bi-toggle");
        if (toggled) {
            toggle.style.transform = "rotate(0deg)";
            setToggled(false);
            
        }
        else {
            toggle.style.transform = "rotate(90deg)";
            setToggled(true);
        }
    };

    return (
        <main className="Content">
            <div className="card">
                <h5 className="card-header">You will rewrite the following case in your own words:</h5>
                <div className="card-body">
                    <h5 className="card-text case"> {props.case ? '"'+props.case+'"' : "Loading..."} </h5>
                    <p className="d-inline-flex gap-1">
                        <a onClick={handleClickDescription} className="btn btn-sm btn-light" data-bs-toggle="collapse" href={"#collapseDescription"} role="button" aria-expanded="false" aria-controls={"collapseDescription"}>
                            See Description
                            <svg active="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16" id={"bi-toggle"}>
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                        </a>
                    </p>
                    <div className="collapse" id={"collapseDescription"}>
                        <div className="card card-body">
                            {props.description}
                        </div>
                    </div>
                </div>
                <textarea className="rewrite-area" name="rewrite" id="rewrite-area" placeholder='Type your rewrite here...'>

                </textarea>
                <h5 className="tip">click Next when you are done</h5>
            </div>
        </main>
    )
}

export default Rewrite;