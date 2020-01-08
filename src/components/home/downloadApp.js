/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
import Fade from "react-reveal";
import { DownloadAppStyled } from "./homeStyled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phoneImage from "./images/phone.png";

const mainHeading = {
  fontSize: "28px",
  lineHeight: "1.17",
  letterSpacing: ".3px",
  fontWeight: "700",
  fontFamily: "avenir, sans-serif"
  // marginBottom:"80px"
};

const para = {
  fontFamily: "avenir, sans-serif",
  color: "#4a4a4a"
}
const DownloadApp = () => {
  return (
    <DownloadAppStyled>
      <div className="block-content">
        <h1 style={mainHeading}>
          Come Earn with <br />
          India’s #1 Work <br />
          Platform <br />
        </h1>
        <p style={para}>Download the Awign app and start earning today!</p>
      </div>

      <div>
        <img src={phoneImage}></img>
      </div>
    </DownloadAppStyled>
  );
};

export default DownloadApp;
