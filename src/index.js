import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './container/login/Login';
import Dashboard from './container/dashboard/Dashboard'
import Exam from './container/exam/Exam';
import ExamFinish from './container/examFinish/ExamFinish';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode>
    <ExamFinish />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
