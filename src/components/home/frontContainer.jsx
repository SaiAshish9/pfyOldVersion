import React, { useEffect } from "react";
import { Button } from "antd";
import AOS from "aos";

AOS.init();
const FrontContainer = () => {
  return (
    <div className="front-container">
      <h1 className="front-container__h1" data-aos="fade-up">
        Find awesome work opportunities <br /> on Pracify.
      </h1>
      <p className="front-container__p" data-aos="fade-up">
        Make money in your spare time by working for your <br /> favourite
        companies using your smartphone.
      </p>
      <Button
        shape="round"
        className="front-container__button"
        data-aos="fade-up"
      >
        Start Earning Today
      </Button>
    </div>
  );
};

export default FrontContainer;
