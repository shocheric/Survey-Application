import React, { useEffect } from 'react';

const Thankyou = (props) => {
    const thanks = "Thank you for your participation!";
    const compensationCode = "*Insert Code*";
    const compensationDirections = "Use this code on *website* to redeem your payment. Email *email* if you have issues.";
    const sendoff = "Your responses have been collected. You may now close this window."


    useEffect(() => {
        // Call log_time route to insert time into a csv and end_session route to stop the user's session
        fetch("/log_time", {
            method: "POST",
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(props.count)
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Error logging time');
                }
                console.log("Time logged successfully");

                return fetch('/end_session')
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error ending session");
                }
                console.log("Session ended successfully")
            })
            .catch(error => {
                console.error('Error', error)
            });
        }, []);

    return (
        <main className="Content">
            <div className="card" id="conclusion-card">
                <h5 className="card-header">Conclusion:</h5>
                <div className="card-body">
                    <div className='card-section'>
                        <h2 className="card-heading"> Collecting Compensation</h2>
                        <h2 className='compensation-code'>{compensationCode}</h2>
                        <p className="card-text">{compensationDirections}</p>
                    </div>
                    <div className='card-section'>
                        <h2 className="card-heading"> {thanks} </h2>
                        <p className="card-text">{sendoff}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Thankyou;