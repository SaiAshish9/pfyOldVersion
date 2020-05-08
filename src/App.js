import "antd/dist/antd.css";
import React, { useReducer } from "react";
/* ---------------------------------- ***** --------------------------------- */
import GigContext from "./context/gigContext";
import InternshipContext from "./context/internshipContext";
import gigReducer from "./reducer/gigReducer";
import internshipReducer from "./reducer/internshipReducer";
import AppRouter from "./routes/router";

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
