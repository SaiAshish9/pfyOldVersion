/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Zoom from "react-reveal/Zoom";
import {
  MyBlockOne,
  MyBlockTwo,
  MyBlockThree,
  MyBlockFive,
  WhyItWorkStyled
} from "./homeStyled";
import whyItWorkImgOne from "./images/whyItWorkImgOne.svg";
import whyItWorkImgTwo from "./images/whyItWorkImgTwo.svg";
import whyItWorkImgThree from "./images/whyItWorkImgThree.svg";
import whyItWorkImgFour from "./images/whyItWorkImgFour.svg";

const mainHeading = {
  margin: "80px 0px 80px 66px",
  fontSize: "28px",
  lineHeight: "1.17",
  letterSpacing: ".3px",
  fontWeight: "700",
  fontFamily: "avenir, sans-serif"
};

const whyItWorkImg = {
  position: "relative",
  bottom: "68px",
  right: "18px"
};

const whyItWorkHeading = {
  fontSize: "26px",
  lineHeight: "1.26",
  letterSpacing: ".3px",
  fontWeight: "700",
  fontFamily: "avenir, sans-serif"
  // textAlign: "center"
};

const whyItWorkPara = {
  fontSize: "18px",
  lineHeight: "1.47",
  letterSpacing: ".1px",
  fontWeight: "100",
  fontFamily: "avenir, sans-serif",
  color: "#4f4f4f"
  // paddingRight: "160px"
};

const WhyItWork = () => {
  return (
    <WhyItWorkStyled>
      <div className="whyItWork-block">
        <MyBlockOne className="one"></MyBlockOne>
        <MyBlockThree className="two"></MyBlockThree>
        <MyBlockFive className="three"></MyBlockFive>
        <MyBlockThree className="four"></MyBlockThree>
        <MyBlockTwo className="five"></MyBlockTwo>
        <MyBlockThree className="six"></MyBlockThree>
        <MyBlockThree className="seven"></MyBlockThree>
        <MyBlockThree className="eight"></MyBlockThree>
        <MyBlockOne className="nine"></MyBlockOne>
        <MyBlockThree className="ten"></MyBlockThree>
        <MyBlockOne className="eleven"></MyBlockOne>
        <MyBlockThree className="twelve"></MyBlockThree>
        <MyBlockFive className="thirteen"></MyBlockFive>
        <h1 style={mainHeading}>Why it works</h1>
        <div className="whyItWork-container">
          <Zoom>
            <div className="whyItWork-item-one">
              <img
                src={whyItWorkImgOne}
                style={whyItWorkImg}
                className="whyItWork-img-two"
              ></img>
              <div className="header-para-one">
                <h1 style={whyItWorkHeading} className="whyItWork-heading-one">
                  Outcome Based Payout
                </h1>
                <p style={whyItWorkPara} className="">
                  Scaling your business doesn't have to be a costly affair.
                  Employing 1000's of workers in 100's of cities is a huge risk
                  as it doesn't provide any guarantee of work, we bill only on
                  deliverables not manpower.
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="whyItWork-item-two">
              <img
                src={whyItWorkImgTwo}
                style={whyItWorkImg}
                className="whyItWork-img-two"
              ></img>

              <div className="header-para-two">
                <h1 style={whyItWorkHeading} className="whyItWork-heading-two">
                  End to End Execution
                </h1>
                <p style={whyItWorkPara} className="">
                  From sourcing to completion of work, we provide end to end
                  execution to ensure delivery and quality of outcomes.
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="whyItWork-item-three">
              <img
                src={whyItWorkImgThree}
                style={whyItWorkImg}
                className="whyItWork-img-three"
              ></img>

              <div className="header-para-three">
                <h1
                  style={whyItWorkHeading}
                  className="whyItWork-heading-three"
                >
                  Pan India Execution
                </h1>
                <p style={whyItWorkPara} className="">
                  Scaling your business pan India has never been easier than
                  this. Our network of Gig workers across India ensure your
                  requirements are met without any difficulty.
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="whyItWork-item-four">
              <img
                src={whyItWorkImgFour}
                style={whyItWorkImg}
                className="whyItWork-img-four"
              ></img>

              <div className="header-para-four">
                <h1 style={whyItWorkHeading} className="whyItWork-heading-four">
                  Real Time Monitoring
                </h1>
                <p style={whyItWorkPara} className="">
                  Even after employing & managing 1000's of workers in 100's of
                  cities there is no props way to monitor the work on ground
                  with XYZ you can track work executed in real time.
                </p>
              </div>
            </div>
          </Zoom>
          </div>
          <p className="mainPara">Tech driven sourcing & management of workforce ensures speed & quality of work in a cost effective manner.</p>
      </div>
    </WhyItWorkStyled>
  );
};

export default WhyItWork;
