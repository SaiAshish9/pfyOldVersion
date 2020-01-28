import React from "react";
import { Route } from "react-router-dom";
import Cookies from "js-cookie";
import PrivateHeader from "../components/header/privateHeader/privateHeader";
import Header from "../components/header/header"


const CommonRoute = ({ component: Component, ...rest }) => {
  const isToken = Cookies.get("token");
  return (
        <Route
          {...rest}
          component={props =>
            isToken ? (
              <div>
                <div>
                  <PrivateHeader />
                  <Component {...props} />
                </div>
              </div>
            ) : (
                <div>
                <Header />
                <Component {...props} />
              </div>
            )
          }
        />
  );
};

export default CommonRoute;            