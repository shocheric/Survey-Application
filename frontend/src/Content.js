import Radio from './Radio';
import { useState} from 'react';
import React from 'react';



const Content = (props) => {
    // Question templates and placeholder cases
    const question1 = "On a scale of 1-10, how well do you understand this statement?";
    const question2 = "According to you, how would you rate the severity of this case? \n (1 being very critical and infringing the user's privacy and 10 being completely in favor of the user)";


    // set toggle to false by default
    const [toggled, setToggled] = useState(false);
    // function to rotate toggle arrow when clicked
    const handleClickDescription = () => {
        const toggle = document.getElementById("bi-toggle-"+props.questionNumber);
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
                <h5 className="card-header">You will rate the understandability and severity of the following case:</h5>
                <div className="card-body">
                    <h5 className="card-text case"> {props.questionNumber + ".   "} {props.case ? '"'+props.case+'"' : "Loading..."} </h5>
                    <p className="d-inline-flex gap-1">
                        <a onClick={handleClickDescription} className="btn btn-sm btn-light" data-bs-toggle="collapse" href={"#collapseDescription-"+props.questionNumber} role="button" aria-expanded="false" aria-controls={"collapseDescription-"+props.questionNumber}>
                            See Description
                            <svg active="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16" id={"bi-toggle-"+props.questionNumber}>
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                        </a>
                        
                    </p>
                    <div className="collapse" id={"collapseDescription-"+props.questionNumber}>
                        <div className="card card-body">
                            {props.caseDescription ? props.caseDescription : "Loading..."}
                        </div>
                    </div>
                    <div className='question-body'>
                        <h2 className="question">a. { question1 } </h2>
                        <Radio 
                            question_type={"a"}
                            questionNumber={props.questionNumber}
                        />
                        <h2 className="question">b. { question2 } </h2>
                        <Radio
                            question_type={"b"}
                            questionNumber={props.questionNumber}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content
