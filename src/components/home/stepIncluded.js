/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Icon } from "antd";
import {
  MyBlockOne,
  MyBlockTwo,
  MyBlockThree,
  MyBlockFour,
  StepIncludeStyled
} from "./homeStyled";
import Fade from "react-reveal/Fade";
import stepOneImg from "./images/stepOneImg.png";
import stepTwoImg from "./images/stepTwoImg.png";
import stepThreeImg from "./images/stepThreeImg.png";
import stepFourImg from "./images/stepFourImg.png";
// import { withTheme } from "styled-components";

const mainHeading = {
  margin: "0px 0px 80px 66px",
  fontSize: "28px",
  lineHeight: "1.17",
  letterSpacing: ".3px",
  fontWeight: "700",
  fontFamily: "avenir, sans-serif"
};

const stepHeading = {
  fontSize: "26px",
  lineHeight: "1.26",
  letterSpacing: ".3px",
  fontWeight: "700",
  fontFamily: "avenir, sans-serif"
  // textAlign: "center"
};
const stepPara = {
  fontSize: "18px",
  lineHeight: "1.47",
  letterSpacing: ".1px",
  fontWeight: "100",
  fontFamily: "avenir, sans-serif",
  color: "#4f4f4f"
  // textAlign: "center",
  // paddingRight: "160px"
};
const stepNumberIcon = {
  height: "60px",
  width: "60px",
  borderColor: "black",
  borderStyle: "solid",
  borderRadius: "60px",
  borderWidth: "2px 2px 2px 0px",
  position: "relative",
  right: "24px",
  bottom: "14px"
};
const stepNumber = {
  textAlign: "center",
  color: "white",
  fontSize: "36px"
};

const StepIncluded = ({ handleScrollTwo }) => {
  return (
    <StepIncludeStyled>
      <h1 style={mainHeading}>
        How it works in three
        <sub
          style={{
            position: "relative",
            color: "#9b9b9b",
            fontSize: "17px",
            bottom: "1px"
          }}
        >
          (ish)
        </sub>{" "}
        steps
      </h1>
      <Fade right>
        <div className="step-one-block">
          <MyBlockTwo className="one"></MyBlockTwo>
          <MyBlockOne className="two"></MyBlockOne>
          <MyBlockThree className="three"></MyBlockThree>
          <MyBlockFour className="four"></MyBlockFour>
          <MyBlockFour className="five"></MyBlockFour>
          <MyBlockTwo className="six"></MyBlockTwo>
          <MyBlockOne className="seven"></MyBlockOne>
          <MyBlockFour className="eight"></MyBlockFour>
          <MyBlockTwo className="nine"></MyBlockTwo>
          <MyBlockFour className="ten"></MyBlockFour>
          <MyBlockTwo className="eleven"></MyBlockTwo>
          <div className="step-one">
            <div className="step-one-content">
              <div style={stepNumberIcon} className="step-number-Icon-one">
                <h1 style={stepNumber}>1</h1>
              </div>
              <div className="heading-para-one">
                <h1 className="step-one-heading" style={stepHeading}>
                  Tell us what you need
                </h1>
                <p style={stepPara} className="step-one-para">
                  Submit your brief on our platform to tell us your requirement.
                  We understand your problem and requirements and propose
                  outcome based commercials. The requirements are converted into
                  tasks and are made live on the web/mobile app.
                </p>
              </div>
            </div>
          </div>
          <img src={stepOneImg} className="step-one-image" />
        </div>
      </Fade>
      <Fade left>
        <div className="step-two-block">
          <MyBlockFour className="one"></MyBlockFour>
          <MyBlockTwo className="two"></MyBlockTwo>
          <MyBlockTwo className="three"></MyBlockTwo>
          <MyBlockFour className="four"></MyBlockFour>
          <MyBlockTwo className="five"></MyBlockTwo>
          <MyBlockFour className="six"></MyBlockFour>
          <MyBlockOne className="seven"></MyBlockOne>
          <div className="step-two">
            <div className="step-two-content">
              <div style={stepNumberIcon} className="step-number-Icon-two">
                <h1 style={stepNumber}>2</h1>
              </div>
              <div className="heading-para-two">
                <h1 className="step-two-heading" style={stepHeading}>
                  Select gig workers
                </h1>
                <p style={stepPara} className="step-two-para">
                  Recruit gig workers easily by conducting virtual interviews &
                  screening their profiles. The selected workers chosen to
                  execute the work undergo rigorous training to ensure quality
                  of work.
                </p>
              </div>
            </div>
          </div>
          <img src={stepTwoImg} className="step-two-image"></img>
        </div>
      </Fade>

      <Fade right>
        <div className="step-three-block">
          <MyBlockTwo className="one"></MyBlockTwo>
          <MyBlockOne className="two"></MyBlockOne>
          <MyBlockThree className="three"></MyBlockThree>
          <MyBlockFour className="four"></MyBlockFour>
          <MyBlockFour className="five"></MyBlockFour>
          <MyBlockTwo className="six"></MyBlockTwo>
          <MyBlockOne className="seven"></MyBlockOne>
          <MyBlockFour className="eight"></MyBlockFour>
          <MyBlockTwo className="nine"></MyBlockTwo>
          <MyBlockFour className="ten"></MyBlockFour>
          <MyBlockTwo className="eleven"></MyBlockTwo>

          <div className="step-three">
            <div className="step-three-content">
              <div style={stepNumberIcon} className="step-number-Icon-three">
                <h1 style={stepNumber}>3</h1>
              </div>
              <div className="heading-para-three">
                <h1 className="step-three-heading" style={stepHeading}>
                  Review Performance
                </h1>
                <p style={stepPara} className="step-three-para">
                  Gig workers submit proof of work for review and approval. You
                  only pay for the work approved.
                </p>
              </div>
            </div>
          </div>
          <img src={stepThreeImg} className="step-three-image" />
        </div>
      </Fade>

      <Fade left>
        <div className="step-four-block">
          <MyBlockFour className="one"></MyBlockFour>
          <MyBlockTwo className="two"></MyBlockTwo>
          <MyBlockTwo className="three"></MyBlockTwo>
          <MyBlockFour className="four"></MyBlockFour>
          <MyBlockTwo className="five"></MyBlockTwo>
          <MyBlockFour className="six"></MyBlockFour>
          <MyBlockOne className="seven"></MyBlockOne>
          <div className="step-four">
            <div className="step-four-content">
              <div style={stepNumberIcon} className="step-number-Icon-four">
                <h1 style={stepNumber}>4</h1>
              </div>
              <div className="heading-para-four">
                <h1 className="step-four-heading" style={stepHeading}>
                  Bonus step-feel smug
                </h1>
                <p style={stepPara} className="step-four-para">
                  Feel great in the knowledge that you've saved time, headache
                  and risk of selecting & managing workers to scale your
                  business.
                  <br />
                  <br />
                  Focus on your core business area's we'll take care of the
                  rest.
                </p>
              </div>
            </div>
          </div>
          <img src={stepFourImg} className="step-four-image"></img>
        </div>
      </Fade>
      <div className="step-button-block">
        <button className="step-button-one">
          GET A QUOTE <Icon type="right" style={{ marginLeft: "8px" }} />
        </button>
        <button className="step-button-two" onClick={handleScrollTwo}>
          LEARN MORE <Icon type="down" style={{ marginLeft: "8px" }} />
        </button>
      </div>
    </StepIncludeStyled>
  );
};

export default StepIncluded;
