import React from "react";
import WRHeroImg from "../../assets/img/landingPage/WRHeroImg.png";
import WRImg1 from "../../assets/img/landingPage/WRImg1.svg";
import WRImg2 from "../../assets/img/landingPage/WRImg2.svg";
import WRImg3 from "../../assets/img/landingPage/WRImg3.svg";

const content = [
  {
    image: WRImg1,
    header: "Jobs for Everyone",
    para: "Find and apply to jobs that match your skills & interest.",
  },
  {
    image: WRImg2,
    header: "Work Remotely",
    para:
      "Work on the go using your smartphone or computer according to your own schedule.",
  },
  {
    image: WRImg3,
    header: "Fast & Secure Payments",
    para:
      "Get paid directly into your Pracify wallet after completing the work successfully.",
  },
];
export default function WorkRemotely() {
  return (
    <div className="workRemotely-main-block">
      <img src={WRHeroImg} alt="" className="workRemotely-img" />
      <div className="workRemotely-message-block">
        <h1 className="workRemotely-message-header">
          With Pracify you can work from <br /> wherever you want, whenever you
          want
        </h1>
        <p className="workRemotely-message-para">
          Get paid for completing tasks online
        </p>
      </div>
      <div className="workRemotely-content-main-block">
        {content.map((content, index) => (
          <div className="workRemotely-content-block" key={index}>
            <img src={content.image} alt="" className="content-img" />
            <h2 className="content-header">{content.header}</h2>
            <p className="content-para">{content.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
