import React from "react";

import { Icon, Input, Modal, Carousel, message, Divider } from "antd";

import FrontContainer from "./frontContainer";
import OpportunityContainer from "./opportunityContainer";
import HIWcontainer from "./HIWcontainer";
import HIHcontainer from "./HIHcontainer";
import DownloadAppContainer from "./downloadAppContainer";
import FooterContainer from "./footerContainer";

import "../../../node_modules/aos/dist/aos.css";

const LandingPage = () => {
  return (
    <div className="home-container">
      <FrontContainer></FrontContainer>
      <OpportunityContainer></OpportunityContainer>
      <HIWcontainer></HIWcontainer>
      <HIHcontainer></HIHcontainer>
      <DownloadAppContainer></DownloadAppContainer>
      <FooterContainer></FooterContainer>
    </div>
  );
};
export default LandingPage;
