import React, {useEffect, useState} from 'react';


const GetCases = () => {

const [lines, setLines] = useState()
const [descriptions, setDescriptions] = useState()
const case_def =[]

// API calls to get cases and definitions
useEffect(() => {
  fetch('/get_cases')
      .then(res => {
          if (!res.ok) {
              throw new Error('Network response was not ok');
          }
          return res.json();
      })
      .then(data => {
          setLines(data.cases);
          setDescriptions(data.descriptions);
          case_def.append(lines)
          case_def.append(descriptions)
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}, []);
return case_def
}

export default GetCases
