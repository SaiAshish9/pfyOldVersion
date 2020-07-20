import React from "react";
import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import DesktopNavbar from "../components/beforeLogin/landingPage/components/desktop/Navbar";
import MobileNavbar from "../components/beforeLogin/landingPage/components/mobile/Navbar";
import Footer from "../components/beforeLogin/footer";
import { GigProvider } from "../store/gigStore";
import { InternshipProvider } from "../store/internshipStore";


const PublicRoute = ({ component: Component, path, ...rest }) => {
  const isToken = Cookies.get("token");
  const pathWithOutHeader = path === "/login" || path === "/";

  //we use path "/" (dashboard) because it is a special case
  const pathWithOutFooter =
    path === "/" ||
    path === "/login" ||
    path === "/career" ||
    path === "/partner-with-us"||
    path === "/terms"|| 
    path === "/about-us"||
    path === "/privacy-policy"||
    path === "/internships" ||
    path === "/gigs" ||
    path === "/gig/:id" ||
    path === "/contact-us" ||
    path === "/how-pracify-work"||
    path === "/internship/:id";

  const mediaSIze = useMediaQuery({
    query: "(min-width:600px)",
  });

  const header = mediaSIze ? <DesktopNavbar /> : <MobileNavbar />;

  return (
    <>
      {!isToken ? (
        <>
          {!pathWithOutHeader && header}
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
