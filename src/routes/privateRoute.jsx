import Cookies from "js-cookie";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import PrivateHeader from "../components/header/privateHeader/privateHeader";
import { UserProvider } from "../store/userStore";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isToken = Cookies.get("token");

  return (
    <>
      {isToken ? (
        <>
          <PrivateHeader />
          <Route
            {...rest}
            component={(props) => (
              <UserProvider>
                <Component {...props} />
              </UserProvider>
            )}
          />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default PrivateRoute;
