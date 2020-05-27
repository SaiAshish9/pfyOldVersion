import React from "react";
import Cookies from "js-cookie";
import { Route, Redirect, useLocation } from "react-router-dom";
import Header from "../components/header/header";

const PublicRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const pathWithoutHeader = location.pathname === "/login";

  const isToken = Cookies.get("token");
  return (
    <Route
      {...rest}
      component={(props) =>
        isToken ? (
          <Redirect to="/home" />
        ) : (
          <>
            {!pathWithoutHeader && <Header />}
            <Component {...props} />
          </>
        )
      }
    />
  );
};

export default PublicRoute;
