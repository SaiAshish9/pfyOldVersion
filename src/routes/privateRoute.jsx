import React from "react";
import { Route, Router, Redirect, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import PrivateHeader from "../components/header/privateHeader/privateHeader";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isToken = Cookies.get("token");
  return (
    <>
      {<PrivateHeader />}
      <Route
        {...rest}
        component={(props) =>
          isToken ? (
            <>
              <Component {...props} />
            </>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
