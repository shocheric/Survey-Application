import Radio from './Radio';
import { useState, useEffect, useMemo, useRef } from 'react';
import Thankyou from './Thankyou';
import React from 'react';



const Content = (props) => {
    // Question templates and placeholder cases
    const question1 = "On a scale of 1-10, how well do you understand this statement?";
    const question2 = "According to you, how would you rate the severity of this case? \n (1 being very critical and infringing the user's privacy and 10 being completely in favor of the user)";


    // set toggle to false by default
    const [toggled, setToggled] = useState(false);
    // function to rotate toggle arrow when clicked
    const handleClickDescription = () => {
        const toggle = document.getElementById("bi-toggle-"+props.question_number);
        if (toggled) {
            toggle.style.transform = "rotate(0deg)";
            setToggled(false);
            
        }
        else {
            toggle.style.transform = "rotate(90deg)";
            setToggled(true);
        }
    };

    const [cases, setCase] = useState();
    const [descriptions, setDescriptions] = useState();

    useEffect(() => {
        fetch('/get_cases')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setCase(data.cases);
                setDescriptions(data.descriptions);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
      }, []);

      console.log(cases);
      console.log(descriptions);

      

    
    return (
        <main className="Content">
            <div className="card">
                <h5 className="card-header">You will rate the understandability and severity of the following case:</h5>
                <div className="card-body">
                    <h5 className="card-text case"> {props.question_number + ".   "} "{cases ? cases[props.question_number] : "Loading..."}" </h5>
                    <p className="d-inline-flex gap-1">
                        <a onClick={handleClickDescription} className="btn btn-sm btn-light" data-bs-toggle="collapse" href={"#collapseDescription-"+props.question_number} role="button" aria-expanded="false" aria-controls={"collapseDescription-"+props.question_number}>
                            See Description
                            <svg active="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" id={"bi-toggle-"+props.question_number}>
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                        </a>
                        
                    </p>
                    <div className="collapse" id={"collapseDescription-"+props.question_number}>
                        <div class="card card-body">
                            {descriptions ? descriptions[props.question_number] : "Loading..."}
                        </div>
                    </div>
                    <div className='question-body'>
                        <h2 className="question">a. { question1 } </h2>
                        <Radio 
                            question_type={"a"}
                        />
                        <h2 className="question">b. { question2 } </h2>
                        <Radio
                            question_type={"b"}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content
