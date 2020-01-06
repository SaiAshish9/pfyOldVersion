/* eslint-disable jsx-a11y/alt-text */
import React,{useRef} from "react";
import Typewriter from "typewriter-effect";
import {Icon} from 'antd';
import { FrontBlockStyled } from "./homeStyled";
import pinkImage from "./images/pinkImage.png";

const block = {
  position:"absolute",
  height:"5px",
  background:"#f66",
  height:"16px",
  borderRadius:"10px"
}
// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  
const FrontBlock = () => {
  // const myRef=useRef(null)
  // const executeScroll = () => scrollToRef(myRef)
  
  return (
    <FrontBlockStyled >
      <div className="content-background">
      <div style={block} className="block-one"></div>
      <div style={block} className="block-two"></div>
      <div style={block} className="block-three"></div>
      <div style={block} className="block-four"></div>
      <div style={block} className="block-five"></div>
      <div style={block} className="block-six"></div>
        <div className="content-data">
          <h1 className="data-heading-one">
            <span style={{color:"#f66"}}>The</span>
            <span style={{color:"#f66"}}> Future</span>
            <span style={{}}> of</span>
            <span style={{color:"#7ccc33"}}> Work</span>
            <span style={{}}> is</span>
            <span style={{color:"#36f"}}> Remote</span>
            <span style={{color:""}}> and</span>
            <span style={{color:"#ffd900"}}> Risk Free!</span>
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
            through on-demand distributed workforce comprising of India's youth
            who uses their free time and skills to perform Gigs.
          </p>
          <p className="data-para">Pay for outcome, not manpower!</p>
          <br />
          <div className="button">
            <button className="first-button">MAKE IT HAPPEN <Icon type="right" style={{marginLeft:"8px"}}/></button>
            <button className="second-button">LEARN MORE <Icon type="down" style={{marginLeft:"8px"}}/></button>
          </div>
        </div>

        <img src={pinkImage} className="pink-image" />
      </div>
    </FrontBlockStyled>
  );
};

export default FrontBlock;

// changeDelay={1}
