import "antd/dist/antd.css";
import React, { useReducer } from "react";
import LoginContext from "./context/loginContext";
import gigReducer from "./reducer/gigReducer";
import internshipReducer from "./reducer/internshipReducer";
import loginReducer from "./reducer/loginReducer";
import AppRouter from "./routes/router";
import { LoginProvider } from "./store/loginStore";

const App = () => {
  return (
    <LoginProvider>
      <AppRouter />
    </LoginProvider>
  );
};
export default App;
