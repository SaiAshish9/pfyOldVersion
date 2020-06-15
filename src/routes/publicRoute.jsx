import React from "react";
import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/beforeLogin/footer";
import { GigProvider } from "../store/gigStore";
import { InternshipProvider } from "../store/internshipStore";

const PublicRoute = ({ component: Component, path, ...rest }) => {
  const isToken = Cookies.get("token");
  const pathWithOutHeader = path === "/login";

  //we use path "/" (dashboard) because it is a special case

  const pathWithOutFooter =
    path === "/" ||
    path === "/login" ||
    path === "/internships" ||
    path === "/gigs";

  console.log("pathWithOutFooter", pathWithOutFooter);

  return (
    <>
      {!isToken ? (
        <>
          {!pathWithOutHeader && <Header />}

          <Route
            {...rest}
            component={(props) => (
              <GigProvider>
                <InternshipProvider>
                  <Component {...props} />
                </InternshipProvider>
              </GigProvider>
            )}
          />
          {!pathWithOutFooter && <Footer />}
        </>
      ) : (
        <Redirect to="/home" />
      )}
    </>
  );
};

export default PublicRoute;
