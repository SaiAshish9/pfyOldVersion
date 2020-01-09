/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { WorkWeExecuteStyled } from "./homeStyled";
import Zoom from "react-reveal/Zoom";
import workWeExecuteIcon from "./images/workWeExecuteIcon.svg";

// const workWeExecuteBlock = {
//   display: "flex",
//   justifyContent: "space-evenly",
//   width: "100%",
//   marginBottom: "80px"
// };

// const = {
  // border: "1px solid black",
  // position: "relative",

  // width: "352px",
  // height: "280px",
  // borderRadius: "6px",
  // boxShadow: "0 13px 20px 0 rgba(0,0,0,0.09)",
  // border: "solid 1px #efefef",
  // padding: "0px 40px 40px 40px"
// };

const mainHeading = {
  fontSize: "28px",
  lineHeight: "1.17",
  letterSpacing: ".3px",
  fontWeight: "700",
  fontFamily: "avenir, sans-serif",
  textAlign:"center",
  marginBottom:"80px"
} 
const blockHeader = {
  fontFamily: "avenir, sans-serif",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "19px"
};
const blockPara = {
  fontFamily: "avenir, sans-serif",
  marginBottom: "24px"
};
const blockPoint = {
  fontFamily: "avenir, sans-serif",
  color: "#4a4a4a",
  lineHeight: "10px"
};

const myIcon = {
  width: "18px",
  marginRight: "8px"
};

const WorkWeExecute = () => {
  return (
    <WorkWeExecuteStyled>
      <h1 style={mainHeading}>
        The Work We Execute
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div  className="workWeExecuteBlock">
          <Zoom>
            <div  className="myBlock block-one">
              <h1 style={blockHeader} className={"block-header-one"}>
                Marketing
              </h1>
              <p style={blockPara}>
                Use youngster to promote your product and launch your next viral
                campaign.
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Content creation
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Content distribution
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Drive app installs
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Product reviews
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                BTL activities
              </p>
            </div>
          </Zoom>
          <Zoom>
            <div  className="myBlock block-two">
              <h1 style={blockHeader} className={"block-header-two"}>
                Business Development & Diligence
              </h1>
              <p style={blockPara}>
                Grow your business and acquire your next million customer.
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Vendor onboarding
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Customer onboarding
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Identity verification
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Field work
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Lead generation
              </p>
            </div>
          </Zoom>
        </div>
        <div  className="workWeExecuteBlock">
          <Zoom>
            <div  className="myBlock block-three">
              <h1 style={blockHeader} className={"block-header-three"}>
                Research & Auditing
              </h1>
              <p style={blockPara}>
                Gain valuable insights to tighten your processes and maintain
                quality.
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Mystery & non mystery audits
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Quality survey
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Product sampling
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Customer experience survey
              </p>
            </div>
          </Zoom>
          <Zoom>
            <div  className="myBlock block-four">
              <h1 style={blockHeader} className={"block-header-four"}>
                Data Moderation
              </h1>
              <p style={blockPara}>
                Analyse data points to take important business decisions.
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Data entry
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Data transcription
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Data Digitization
              </p>
              <p style={blockPoint}>
                <img style={myIcon} src={workWeExecuteIcon}></img>
                Data curation
              </p>
            </div>
          </Zoom>
        </div>
      </div>
    </WorkWeExecuteStyled>
  );
};

export default WorkWeExecute;
