import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./style/_style.scss";
import "circular-std"; 
import axios from 'axios';
import Cookie from 'js-cookie';

// import * as serviceWorker from './serviceWorker';
axios.defaults.baseURL = 'https://pracify.com/testing/';
// axios.defaults.headers.common['token'] = Cookie.get('token');
axios.defaults.headers.common['token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTZmNmM3NjM0MjJiNTZmODc3Mzg3OGMiLCJyZXN1bWUiOiI1ZTZmNmM3NjM0MjJiNTZmODc3Mzg3OGIiLCJpYXQiOjE1ODQzNjA1NjYsImV4cCI6MTU5MzAwMDU2Nn0.tbOs0uKlbj4cZ0-MGhoOWjqWqePNW842DuqdhuHsAvk";


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
