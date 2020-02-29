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

  return (
    <InternshipContext.Provider value={{ internship, internshipDispatch }}>
      <GigContext.Provider value={{ gig, gigDispatch }}>
        <AppRouter />
      </GigContext.Provider>
    </InternshipContext.Provider>
  );
};

export default App;
