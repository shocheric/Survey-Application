import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import NextButton from './NextButton';
import {Route, Routes} from "react-router-dom";
import Thankyou from './Thankyou';
import Rewrite from './Rewrite';
import Introduction from './Introduction';
import React, {useState, useEffect} from 'react';


const surveyPage = (body, nextRoute) => (
  <div className="App">
        <Header />
      <div className='Body'>
        {body}
        {nextRoute && <NextButton route={nextRoute}/>}
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
)

function App() {

  // start count
  const [count, setCount] = useState(0);

  useEffect(() => {

    //Implement setInterval method
    const interval = setInterval(() => {
      setCount(count + 1);
      console.log(count);
    }, 1000);

    //Clearing interval
    return () => clearInterval(interval);
  }, [count]);


  // get values from session storage
  const initialCases = JSON.parse(sessionStorage.getItem('cases')) || [];
  const initialDescriptions = JSON.parse(sessionStorage.getItem('descriptions')) || [];
  const initialRewrite = JSON.parse(sessionStorage.getItem('rewrite')) || [];

  const [cases, setCases] = useState(initialCases)
  const [descriptions, setDescriptions] = useState(initialDescriptions);
  const [rewrite, setRewrite] = useState(initialRewrite);
  const [maxCases, setMaxCases] = useState(5);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('/get_cases', {signal: abortController.signal})
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log('Fetched Data: ' + data.cases);
            sessionStorage.setItem('cases', JSON.stringify(data.cases));
            sessionStorage.setItem('descriptions', JSON.stringify(data.descriptions));
            sessionStorage.setItem('rewrite', JSON.stringify(data.rewrite));

            setCases(data.cases);
            setDescriptions(data.descriptions);
            setRewrite(data.rewrite);
            setMaxCases(data.max_cases);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        return () => abortController.abort();
  }, []);


  // Set pages and pass props to them
  const rewriteComponent = <Rewrite case={rewrite[0]} description={rewrite[1]} />;
  const boiler = <Introduction />
  const thankyou = <Thankyou count={count}/>
  const caseComponents = [];

  // Method for incrementing caseCount
  const [caseCount, setCaseCount] = useState(0)
  const nextCase = () => {
    setCaseCount(caseCount+1)
    console.log(caseCount)
  }
  
  if (cases.length === maxCases && descriptions.length === maxCases) {
    for (let i=0; i<maxCases; i++) {
      let newCase = <Content key={i} questionNumber={i+1} case={cases[i]} caseDescription={descriptions[i]} maxCases={maxCases} nextCase={nextCase}/>;
      caseComponents.push(newCase);
    }
  }


  return <Routes>
    <Route exact path="/" element={surveyPage(boiler, "/survey")} />
    <Route exact path="/survey" element={surveyPage(caseComponents[caseCount])} />
    <Route exact path="/rewrite" element={surveyPage(rewriteComponent, "/thankyou")} />
    <Route exact path="/thankyou" element={surveyPage(thankyou)} />
  </Routes>
}

export default App;
