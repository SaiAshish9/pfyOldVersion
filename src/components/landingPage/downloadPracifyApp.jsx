import { Button, Input } from "antd";
import React from "react";
import appleStoreIcon from "../../assets/img/landingPage/appleStoreIcon.png";
import googleStoreIcon from "../../assets/img/landingPage/googleStoreIcon.png";
import pracifyMockup from "../../assets/img/landingPage/pracifyMockup.gif";
export default function DownloadPracifyApp() {
  return (
    <div className="downloadPracifyApp-main-block">
      <div className="downloadPracifyApp-content-block">
        <h1 className="downloadPracifyApp-header">
          Your next gig is at your fingertips!
        </h1>
        <p className="downloadPracifyApp-para">
          Get the Pracify app and work for your favourite companies. Create your
          account within minutes and pick gigs which match your skills and
          interests.
          <br />
          <br />
          <span>Send the download link to your phone</span>
        </p>
        <div className="phone-input-block">
          <span className="country-code">+91</span>
          <Input placeholder="Your Phone" className="phone-input"></Input>
          <Button className="phone-button">Send</Button>
        </div>
        <div className="download-button-block">
          <img src={googleStoreIcon} alt="" className="google-icon" />
          <img src={appleStoreIcon} alt="" className="apple-icon" />
        </div>
      </div>
      <div className="phone-mockup-block">
        <img src={pracifyMockup} alt="" className="phone-mockup" />
      </div>
    </div>
  );
}
