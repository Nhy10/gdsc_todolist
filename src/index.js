import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App'; // ./는 같은(현재) 경로에 있는!
import reportWebVitals from './reportWebVitals';
import Hello from "./Hello";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //root라는 곳에 아래의 컴포넌트들을 그릴거야! 라고 이해하면 됨.
  <React.StrictMode>
    <App /> //App컴포넌트(html파일)
    <Hello /> //Hello컴포넌트(html파일)
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
