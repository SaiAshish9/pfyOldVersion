import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "../../../node_modules/aos/dist/aos.css";
import DownloadAppContainer from "./downloadAppContainer";
import FooterContainer from "./footerContainer";
import FrontContainer from "./frontContainer";
import HIHcontainer from "./HIHcontainer";
import HIWcontainer from "./HIWcontainer";
import OpportunityContainer from "./opportunityContainer";

const OldLandingPage = () => {
  return (
    <div className="home-container">
      <Link to="/new_landing_page">
        <Button
          style={{
            position: "relative",
            height: 48,
            borderRadius: 24,
            left: "50%",
            background: "#000",
            color: "white",
            fontSize: "20px",
          }}
        >
          New Landing Page
        </Button>
      </Link>
      <FrontContainer></FrontContainer>
      <OpportunityContainer></OpportunityContainer>
      <HIWcontainer></HIWcontainer>
      <HIHcontainer></HIHcontainer>
      <DownloadAppContainer></DownloadAppContainer>
      <FooterContainer></FooterContainer>
    </div>
  );
};
export default OldLandingPage;
