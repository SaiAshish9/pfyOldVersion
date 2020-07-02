import { Button } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import Support from "../../support/support";
import myGigIcon from "./img/myGigIcon.svg";
import myInternshipIcon from "./img/myInternshipIcon.svg";
import supportIcon from "./img/supportIcon.png";
import verificationIcon from "./img/verificationIcon.svg";
import VerifyStudentStatus from "../../verify_student_Status/verifyStudentStatus";
const overView = [
  { img: myGigIcon, para: "My Gigs", link: "/my-gigs" },
  { img: myInternshipIcon, para: "My Internships", link: "/my-internships" },
  { img: supportIcon, para: "Support", link: "noLink" },
];

export default function MyOverview() {
  const history = useHistory();
  const [isShow, setIsShow] = useState(false);
  const [isShowVerify, setIsShowVerify] = useState();

  const handleUpdateVerification = () => {};

  const handleOverview = (link) => {
    if (link === "noLink") {
      setIsShow(true);
    } else {
      history.push(link);
    }
  };

  return (
    <>
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
        <div
          onClick={handleUpdateVerification}
          className="verification-score-block"
        >
          <div
            className="verification-score-content"
            onClick={() => setIsShowVerify(true)}
          >
            <h1 className="">Verify Student Status</h1>
            <p className="">
              Verify your student status to access exclusive student offers
            </p>
            <Button className="verification-update__button">
              VERIFY STATUS
            </Button>
          </div>
          <div className="verification-score-img-block">
            <img src={verificationIcon} alt="" className="" />
          </div>
        </div>
        <Support
          isShow={isShow}
          isClose={() => {
            setIsShow(false);
          }}
        />
      </div>
      <VerifyStudentStatus
        closeModal={() => {
          setIsShowVerify(false);
        }}
        isVisibleModal={isShowVerify}
      />
    </>
  );
}
