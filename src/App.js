import React, { useEffect, useReducer } from "react";
import AppRouter from "./routes/router";

import axios from "axios";

import internshipReducer from "./reducer/internshipReducer";
import InternshipContext from "./context/internshipContext";

import gigReducer from "./reducer/gigReducer";
import GigContext from "./context/gigContext";

import Dashboard from "./components/dashboard/dashboard";
import Internship from "./components/internship/internship";
import Gig from "./components/gig/gig";
import UserInternship from "./components/internship/userInternship";
import "antd/dist/antd.css";

const App = () => {
  const [internship, internshipDispatch] = useReducer(internshipReducer, []);
  const [gig, gigDispatch] = useReducer(gigReducer, []);

  useEffect(() => {
    axios
      .get("http://35.154.129.241:5000/internship/fetch")
      .then(function(response) {
        // handle success
        const internshipData = response.data.internships;
        internshipDispatch({ type: "MY_INTERNSHIP", internshipData });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://35.154.129.241:5000/mission/fetch")
      .then(function(response) {
        // handle success
        const gigData = response.data.missions;
        gigDispatch({ type: "MY_GIG", gigData });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }, []);

  useEffect(() => {
    console.log(internship);
  }, [internship]);

  // useEffect(() => {
  //   console.log(gig);
  // }, [gig]);

  return (
    <InternshipContext.Provider value={{ internship, internshipDispatch }}>
      <GigContext.Provider value={{ gig, gigDispatch }}>
        <AppRouter />
      </GigContext.Provider>
    </InternshipContext.Provider>
  );
};

export default App;
