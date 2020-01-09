/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Icon } from "antd";
import {
  MyBlockOne,
  MyBlockTwo,
  MyBlockThree,
  FrontBlockStyled
} from "./homeStyled";
import pinkImage from "./images/frontBlockImg.png";

// const block = {
//   position: "absolute",
//   height: "16px",
//   background: "#f66",
//   borderRadius: "16px"
// };
// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const FrontBlock = ({ handleScrollOne }) => {
  // const executeScroll = () => scrollToRef(myRef)
  // const myRef=useRef()
  

  return (
    <FrontBlockStyled>
      <div className="content-background">
        <MyBlockTwo className="one" />
        <MyBlockTwo className="two" />
        <MyBlockOne className="three" />
        <MyBlockThree className="four" />
        <MyBlockTwo className="five" />
        <MyBlockTwo className="six" />
        <div className="content-data">
          <h1 className="data-heading-one">
            The Future of Work is Remote and Risk Free!
          </h1>
          <h1 className="data-heading-two">
            On-Demand Distributed Workforce For{" "}
            <Typewriter
              options={{
                strings: [
                  "Marketing",
                  "Auditing",
                  "Lead Generation",
                  "Data Transcription",
                  "Vendor Onboarding",
                  "Data Entry"
                ],
                autoStart: true,
                loop: true
              }}
            />
          </h1>
          <p className="data-para">
            We use technology to solve key business functions which are
            geographically spread and needs to be executed at a large scale
            using an on-demand distributed workforce comprising of India's youth
            who uses their free time and skills to complete tasks.
          </p>
          <p className="data-para">Pay for outcome, not manpower!</p>
          <br />
          <div className="button">
            <button className="first-button">
              MAKE IT HAPPEN <Icon type="right" style={{ marginLeft: "8px" }} />
            </button>
            <button className="second-button" onClick={handleScrollOne}>
              {" "}
              LEARN MORE <Icon type="down" style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </div>
        <div>
          <img src={pinkImage} className="pink-image" />
        </div>
      </div>
    </FrontBlockStyled>
  );
};

export default FrontBlock;

// changeDelay={1}
