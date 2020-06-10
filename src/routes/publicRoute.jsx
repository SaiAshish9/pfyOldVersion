import React from "react";
import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/header/header";

const PublicRoute = ({ component: Component, ...rest }) => {
  const isToken = Cookies.get("token");
  return (
    <>
      {!isToken && <Header />}
      <Route
        {...rest}
        component={(props) =>
          isToken ? (
            <Redirect to="/home" />
          ) : (
            <>
              <Component {...props} />
            </>
          )
        }
      />
    </>
  );
};

export default PublicRoute;
