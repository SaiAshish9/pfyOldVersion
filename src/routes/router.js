import React from "react";
import {Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from '../components/header/header';
import Home from '../components/home/home';
import GetStarted from '../components/getStarted/getStarted';
import AboutUs from '../components/aboutUs/aboutUs';
import Faqs from '../components/faqs/faqs';
import GetInContact from '../components/getInContact/getInContact';

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
    <Header/>
      <Switch>
        <Route path="/"  component={Home} exact={true}/>
        <Route path="/get-started"  component={GetStarted}  exact={true}/>
        <Route path="/about-us"  component={AboutUs} exact={true} />
        <Route path="/faqs"  component={Faqs}  exact={true}/>
        <Route path="/get-in-contact"  component={GetInContact}  exact={true}/>
      </Switch>
    </Router>
  );
};

export default AppRouter
