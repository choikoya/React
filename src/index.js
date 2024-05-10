import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //link 안쓰고 import로 바로 연결가능
import App from './App'; //App.js를 import할건데 App이란 이름으로 태그처럼 씀
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //리액트 가상돔에 root를 만들고 시작
root.render( //node에 다는게 렌더링> div에 App들어감
  // <React.StrictMode> //App만 나오게 주석처리
    <App /> 
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); //성능평가
