import "antd/dist/antd.css";
import React, { useReducer } from "react";
import LoginContext from "./context/loginContext";
import gigReducer from "./reducer/gigReducer";
import internshipReducer from "./reducer/internshipReducer";
import loginReducer from "./reducer/loginReducer";
import AppRouter from "./routes/router";

const App = () => {
  const [internship, internshipDispatch] = useReducer(internshipReducer, []);
  const [gig, gigDispatch] = useReducer(gigReducer, []);
  const [login, loginDispatch] = useReducer(loginReducer, {
    userToken: "",
    loginError: "",
  });

  return (
    <LoginContext.Provider value={{ login, loginDispatch }}>
        <AppRouter />
    </LoginContext.Provider>
  );
};

export default App;
