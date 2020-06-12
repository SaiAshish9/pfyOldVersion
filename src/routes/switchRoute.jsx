import React from "react";
import { Route, Switch } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import AboutUs from "../components/beforeLogin/aboutUs/aboutUs";
import Career from "../components/beforeLogin/career/career";
import Gig from "../components/gig/gig";
import GigDetail from "../components/gig/gigDetails";
import HowItWork from "../components/beforeLogin/howItWork/howItWork";
import Internship from "../components/internship/internship";
import InternshipDetail from "../components/internship/internshipDetail";
import LandingPage from "../components/beforeLogin/landingPage/landingPage";
import ContactUs from "../components/beforeLogin/contactUs/contactUs";
import Login from "../components/login/login";
import PageNotFound from "../components/pageNotFound";
import PartnerWithPracify from "../components/beforeLogin/partnerWithPracify/partnerWithPracify";
import UserGig from "../components/userHome/userGig/userGig";
import UserHome from "../components/userHome/userHome/userHome";
import UserInternship from "../components/userHome/userIntership/userInternship.jsx";
import UserProfile from "../components/userHome/userProfile/userProfile.jsx";
import UserResume from "../components/userResume/userResume";
import Wallet from "../components/wallet/wallet";
import CommonRoute from "./commonRoute";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

export default function SwitchRoute() {
  return (
    <Switch>
      <PublicRoute path="/" component={LandingPage} exact={true} />
      <PublicRoute path="/about_us" component={AboutUs} exact={true} />
      <PublicRoute path="/career" component={Career} exact={true} />
      <PublicRoute
        path="/how_pracify_work"
        component={HowItWork}
        exact={true}
      />
      <PublicRoute
        path="/partner_with_us"
        component={PartnerWithPracify}
        exact={true}
      />
      <PublicRoute
        path="/contact_us"
        component={ContactUs}
        exact={true}
      ></PublicRoute>
      <PublicRoute path="/login" component={Login} exact={true} />

      {/* //! ---------------------------------- common Route --------------------------------- */}
      <CommonRoute path="/gigs" component={Gig} exact={true} />
      <CommonRoute path="/gig/:id" component={GigDetail} exact={true} />
      <CommonRoute path="/internships" component={Internship} exact={true} />
      <CommonRoute
        path="/internship/:id"
        component={InternshipDetail}
        exact={true}
      />
      {/* //!  ------------------------------------------ */}

      <PrivateRoute path="/home" component={UserHome} exact={true} />
      <PrivateRoute
        path="/my-internships"
        component={UserInternship}
        exact={true}
      />
      <PrivateRoute path="/my-gigs" component={UserGig} exact={true} />
      <PrivateRoute path="/profile" component={UserProfile} exact={true} />
      <PrivateRoute path="/resume" component={UserResume} exact={true} />
      <PrivateRoute path="/wallet" component={Wallet} exact={true} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
