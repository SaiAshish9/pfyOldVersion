import React, { useRef, forwardRef, useState, useEffect } from "react";
import FrontBlock from "./frontBlock";
import StepIncluded from "./stepIncluded";
import WhyItWork from "./whyItWork";
import WorkWeExecute from "./workWeExecute";
import DownloadApp from "./downloadApp";
import Footer from "./footer";
import { HeaderStyled } from "./homeStyled";
import logo from './images/logo.png'

const Home = () => {
  const myRefOne = useRef(null);
  const myRefTwo = useRef(null);

  const handleScrollOne = () => {
    myRefOne.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const handleScrollTwo = () => {
    myRefTwo.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <>
      <HeaderStyled
        style={{
          textAlign: "center",
          marginBottom:"-5rem",
          padding: "20px 15px 15px 15px",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center"
        }}
      >
          <img height={"100rem"} src={logo}/>

        <h1 className="header-heading">
          Launching Soon
        </h1>
      </HeaderStyled>

      <FrontBlock handleScrollOne={handleScrollOne} />

      <div ref={myRefOne}>
        <StepIncluded handleScrollTwo={handleScrollTwo} />
      </div>

      <div ref={myRefTwo}>
        <WhyItWork />
      </div>

      <WorkWeExecute />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default Home;
