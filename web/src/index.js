import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css'
import Routes from "./routes";
import {browserHistory} from "react-router";

ReactDOM.render(
    <Routes history={browserHistory}/>, document.getElementById('root')
);