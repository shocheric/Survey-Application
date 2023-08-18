import React, {useState, useEffect} from 'react';

const Introduction = () => {
    const studyIntro = 'This survey is part of a study being run by the Seriously Explainable AI laboratory in Penn State\'s college of IST. In it, you will be reading real statements extracted from Terms and Conditions documents. In section one, you will rate your understanding and perception of severity of these "cases". In section two, you will rewrite one of these cases in your own words.';
    const consent = "By clicking the 'Next' button, you are consenting to participating in this study and allowing data to be collected from your input.";
    const contact = "Should you have questions, you may contact *insert contact info*";

    //const [cases, setCases] = useState()

    /*useEffect(() => {
        fetch('/test').then(res => res.json()).then(data => {
            console.log(data.test);
            setTest(data.test);
        })
    }, []);*/

    /*useEffect(() => {
        fetch('/get_cases')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log(data.cases);
                setCases(data.cases);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);*/

    return (
        <main className="Content">
            <div className="card">
                <h5 className="card-header">Before you start:</h5>
                <div className="card-body">
                    <div className='card-section'>
                        <h2 className="card-heading"> Introduction </h2>
                        <p className="card-text">{studyIntro}</p>
                    </div>
                    <div className='card-section'>
                        <h2 className="card-heading"> Study Consent </h2>
                        <p className="card-text">{consent}</p>
                    </div>
                    <div className='card-section'>
                        <h2 className="card-heading"> Contact </h2>
                        <p className="card-text">{contact}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Introduction;