import React from "react";
import FAppleStoreIcon from "../../assets/img/landingPage/appleStoreIcon.svg";
import FCopyrightIcon from "../../assets/img/landingPage/FCopyrightIcon.svg";
import FGoogleStoreIcon from "../../assets/img/landingPage/googleStoreIcon.png";
import FHeartIcon from "../../assets/img/landingPage/FHeartIcon.svg";
import logo from "../../assets/img/logoDark.png";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import linkedIn from "../../assets/img/linkedin.svg";
import twitter from "../../assets/img/twitter.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
  return (
    <div className="footer-main-block">
      <div className="border-block">
        <div className="pracify-section">
          <div className="logo-block">
            <img src={logo} alt="" className="logoImg" />
          </div>
          <p className="pracify__para">
            Pracify helps companies scale using their network of on-demand
            workers comprising of India's college students & young adults.
          </p>
          <div className="download-pracify-block">
            <img
              src={FGoogleStoreIcon}
              alt=""
              className="google-playStore-icon"
            />
            <img
              src={FAppleStoreIcon}
              alt=""
              className="apple-playStore-icon"
            />
          </div>
        </div>
        <div className="link-main-block">
          <div className="company-block">
            <h3 className="footer__header">Company</h3>
            <Link to="/about_us">
              <p className="footer__link">About</p>
            </Link>
            <Link to="/how_pracify_work">
              <p className="footer__link">How It Works</p>
            </Link>
            <Link to="/career">
              <p className="footer__link">Careers</p>
            </Link>
          </div>
          <div className="get-in-touch-block">
            <h3 className="footer__header">Get In Touch</h3>
            <Link to="/contact_us">
              <p className="footer__link">Contact Us</p>
            </Link>
            <Link to="/partner_with_us">
              <p className="footer__link">College Festivals</p>
            </Link>
          </div>
          <div className="legal-block">
            <h3 className="footer__header">Legal</h3>
            <p className="footer__link">Terms & Conditions</p>
            <p className="footer__link">Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <p className="love__para">
          Made with <img src={FHeartIcon} alt="" className="love-icon" /> in
          India
        </p>
        <p className="copyright__para">
          Copyright{" "}
          <img src={FCopyrightIcon} alt="" className="copyright__icon" /> 2020
          Pracify. All Rights Reserved.
        </p>
        <div className="social-block">
          <img src={facebook} alt="" className="footer__link" />
          <img src={instagram} alt="" className="footer__link" />
          <img src={linkedIn} alt="" className="footer__link" />
          <img src={twitter} alt="" className="footer__link" />
        </div>
      </div>
    </div>
  );
}
