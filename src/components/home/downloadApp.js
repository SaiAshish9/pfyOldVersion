/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
import Fade from "react-reveal";
import { DownloadAppStyled } from "./homeStyled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phoneImage from "./images/phone.png";
import playstoreIcon from "./images/playstore.png";

const mainHeading = {
  fontSize: "38px",
  lineHeight: "46px",
  letterSpacing: ".3px",
  fontWeight: "700",
  fontFamily: "avenir, sans-serif",
  // marginBottom:"80px"
  color: "#333743",
  marginLeft: "32px"
};

const para = {
  fontFamily: "avenir, sans-serif",
  color: "#4a4a4a"
};
const DownloadApp = () => {
  return (
    <DownloadAppStyled>
      <div className="block-content">
        <h1 className="downloadApp-heading">
          Come Work For Your
          <br /> Favourite Companies <br /> on #Pracify
          <br />
        </h1>
        <p className="downloadApp-para">
          Download the Pracify app and start earning today!
        </p>
        <img style={{ width: "180px" }} src={playstoreIcon}></img>
      </div>
      <div className="downloadApp-img-block">
        <img className="downloadApp-img" src={phoneImage}></img>
      </div>
    </DownloadAppStyled>
  );
};

export default DownloadApp;
