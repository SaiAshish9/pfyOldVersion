import React from "react";
import funSvg1 from "../../assets/img/landingPage/funSvg1.svg";
import funSvg2 from "../../assets/img/landingPage/funSvg2.svg";
import funSvg3 from "../../assets/img/landingPage/funSvg3.svg";
import funSvg4 from "../../assets/img/landingPage/funSvg4.svg";
import funSvg5 from "../../assets/img/landingPage/funSvg5.svg";
import KSSelectionImg from "../../assets/img/landingPage/KSSelectionImg.png";
import KSSubmissionImg from "../../assets/img/landingPage/KSSubmissionImg.png";
import KSPayment from "../../assets/img/landingPage/KSPayment.png";

const content = [
  {
    image: KSSelectionImg,
    heading: "SELECTION",
    subHeading: "Apply to jobs you like",
    para:
      "Apply to jobs that match your skills and interests at a single click on the mobile app or website.",
  },
  {
    image: KSSubmissionImg,
    heading: "SUBMISSION",
    subHeading: "Submit proof of work",
    para:
      "Complete tasks before the  deadline and submit proof of work completed on the mobile app or website.",
  },
  {
    image: KSPayment,
    heading: "PAYMENT",
    subHeading: "Get paid for doing work",
    para:
      "Get paid directly into your Pracify wallet. Transfer your earnings into your Paytm or Bank account.",
  },
];
export default function KeepSimple() {
  return (
    <div className="keepSimple-main-block">
      <div className="keepSimple-message-block">
        <h1 className="keepSimple-message">
          Pracify is with you at every step and we're here to keep
          <br /> your experience stress free and simple
          <img src={funSvg1} alt="" className="funSvg1"/>
          <img src={funSvg2} alt="" className="funSvg2"/>
          <img src={funSvg3} alt="" className="funSvg3"/>
          <img src={funSvg4} alt="" className="funSvg4"/>
          <img src={funSvg5} alt="" className="funSvg5"/>
        </h1>
      </div>
      <div className="content-main-block">
        {content.map((content, index) => (
          <div className="content-block" key={index}>
            <img src={content.image} alt="" className="content-img" />
            <h1 className="content-heading">{content.heading}</h1>
            <h2 className="content-subHeading">{content.subHeading}</h2>
            <p className="content-para">{content.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
