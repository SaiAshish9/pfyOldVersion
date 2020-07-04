import React, { Suspense, Fragment, lazy } from "react";
const Navbar = lazy(() => import("../../components/desktop/Navbar"));
const GetStarted = lazy(() => import("../../components/desktop/GetStarted"));
const Footer = lazy(() => import("../../components/desktop/Footer"));
const JoinUs = lazy(() => import("../../components/desktop/JoinUs"));
const Badges = lazy(() => import("../../components/desktop/Badges"));
const Experience = lazy(() => import("../../components/desktop/Experience"));
const Tasks = lazy(() => import("../../components/desktop/Tasks"));
const Section3 = lazy(() => import("../../components/desktop/Section3"));
const Section1 = lazy(() => import("../../components/desktop/Section1"));

const Desktop = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Fragment>
        <Navbar />
        <GetStarted />
        <Section1 />
        <Tasks />
        <Section3 />
        <Experience />
        <Badges />
        <JoinUs />
        <Footer />
      </Fragment>
    </Suspense>
  );
};

export default Desktop;
