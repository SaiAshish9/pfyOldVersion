import React, { useEffect, useReducer } from "react";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import UserHome from "../components/userHome/userHome/userHome";
import UserInternship from "../components/userHome/userIntership/userInternship.jsx";
import UserGig from "../components/userHome/userGig/userGig";
import UserProfile from "../components/userHome/userProfile/userProfile.jsx";
import UserResume from "../components/userResume/userResume";
import Wallet from "../components/wallet/wallet";

import LandingPage from "../components/home/home";
import GetStarted from "../components/getStarted/getStarted";
import AboutUs from "../components/aboutUs/aboutUs";
import Faqs from "../components/faqs/faqs";
import GetInContact from "../components/getInContact/getInContact";
import PageNotFound from "../components/pageNotFound";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";
import CommonRoute from "./commonRoute";

import Gig from "../components/gig/gig";
import Internship from "../components/internship/internship";
import GigDetail from "../components/gig/gigDetails";
import InternshipDetail from "../components/internship/internshipDetail";

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PublicRoute path="/get-started" component={GetStarted} exact={true} />
        <PublicRoute path="/about-us" component={AboutUs} exact={true} />
        <PublicRoute path="/faqs" component={Faqs} exact={true} />
        <PublicRoute
          path="/get-in-contact"
          component={GetInContact}
          exact={true}
        />

        <CommonRoute path="/gigs" component={Gig} exact={true} />
        <CommonRoute path="/gig/:id" component={GigDetail} exact={true} />
        <CommonRoute path="/internships" component={Internship} exact={true} />
        <CommonRoute
          path="/internship/:id"
          component={InternshipDetail}
          exact={true}
        />
 
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
    </Router>
  );
};

export default AppRouter;
