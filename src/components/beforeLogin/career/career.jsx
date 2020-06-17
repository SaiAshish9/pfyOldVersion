import React, { useEffect } from "react";
import { Button } from "antd";
import careerHeroImg from "../../../assets/img/career/careerHeroImg.svg";

export default function Career() {
  useEffect(() => {
    window.scrollTo("0", "0");
  }, []);
  return (
    <div className="career-main-block">
      <div className="workWithUs-block">
        <h1 className="workWithUs-head">Work With Us</h1>
        <p className="workWithUs-para">
          We are on a mission to build India's youngest & strongest <br />
          on-demand workforce
        </p>
        <Button className="openings-button">Open Positions</Button>
      </div>
      <div className="career-hero-block">
        <div className="career-hero-para-block">
          <p className="career-hero-para">
            We're building the simplest outsourcing solution for companies so
            that businesses can focus on scaling operations, not sourcing &
            managing on-demand workers.
          </p>
          <p className="career-hero-para">
            We're streamlining the end to end management processes to make the
            whole process simpler and easier.
          </p>
          <p className="career-hero-para">
            If you think what we're doing is interesting, then lets have a cup
            of coffee!
          </p>
        </div>
<div className="career-hero-img-block">

        <img src={careerHeroImg} alt="" className="career-hero-img" />
</div>
      </div>
    </div>
  );
}
