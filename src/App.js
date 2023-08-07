import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import NextButton from './NextButton';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import React from 'react';
import Thankyou from './Thankyou';
import Rewrite from './Rewrite';
import Introduction from './Introduction';


const lines = [
    "This service is only available to users over a certain age",
    "You agree to defend, indemnify, and hold the service harmless in case of a claim related to your use of the service",
    "This service assumes no liability for any losses or damages resulting from any matter relating to the service",
    "Invalidity of any portion of the Terms of Service does not entail invalidity of its remainder",
    "Failure to enforce any provision of the Terms of Service does not constitute a waiver of such provision",
    "This service is only available for use individually and non-commercially.",
    "This service assumes no responsibility and liability for the contents of links to other websites",
    "Any liability on behalf of the service is only limited to the fees you paid as a user",
    "You have a reduced time period to take legal action against the service",
    "Other applicable rules, terms, conditions or guidelines",
];
const descriptions = [
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
];

const max_cases = 8;

// selects the five random cases and also one random case to pass as props to survey page and rewrite page
const selectCases = (lines) => {
  const cases = [];
  const used = [];
  let i = 0;

  while (i < max_cases) {
    let randInt = Math.floor(Math.random() * lines.length);
    if (!used.includes(randInt)) {
      cases.push(<Content case={lines[randInt]} description={descriptions[randInt]} question_number={i+1}/>);
      used.push(randInt);
      i++;
    }
  }

  let randInt = Math.floor(Math.random() * cases.length);
  const rewriteCase = cases[randInt].props.case;
  const rewriteDescription = cases[randInt].props.description;
  const caseCollection = [cases, rewriteCase, rewriteDescription];

  return caseCollection
};

const [cases, rewriteCase, rewriteDescription] = selectCases(lines);

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

const reWrite = <Rewrite case={rewriteCase} description={rewriteDescription} />;
const boiler = <Introduction />
const thankyou = <Thankyou />

function App() {
  return <Routes>
    <Route path="/" element={surveyPage(boiler, "/survey")} />
    <Route path="/survey" element={surveyPage(cases, "/rewrite")} />
    <Route path="/rewrite" element={surveyPage(reWrite, "/thankyou")} />
    <Route path="/thankyou" element={surveyPage(thankyou)} />
  </Routes>
}

export default App;
