import React, { useState } from 'react';

const Radio = ({ question_type }) => {

    // define selection variable using state
    const[rating, setRating] = useState("Not Selected")

    // on change handler to update users selection
    const onSelect = e => {
        setRating(e.target.value)
        console.log("Rating changed to: " + e.target.value + " for " + e.target.name)
    }

    var name;
    if (question_type === "a") {
        name = "understandability";
    } else {
        name = "severity";
    }
    return (
        <div className="radio-group">
            <div className="scale-labels">
                <h1>{ question_type==="a" ? "Extremely unclear" : "Extremely severe"}</h1>
                
                <h1 className="middle-label">{ question_type==="a" ? "Neither clear nor unclear" : "Indifferent"}</h1>
                
                <h1>{ question_type==="a" ? "Extremely clear" : "Not severe at all"}</h1>
            </div>

            
            <div className="radio-buttons">
                <label htmlFor="rating1">1<br />
                    <input onChange={onSelect} type="radio" id="rating1" name={ name } value="1" />
                </label>
                <label htmlFor="rating2">2<br />
                    <input onChange={onSelect} type="radio" id="rating2" name={ name } value="2" />
                </label>
                <label htmlFor="rating3">3<br />
                    <input onChange={onSelect} type="radio" id="rating3" name={ name } value="3" />
                </label>
                <label htmlFor="rating4">4<br />
                    <input onChange={onSelect} type="radio" id="rating4" name={ name } value="4" />
                </label>
                <label htmlFor="rating5">5<br />
                    <input onChange={onSelect} type="radio" id="rating1" name={ name } value="5" />
                </label>
                <label htmlFor="rating6">6<br />
                    <input onChange={onSelect} type="radio" id="rating6" name={ name } value="6" />
                </label>
                <label htmlFor="rating7">7<br />
                    <input onChange={onSelect} type="radio" id="rating7" name={ name } value="7" />
                </label>
                <label htmlFor="rating8">8<br />
                    <input onChange={onSelect} type="radio" id="rating8" name={ name } value="8" />
                </label>
                <label htmlFor="rating9">9<br />
                    <input onChange={onSelect} type="radio" id="rating9" name={ name } value="9" />
                </label>
                <label htmlFor="rating10">10<br />
                    <input onChange={onSelect} type="radio" id="rating10" name={ name } value="10" />
                </label>
            </div>
        </div>
    )
}

export default Radio;