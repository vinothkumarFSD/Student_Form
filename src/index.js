import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {batchName,alertSomething as customAlert,default as sample} from './functions';

import promptUsr,{questionUser} from './utils';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(batchName);
customAlert();
promptUsr();
questionUser('Are you sure');
sample();
root.render(
  <React.StrictMode>
    <div>B4445WETAMIL</div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
