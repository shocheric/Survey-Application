(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/lapel_shield.cdc13a14.png"},18:function(e,a,t){e.exports=t(29)},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),s=(t(27),t(3)),o=(t(28),t(17)),i=t.n(o),m=function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("img",{src:i.a,alt:"Logo",className:"img"}),r.a.createElement("div",{className:"header-text col"},r.a.createElement("h1",null,"SEA Laboratory"),r.a.createElement("h2",null,"Case Severity Study")))))},u=function(e){var a,t=Object(n.useState)("Not Selected"),l=Object(s.a)(t,2),c=(l[0],l[1]),o=function(a){c(a.target.value),console.log("Rating changed to: "+a.target.value+"\nFor: "+a.target.name+"\nQuestion: "+e.questionNumber)};return a="a"===e.question_type?"understandability":"severity",r.a.createElement("div",{className:"radio-group"},r.a.createElement("div",{className:"scale-labels"},r.a.createElement("h1",null,"a"===e.question_type?"Extremely unclear":"Extremely severe"),r.a.createElement("h1",{className:"middle-label"},"a"===e.question_type?"Neither clear nor unclear":"Indifferent"),r.a.createElement("h1",null,"a"===e.question_type?"Extremely clear":"Not severe at all")),r.a.createElement("div",{className:"radio-buttons"},r.a.createElement("label",{htmlFor:"rating1"},"1",r.a.createElement("br",null),r.a.createElement("input",{onChange:o,type:"radio",id:"rating1",name:a,value:"1"})),r.a.createElement("label",{htmlFor:"rating2"},"2",r.a.createElement("br",null),r.a.createElement("input",{onChange:o,type:"radio",id:"rating2",name:a,value:"2"})),r.a.createElement("label",{htmlFor:"rating3"},"3",r.a.createElement("br",null),r.a.createElement("input",{onChange:o,type:"radio",id:"rating3",name:a,value:"3"})),r.a.createElement("label",{htmlFor:"rating4"},"4",r.a.createElement("br",null),r.a.createElement("input",{onChange:o,type:"radio",id:"rating4",name:a,value:"4"})),r.a.createElement("label",{htmlFor:"rating5"},"5",r.a.createElement("br",null),r.a.createElement("input",{onChange:o,type:"radio",id:"rating1",name:a,value:"5"})),r.a.createElement("label",{htmlFor:"rating6"},"6",r.a.createElement("br",null),r.a.createElement("input",{onChange:o,type:"radio",id:"rating6",name:a,value:"6"})),r.a.createElement("label",{htmlFor:"rating7"},"7",r.a.createElement("br",null),r.a.createElement("input",{onChange:o,type:"radio",id:"rating7",name:a,value:"7"})),r.a.createElement("label",{htmlFor:"rating8"},"8",r.a.createElement("br",null),r.a.createElement("input",{onChange:o,type:"radio",id:"rating8",name:a,value:"8"})),r.a.createElement("label",{htmlFor:"rating9"},"9",r.a.createElement("br",null),r.a.createElement("input",{onChange:o,type:"radio",id:"rating9",name:a,value:"9"})),r.a.createElement("label",{htmlFor:"rating10"},"10",r.a.createElement("br",null),r.a.createElement("input",{onChange:o,type:"radio",id:"rating10",name:a,value:"10"}))))},d=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),l=t[0],c=t[1];return r.a.createElement("main",{className:"Content"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},"You will rate the understandability and severity of the following case:"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-text case"}," ",e.questionNumber+".   "," ",e.case?'"'+e.case+'"':"Loading..."," "),r.a.createElement("p",{className:"d-inline-flex gap-1"},r.a.createElement("a",{onClick:function(){var a=document.getElementById("bi-toggle-"+e.questionNumber);l?(a.style.transform="rotate(0deg)",c(!1)):(a.style.transform="rotate(90deg)",c(!0))},className:"btn btn-sm btn-light","data-bs-toggle":"collapse",href:"#collapseDescription-"+e.questionNumber,role:"button","aria-expanded":"false","aria-controls":"collapseDescription-"+e.questionNumber},"See Description",r.a.createElement("svg",{active:"false",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-caret-right-fill",viewBox:"0 0 16 16",id:"bi-toggle-"+e.questionNumber},r.a.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})))),r.a.createElement("div",{className:"collapse",id:"collapseDescription-"+e.questionNumber},r.a.createElement("div",{className:"card card-body"},e.caseDescription?e.caseDescription:"Loading...")),r.a.createElement("div",{className:"question-body"},r.a.createElement("h2",{className:"question"},"a. ","On a scale of 1-10, how well do you understand this statement?"," "),r.a.createElement(u,{question_type:"a",questionNumber:e.questionNumber}),r.a.createElement("h2",{className:"question"},"b. ","According to you, how would you rate the severity of this case? \n (1 being very critical and infringing the user's privacy and 10 being completely in favor of the user)"," "),r.a.createElement(u,{question_type:"b",questionNumber:e.questionNumber})))))},E=function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("p",null,"Department of IST @ PSU 2023"))},g=t(7),h=function(e){return r.a.createElement("button",{className:"btn btn-large btn-primary next-btn"},r.a.createElement(g.b,{to:e.route},"Next"))},p=t(1),b=function(e){return Object(n.useEffect)(function(){fetch("/log_time",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.count)}).then(function(e){if(!e.ok)throw new Error("Error logging time");return console.log("Time logged successfully"),fetch("/end_session")}).then(function(e){if(!e.ok)throw new Error("Error ending session");console.log("Session ended successfully")}).catch(function(e){console.error("Error",e)})},[]),r.a.createElement("main",{className:"Content"},r.a.createElement("div",{className:"card",id:"conclusion-card"},r.a.createElement("h5",{className:"card-header"},"Conclusion:"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-section"},r.a.createElement("h2",{className:"card-heading"}," Collecting Compensation"),r.a.createElement("h2",{className:"compensation-code"},"*Insert Code*"),r.a.createElement("p",{className:"card-text"},"Use this code on *website* to redeem your payment. Email *email* if you have issues.")),r.a.createElement("div",{className:"card-section"},r.a.createElement("h2",{className:"card-heading"}," ","Thank you for your participation!"," "),r.a.createElement("p",{className:"card-text"},"Your responses have been collected. You may now close this window.")))))},f=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),l=t[0],c=t[1];return r.a.createElement("main",{className:"Content"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},"You will rewrite the following case in your own words:"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-text case"}," ",e.case?'"'+e.case+'"':"Loading..."," "),r.a.createElement("p",{className:"d-inline-flex gap-1"},r.a.createElement("a",{onClick:function(){var e=document.getElementById("bi-toggle");l?(e.style.transform="rotate(0deg)",c(!1)):(e.style.transform="rotate(90deg)",c(!0))},className:"btn btn-sm btn-light","data-bs-toggle":"collapse",href:"#collapseDescription",role:"button","aria-expanded":"false","aria-controls":"collapseDescription"},"See Description",r.a.createElement("svg",{active:"false",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-caret-right-fill",viewBox:"0 0 16 16",id:"bi-toggle"},r.a.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})))),r.a.createElement("div",{className:"collapse",id:"collapseDescription"},r.a.createElement("div",{className:"card card-body"},e.description))),r.a.createElement("textarea",{className:"rewrite-area",name:"rewrite",id:"rewrite-area",placeholder:"Type your rewrite here..."}),r.a.createElement("h5",{className:"tip"},"click Next when you are done")))},y=function(){return r.a.createElement("main",{className:"Content"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},"Before you start:"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-section"},r.a.createElement("h2",{className:"card-heading"}," Introduction "),r.a.createElement("p",{className:"card-text"},'This survey is part of a study being run by the Seriously Explainable AI laboratory in Penn State\'s college of IST. In it, you will be reading real statements extracted from Terms and Conditions documents. In section one, you will rate your understanding and perception of severity of these "cases". In section two, you will rewrite one of these cases in your own words.')),r.a.createElement("div",{className:"card-section"},r.a.createElement("h2",{className:"card-heading"}," Study Consent "),r.a.createElement("p",{className:"card-text"},"By clicking the 'Next' button, you are consenting to participating in this study and allowing data to be collected from your input.")),r.a.createElement("div",{className:"card-section"},r.a.createElement("h2",{className:"card-heading"}," Contact "),r.a.createElement("p",{className:"card-text"},"Should you have questions, you may contact *insert contact info*")))))},N=function(e,a){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement("div",{className:"Body"},e,a&&r.a.createElement(h,{route:a})),r.a.createElement("div",{className:"Footer"},r.a.createElement(E,null)))};var v=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)(function(){var e=setInterval(function(){l(t+1),console.log(t)},1e3);return function(){return clearInterval(e)}},[t]);var c=JSON.parse(sessionStorage.getItem("cases"))||[],o=JSON.parse(sessionStorage.getItem("descriptions"))||[],i=JSON.parse(sessionStorage.getItem("rewrite"))||[],m=Object(n.useState)(c),u=Object(s.a)(m,2),E=u[0],g=u[1],h=Object(n.useState)(o),v=Object(s.a)(h,2),w=v[0],S=v[1],x=Object(n.useState)(i),O=Object(s.a)(x,2),C=O[0],j=O[1],q=Object(n.useState)(5),I=Object(s.a)(q,2),k=I[0],F=I[1];Object(n.useEffect)(function(){fetch("/get_cases").then(function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(function(e){console.log("Fetched Data: "+e.cases),sessionStorage.setItem("cases",JSON.stringify(e.cases)),sessionStorage.setItem("descriptions",JSON.stringify(e.descriptions)),sessionStorage.setItem("rewrite",JSON.stringify(e.rewrite)),g(e.cases),S(e.descriptions),j(e.rewrite),F(e.max_cases)}).catch(function(e){console.error("Error fetching data:",e)})},[]);var D=r.a.createElement(f,{case:C[0],description:C[1]}),_=r.a.createElement(y,null),T=r.a.createElement(b,{count:t}),J=[];if(E.length===k&&w.length===k)for(var B=0;B<k;B++){var L=r.a.createElement(d,{key:B,questionNumber:B+1,case:E[B],caseDescription:w[B]});J.push(L)}return r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",element:N(_,"/survey")}),r.a.createElement(p.a,{exact:!0,path:"/survey",element:N(J,"/rewrite")}),r.a.createElement(p.a,{exact:!0,path:"/rewrite",element:N(D,"/thankyou")}),r.a.createElement(p.a,{exact:!0,path:"/thankyou",element:N(T)}))};function w(){var e=Object(p.l)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[e]),null}c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,null,r.a.createElement(w,null),r.a.createElement(v,null))))}},[[18,1,2]]]);
//# sourceMappingURL=main.e10ff023.chunk.js.map