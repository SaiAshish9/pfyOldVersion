import "antd/dist/antd.css";
import React from "react";
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
