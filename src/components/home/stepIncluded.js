/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Icon } from "antd";
// import FrontBlock from "./frontBlock"
import { StepIncludeStyled } from "./homeStyled";
import Fade from "react-reveal/Fade";
import stepOneImg from "./images/stepOneImg.png";
import stepTwoImg from "./images/stepTwoImg.png";
import stepFourImg from "./images/stepFourImg.png";

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
  color: "#4f4f4f",
  // textAlign: "center",
  paddingRight: "160px"
};

const StepIncluded = () => {
  return (
    <StepIncludeStyled>
      <h1 style={mainHeading}>How it works in FOUR steps</h1>
      <Fade right>
        <div className="step-one-block">
          <div className="step-one">
            <img src={stepOneImg} className="step-one-image" />
            <div className="step-one-content">
              <h1 className="step-one-heading" style={stepHeading}>
                Tell us what you need
              </h1>
              <p style={stepPara} className="step-one-para">
                Submit your brief on our platform to tell us your requirement.
                We understand your problem and requirements and propose outcome
                based commercials. The requirements are converted into tasks and
                are made live on the web/mobile app.
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade left>
        <div className="step-two-block">
          <div className="step-two">
            <div className="step-two-content">
              <h1 className="step-two-heading" style={stepHeading}>
                Select gig workers
              </h1>
              <p style={stepPara} className="step-two-para">
                Recruit gig workers easily by conducting virtual interviews &
                screening their profiles. The selected workers chosen to execute
                the work undergo rigorous training to ensure quality of work.
              </p>
            </div>
            <img src={stepTwoImg} className="step-two-image"></img>
          </div>
        </div>
      </Fade>

      <Fade right>
        <div className="step-three-block">
          <div className="step-three">
            <div className="step-three-image">IMAGE</div>
            <div className="step-three-content">
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
      </Fade>

      <Fade left>
        <div className="step-four-block">
          <div className="step-four">
            <div className="step-four-content">
              <h1 className="step-four-heading" style={stepHeading}>
                Bonus step-feel smug
              </h1>
              <p style={stepPara} className="step-four-para">
                Feel great in the knowledge that you've saved time, headache and
                risk of selecting & managing workers to scale your business.
                <br />
                <br />
                Focus on your core business area's we'll take care of the rest.
              </p>
            </div>
            <img src={stepFourImg} className="step-four-image"></img>
          </div>
        </div>
      </Fade>
      <div className="step-button-block">
        <button className="step-button-one">
          GET A QUOTE <Icon type="right" style={{ marginLeft: "8px" }} />
        </button>
        <button className="step-button-two">
          LEARN MORE <Icon type="down" style={{ marginLeft: "8px" }} />
        </button>
      </div>
    </StepIncludeStyled>
  );
};

export default StepIncluded;
