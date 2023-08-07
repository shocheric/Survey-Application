import React from 'react';

const Radio = ({ question_type }) => {
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
                <label for="rating1">1<br />
                    <input type="radio" id="rating1" name={ name } value="1" />
                </label>
                <label for="rating2">2<br />
                    <input type="radio" id="rating2" name={ name } value="2" />
                </label>
                <label for="rating3">3<br />
                    <input type="radio" id="rating3" name={ name } value="3" />
                </label>
                <label for="rating4">4<br />
                    <input type="radio" id="rating4" name={ name } value="4" />
                </label>
                <label for="rating5">5<br />
                    <input type="radio" id="rating1" name={ name } value="5" />
                </label>
                <label for="rating6">6<br />
                    <input type="radio" id="rating6" name={ name } value="6" />
                </label>
                <label for="rating7">7<br />
                    <input type="radio" id="rating7" name={ name } value="7" />
                </label>
                <label for="rating8">8<br />
                    <input type="radio" id="rating8" name={ name } value="8" />
                </label>
                <label for="rating9">9<br />
                    <input type="radio" id="rating9" name={ name } value="9" />
                </label>
                <label for="rating10">10<br />
                    <input type="radio" id="rating10" name={ name } value="10" />
                </label>
            </div>
        </div>
    )
}

export default Radio;