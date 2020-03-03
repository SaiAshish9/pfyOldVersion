import React from "react";
import AOS from "aos";

// import opportunityIcon1 from "./img/opportunityIcon1.png";
// import opportunityIcon2 from "./img/opportunityIcon2.png";
// import opportunityIcon3 from "./img/opportunityIcon3.png";

AOS.init();
const HIHcontainer = () => (
  <div className="hih-container">
    <div className="hih-h1-container">
      <h1 data-aos="fade-up" className="hih__h1">
        How It Helps
      </h1>
    </div>
    <div className="hih-content-container">
      <div // style={{
        //   borderRight: "1px dashed #d3d3d3",
        //   paddingRight: "80px"
        // }}
        className="hih-content-subContainer"
        style={{ flex: "1.1" }}
      >
        <h2 data-aos="fade-up" className="hih-content-subContainer__h2">
          1
        </h2>
        <h3 data-aos="fade-up" className="hih-content-subContainer__h3">
          Become Financially Independent
        </h3>
        <p data-aos="fade-up" className="hih-content-subContainer__p">
          Earn money, rewards and cashbacks by completing tasks on Pracify. Its
          time you stop asking money from your parents and start earning
          yourself.
        </p>
        <img src={""} alt="" className="hih-content-subContainer__img" />
      </div>
      <div className="hih-content-subContainer">
        <h2 data-aos="fade-up" className="hih-content-subContainer__h2">
          2
        </h2>
        <h3 data-aos="fade-up" className="hih-content-subContainer__h3">
          Gain Work Experience
        </h3>
        <p data-aos="fade-up" className="hih-content-subContainer__p">
          Gain valuable experience by working for your favourite companies to
          take the professional lead from your counterparts.
        </p>
        <img src={""} alt="" className="hih-content-subContainer__img" />
      </div>
      <div className="hih-content-subContainer">
        <h2 data-aos="fade-up" className="hih-content-subContainer__h2">
          3
        </h2>
        <h3 data-aos="fade-up" className="hih-content-subContainer__h3">
          Increase Your Skillset
        </h3>
        <p data-aos="fade-up" className="hih-content-subContainer__p">
          Gain necessary organizational, leadership and communication skills to
          kickstart your professional journey.
        </p>
        <img src={""} alt="" className="hih-content-subContainer__img" />
      </div>
    </div>
  </div>
);

export default HIHcontainer;
