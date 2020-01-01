import React from "react";
// import FrontBlock from "./frontBlock"
import { StepIncludeStyled } from "./homeStyled";
import Fade from "react-reveal/Fade";

const StepIncluded = () => {
  return (
    <StepIncludeStyled>
      <h1>How it works in FOUR steps</h1>
      <Fade right>
        <div className="step-one-block">
          <div className="step-one">
            <div className="step-one-image">IMAGE</div>
            <div className="step-one-content">CONTENT</div>
          </div>
        </div>
      </Fade>
      <Fade left>
        <div className="step-two-block">
          <div className="step-two">
            <div className="step-two-content">CONTENT</div>
            <div className="step-two-image">IMAGE</div>
          </div>
        </div>
      </Fade>

      <Fade right>
        <div className="step-three-block">
          <div className="step-three">
            <div className="step-three-image">IMAGE</div>
            <div className="step-three-content">CONTENT</div>
          </div>
        </div>
      </Fade>

      <Fade left>
        <div className="step-four-block">
          <div className="step-four">
            <div className="step-four-content">CONTENT</div>
            <div className="step-four-image">IMAGE</div>
          </div>
        </div>
      </Fade>
    </StepIncludeStyled>
  );
};

export default StepIncluded;
