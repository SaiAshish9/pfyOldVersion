/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Icon } from "antd";
import { FooterStyled } from "./homeStyled";
import twitterIcon from "./images/footerTwitterIcon.svg";
import facebookIcon from "./images/footerFacebookIcon.svg";
import instagramIcon from "./images/footerInstagramIcon.svg";
import linkedInIcon from "./images/footerLinkedinIcon.svg";

const footerHeading = {
  fontSize: "28px",
  lineHeight: "1.17",
  letterSpacing: ".3px",
  fontWeight: "700",
  fontFamily: "avenir, sans-serif"
};
const footerPara = {
  fontFamily: "avenir, sans-serif",
  color: "#4a4a4a",
  fontSize:"16px"
};

const myIcon = {
  width: "24px",
  marginLeft: "14px"
};

const contactUsLink = {
  fontFamily: "avenir, sans-serif",
  color: "#4a4a4a",
  textAlign: "center",
  fontSize:"16px"
};

const Footer = () => {
  return (
    <FooterStyled>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "40px 0px"
        }}
      >
        <div>
          <h2 style={footerHeading}>Our Home</h2>
          <p style={footerPara}>
            A-117, GD-ITL Northex Tower, <br />
            Netaji Subhash Place,
            <br />
            Pitampura, New Delhi - 110034
            <br />
          </p>
        </div>
        <div style={{}}>
          <h2 style={footerHeading}>About Pracify</h2>
          <p style={footerPara}>
            Pracify is a microjob platform connecting gig workers and companies
            <br /> across India.Companies achieve their business goals by
            onboarding a,
            <br />
            distributed workforce comprising of India's youth.
          </p>
        </div>
        <div>
          <h2 style={footerHeading}>Get In Touch</h2>
          <div style={{}}>
            <img src={facebookIcon} style={myIcon}></img>
            <img src={instagramIcon} style={myIcon}></img>
            <img src={twitterIcon} style={myIcon}></img>
            <img src={linkedInIcon} style={myIcon}></img>
          </div>
          <br />
          <p style={contactUsLink}>Contact Us</p>
        </div>
      </div>
      <p
        style={{
          fontFamily: "avenir, sans-serif",
          fontSize: "16px",
          textAlign: "center"
        }}
      >Made with <Icon type="heart" theme="filled" style= {{color:"Red"}}/> in India.<br/>
        Copyright © 2020 Pracify All rights reserved.
      </p>
    </FooterStyled>
  );
};

export default Footer;
