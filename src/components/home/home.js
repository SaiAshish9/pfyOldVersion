import React, { useRef, forwardRef, useState, useEffect } from "react";
import FrontBlock from "./frontBlock";
import StepIncluded from "./stepIncluded";
import WhyItWork from "./whyItWork";
import WorkWeExecute from "./workWeExecute";
import DownloadApp from "./downloadApp";
import Footer from "./footer";

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
