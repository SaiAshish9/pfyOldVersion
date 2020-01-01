import React from "react";
import Zoom from "react-reveal/Zoom";
import { WhyItWorkStyled } from "./homeStyled";

const WhyItWork = () => {
  return (
    <WhyItWorkStyled>
      <div className="whyItWork-block">
        <h1>Why it works</h1>
        <div className="whyItWork-container">
          <Zoom>
            <div className="whyItWork-item">
              <h1>1</h1>
              <p>content</p>
            </div>
          </Zoom>
          <Zoom>
            <div className="whyItWork-item">
              <h1>2</h1>
              <p>content</p>
            </div>
          </Zoom>
          <Zoom>
            <div className="whyItWork-item">
              <h1>3</h1>
              <p>content</p>
            </div>
          </Zoom>
          <Zoom>
            <div className="whyItWork-item">
              <h1>4</h1>
              <p>content</p>
            </div>
          </Zoom>
          <Zoom>
            <div className="whyItWork-item">
              <h1>5</h1>
              <p>content</p>
            </div>
          </Zoom>
          <Zoom>
            <div className="whyItWork-item">
              <h1>6</h1>
              <p>content</p>
            </div>
          </Zoom>
        </div>
      </div>
    </WhyItWorkStyled>
  );
};

export default WhyItWork;
