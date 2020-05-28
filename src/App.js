import axios from "axios";
import Cookie from "js-cookie";
import "antd/dist/antd.css";
import React, { useReducer, useEffect } from "react";
/* ---------------------------------- ***** --------------------------------- */
import GigContext from "./context/gigContext";
import InternshipContext from "./context/internshipContext";
import UserContext, { getUser } from "./context/userContext";
import UserReducer from "./reducer/userReducer";
import gigReducer from "./reducer/gigReducer";
import internshipReducer from "./reducer/internshipReducer";
import AppRouter from "./routes/router";

const App = () => {
  const [internship, internshipDispatch] = useReducer(internshipReducer, []);
  const [gig, gigDispatch] = useReducer(gigReducer, []);
  const [user, userDispatch] = useReducer(UserReducer, {});

  axios.defaults.baseURL = "https://pracify.com/testing/";
  const token = Cookie.get("token");
  axios.defaults.headers.common["token"] = token ? token : null;

  useEffect(() => {
    getUser(userDispatch);
  }, [userDispatch]);

  return (
    // <InternshipContext.Provider value={{ internship, internshipDispatch }}>
    //   <GigContext.Provider value={{ gig, gigDispatch }}>
    <UserContext.Provider value={{ user, userDispatch }}>
      <AppRouter />
    </UserContext.Provider>
    // </InternshipContext.Provider>
  );
};

export default App;
