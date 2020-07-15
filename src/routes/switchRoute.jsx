import React from "react";
import { Route, Switch } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import AboutUs from "../components/beforeLogin/aboutUs/aboutUs";
import Career from "../components/beforeLogin/career/career";
import ContactUs from "../components/beforeLogin/contactUs/contactUs";
import HowItWork from "../components/beforeLogin/howItWork/howItWork";
import LandingPage from "../components/beforeLogin/landingPage/landingPage";
import PartnerWithPracify from "../components/beforeLogin/partnerWithPracify/partnerWithPracify";
import Gig from "../components/gig/gig";
import GigDetail from "../components/gig/gigDetails";
import Internship from "../components/internship/internship";
import InternshipDetail from "../components/internship/internshipDetail";
import Login from "../components/login/login";
import PageNotFound from "../components/pageNotFound";
import UserGig from "../components/userHome/userGig/userGig";
import UserHome from "../components/userHome/userHome/userHome";
import UserInternship from "../components/userHome/userIntership/userInternship.jsx";
import UserProfile from "../components/userHome/userProfile/userProfile.jsx";
import UserResume from "../components/userResume/userResume";
import Wallet from "../components/wallet/wallet";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Terms from "../components/beforeLogin/termsAndConditions";
import PrivacyPolicy from "../components/beforeLogin/privacyPolicy";

export default function SwitchRoute() {
  return (
    <Switch>
      <PublicRoute path="/" component={LandingPage} exact={true} />
      <PublicRoute path="/about_us" component={AboutUs} exact={true} />
      <PublicRoute path="/career" component={Career} exact={true} />
      <PublicRoute exact path="/terms" component={Terms} />
      <PublicRoute exact path="/privacy_policy" component={PrivacyPolicy} />
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
      <PublicRoute path="/gigs" component={Gig} exact={true} />
      <PublicRoute path="/gig/:id" component={GigDetail} exact={true} />
      <PublicRoute path="/internships" component={Internship} exact={true} />
      <PublicRoute
        path="/internship/:id"
        component={InternshipDetail}
        exact={true}
      />
      <PrivateRoute path="/relatedGigs" component={Gig} exact={true} />
      <PrivateRoute path="/relatedGig/:id" component={GigDetail} exact={true} />
      <PrivateRoute
        path="/relatedInternships"
        component={Internship}
        exact={true}
      />
      <PrivateRoute
        path="/relatedInternship/:id"
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
