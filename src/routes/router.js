import { createBrowserHistory } from "history";
import Cookies from "js-cookie";
import React, { useState, useEffect, useContext } from "react";
import { Router } from "react-router-dom";
import Header from "../components/header/header";
import PrivateHeader from "../components/header/privateHeader/privateHeader";
import SwitchRoute from "./switchRoute";
import LoginContext from "../context/loginContext";

const history = createBrowserHistory();

const AppRouter = () => {
  const knowState = Cookies.get("state");
  const [checkStateUpdate, setCheckStateUpdate] = useState(knowState);

  useEffect(() => {
    setCheckStateUpdate(checkStateUpdate + 1);
    Cookies.set("state", checkStateUpdate);
    console.log("checkStateUpdate", checkStateUpdate);
  }, []);

  return (
    <Router history={history}>
      <SwitchRoute />
    </Router>
  );
};

export default AppRouter;
