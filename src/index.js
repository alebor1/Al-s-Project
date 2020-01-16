import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Main';
import * as serviceWorker from './serviceWorker';
import './fonts/FuturaLT-Bold.ttf'
import './fonts/EBGaramond-Regular.ttf'
import './fonts/EBGaramond-Bold.ttf'
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(  <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
