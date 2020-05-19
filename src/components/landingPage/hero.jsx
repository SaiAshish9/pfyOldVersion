import { Button } from "antd";
import React from "react";
import heroImg from "../../assets/img/landingPage/heroImg.svg";

export default function Hero() {
  return (
    <div className="hero-main-block">
      <div className="hero-content">
        <h1 className="hero-content-heading">Work with Pracify</h1>
        <p className="hero-content-para">
          Earn money and experience while working on your own schedule
        </p>
        <Button className="hero-content-button">Get Started</Button>
      </div>
      <div className="hero-img-block">
        <img src={heroImg} alt="" className="hero-img" />
      </div>
    </div>
  );
}
