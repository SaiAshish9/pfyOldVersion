import { createBrowserHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import SwitchRoute from "./switchRoute";

const history = createBrowserHistory();
const AppRouter = () => {
  return (
    <Router history={history}>
      <SwitchRoute />
    </Router>
  );
};

export default AppRouter;
