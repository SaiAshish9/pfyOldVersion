/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Icon } from "antd";
import { FooterStyled } from "./homeStyled";
import logo from './images/logo.png'
import twitterIcon from "./images/footerTwitterIcon.svg";
import facebookIcon from "./images/footerFacebookIcon.svg";
import instagramIcon from "./images/footerInstagramIcon.svg";
import linkedInIcon from "./images/footerLinkedinIcon.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-block">
        <div>
          <img height={"100rem"} src={logo}/>
          {/* <h2 className="footer-heading">Pracify</h2> */}
          <p className="footer-para">
            A-117, GD-ITL Northex Tower, <br />
            Netaji Subhash Place,
            <br />
            Pitampura, New Delhi - 110034
            <br />
          </p>
        </div>
        <div>
          <h2 className="footer-heading">About Pracify</h2>
          <p className="footer-para">
            Pracify is a microjob platform connecting gig workers and companies
            <br /> across India.Companies achieve their business goals by
            onboarding a,
            <br />
            distributed workforce comprising of India's youth.
          </p>
        </div>
        <div className="contactUs-block">
          <h2 className="footer-heading">Get In Touch</h2>
          <div>
            <img src={facebookIcon} className="my-icon-one"></img>
            <img src={instagramIcon} className="my-icon"></img>
            <img src={twitterIcon} className="my-icon"></img>
            <img src={linkedInIcon} className="my-icon"></img>
            <br />
            <br />
            <p className="contactUs-link">Contact Us</p>
          </div>
        </div>
      </div>
      <p
        style={{
          fontFamily: "avenir, sans-serif",
          fontSize: "16px",
          textAlign: "center"
        }}
      >
        Made with <Icon type="heart" theme="filled" style={{ color: "Red" }} />{" "}
        in India.
        <br />
        Copyright © 2020 Pracify All rights reserved.
      </p>
    </FooterStyled>
  );
};

export default Footer;
