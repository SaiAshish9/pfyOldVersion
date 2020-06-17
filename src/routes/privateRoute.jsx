import Cookies from "js-cookie";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import PrivateHeader from "../components/header/privateHeader/privateHeader";
import { GigProvider } from "../store/gigStore";
import { InternshipProvider } from "../store/internshipStore";
import { NotificationProvider } from "../store/notificationStore";
import { UserProvider } from "../store/userStore";
import { UserProfileProvider } from "../store/userProfileStore";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isToken = Cookies.get("token");
  return (
    <>
      {isToken ? (
        <>
          <UserProvider>
            <UserProfileProvider>
              <NotificationProvider>
                <PrivateHeader />
                <Route
                  {...rest}
                  component={(props) => {
                    return (
                      <GigProvider>
                        <InternshipProvider>
                          <Component {...props} />{" "}
                        </InternshipProvider>
                      </GigProvider>
                    );
                  }}
                />
              </NotificationProvider>
            </UserProfileProvider>
          </UserProvider>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default PrivateRoute;
