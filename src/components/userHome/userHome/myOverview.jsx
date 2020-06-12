import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import myGigIcon from "./img/myGigIcon.svg";
import myInternshipIcon from "./img/myInternshipIcon.svg";
import verificationIcon from "./img/verificationIcon.svg";
import supportIcon from "./img/supportIcon.svg";

const overView = [
  { img: myGigIcon, para: "My Gigs", link: "/my-gigs" },
  { img: myInternshipIcon, para: "My Internships", link: "/my-internships" },
  { img: supportIcon, para: "Support", link: "noLink" },
];

export default function MyOverview() {
  const history = useHistory();
  const handleUpdateVerification = () => {};

  const handleOverview = (link) => {
    if (link === "noLink") {
      return;
    } else {
      history.push(link);
    }
  };

  return (
    <div className="overview-main-block">
      <div className="myOverview-main-block">
        {overView.map((overView, index) => (
          <div
            key={index}
            onClick={() => handleOverview(overView.link)}
            className="myOverview-block"
          >
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
