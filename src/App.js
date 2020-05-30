import axios from "axios";
import Cookie from "js-cookie";
import "antd/dist/antd.css";
import React, { useReducer, useEffect } from "react";
/* ---------------------------------- ***** --------------------------------- */
import GigContext from "./context/gigContext";
import InternshipContext from "./context/internshipContext";
import UserContext, { getUser } from "./context/userContext";
import LoginContext from "./context/loginContext";
import UserReducer from "./reducer/userReducer";
import loginReducer from "./reducer/loginReducer";
import gigReducer from "./reducer/gigReducer";
import internshipReducer from "./reducer/internshipReducer";
import AppRouter from "./routes/router";

const App = () => {
  const [internship, internshipDispatch] = useReducer(internshipReducer, []);
  const [gig, gigDispatch] = useReducer(gigReducer, []);
  const [user, userDispatch] = useReducer(UserReducer, {});
  const [login, loginDispatch] = useReducer(loginReducer, {
    userToken: "",
    registrationRequired: false,
    loginError: "",
  });
  // const token = Cookie.get("token");
  // axios.defaults.headers.common["token"] = token ? token : null;

  axios.defaults.baseURL = "https://pracify.com/testing/";
  useEffect(() => {
    getUser(userDispatch);
  }, [userDispatch]);

  return (
    // <InternshipContext.Provider value={{ internship, internshipDispatch }}>
    //   <GigContext.Provider value={{ gig, gigDispatch }}>
    <LoginContext.Provider value={{ login, loginDispatch }}>
      <UserContext.Provider value={{ user, userDispatch }}>
        <AppRouter />
      </UserContext.Provider>
    </LoginContext.Provider>
    // </InternshipContext.Provider>
  );
};

export default App;
