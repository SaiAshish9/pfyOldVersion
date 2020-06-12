import React from "react";
import Hero from "./hero";
import DownloadPracifyApp from "./downloadPracifyApp";
import KeepSimple from "./keepSimple";
import WorkRemotely from "./workRemotely";
import Footer from "../footer";

export default function LandingPage() {
  return (
    <div className="landingPage-main-block">
      <Hero />
      <KeepSimple />
      <WorkRemotely />
      <DownloadPracifyApp />
      <Footer />
    </div>
  );
}
