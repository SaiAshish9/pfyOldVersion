import Cookies from "js-cookie";
import React, { useReducer, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import PrivateHeader from "../components/header/privateHeader/privateHeader";
import { UserProvider } from "../store/userStore";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const isToken = Cookies.get("token");

  return (
    <>
      {isToken && <PrivateHeader />}
      <Route
        {...rest}
        component={(props) =>
          isToken ? (
            path === "/home" ? (
              <UserProvider>
                <Component {...props} />
              </UserProvider>
            ) : (
              <Component {...props} />
            )
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;

//   <UserContext.Provider value={{ user, dispatchUser }}>
// </UserContext.Provider>
