import "circular-std";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
/* ---------------------------------- ***** --------------------------------- */
import App from "./App";
import "./index.css";
import "./style/_style.scss";
axios.defaults.baseURL = "https://pracify.com/testing/";
ReactDOM.render(<App />, document.getElementById("root"));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
