import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import myGigIcon from "./img/myGigIcon.svg";
import myInternshipIcon from "./img/myInternshipIcon.svg";
import verificationIcon from "./img/verificationIcon.svg";

const overView = [
  { img: myGigIcon, para: "My Gigs" },
  { img: myInternshipIcon, para: "My Internships" },
  { img: myInternshipIcon, para: "Support" },
];

export default function MyOverview() {
  const handleUpdateVerification = () => {
    // history.push("/resume");
  };

  return (
    <div className="overview-main-block">
      <div className="myOverview-main-block">
        {overView.map((overView, index) => (
          <div className="myOverview-block" key={index}>
            <div className="myOverview-img-block">
              <img src={overView.img} alt="" className="myOverview-img" />
            </div>
            <p className="myOverview-para">{overView.para}</p>
          </div>
        ))}
      </div>
      <div className="verification-score-block">
        <div className="verification-score-content">
          <h1 className="">Verify Student Status</h1>
          <p className="">
            Verify your student status to access exclusive student offers
          </p>
          <Button
            className="verification-update__button"
            onClick={handleUpdateVerification}
          >
            VERIFY STATUS
          </Button>
        </div>
        <div className="verification-score-img-block">
          <img src={verificationIcon} alt="" className="" />
        </div>
      </div>
    </div>
  );
}
