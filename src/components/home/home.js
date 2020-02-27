import React from "react";
import { Link } from "react-router-dom";

import { Icon, Input, Modal, Carousel, message, Divider } from "antd";

import FrontContainer from "./frontContainer";
import OpportunityContainer from "./opportunityContainer";
import HIWcontainer from "./HIWcontainer";
import HIHcontainer from "./HIHcontainer";
import DownloadAppContainer from "./downloadAppContainer";

import logo from "./img/logo.png";
import "../../../node_modules/aos/dist/aos.css";

const LandingPage = () => {
  return (
    <div className="home-container">
      <FrontContainer></FrontContainer>
      <OpportunityContainer></OpportunityContainer>
      <HIWcontainer></HIWcontainer>
      <HIHcontainer></HIHcontainer>
      <DownloadAppContainer></DownloadAppContainer>
      <div className="footer-container">
        <div className="footer-block">
          <img height={"100rem"} src={logo} />
          <div>
            <p className="footer-para">
              A-117, GD-ITL Northex Tower, <br /> Netaji Subhash Place,
              Pitampura, <br />
              New Delhi - 110034
              <br />
            </p>
          </div>
          <div className="contactUs-block">
            <div>
              <p className="contactUs-link">
                shivam@pracify.com
                <br />
                +91-9582033304
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="social-link-container">
          <p className="copyright__para">
            Copyright © 2020 Pracify All rights reserved.
          </p>
          <div className="social-link-text-container">
            <Link className="social__link">Facebook</Link>
            <Link className="social__link">Instagram</Link>
            <Link className="social__link">Twitter</Link>
            <Link className="social__link">LinkedIn</Link>
            <Link className="social__link" style={{ border: "none" }}>
              Contact Us
            </Link>
          </div>
        </div>
        <p
          style={{
            fontSize: "16px",
            textAlign: "center",
            marginBottom: "0px"
          }}
        >
          Made with{" "}
          <Icon type="heart" theme="filled" style={{ color: "Red" }} /> in India
          <br />
        </p>
      </div>
    </div>
  );
};
export default LandingPage;
