import React, { useContext } from "react";
// import { <Icon } from "antd";
import { useHistory, Link } from "react-router-dom";
import studentStatusIcon from "./img/linkStudentStatusIcon.svg";
import gigIcon from "./img/linkGigIcon.svg";
import internshipIcon from "./img/linkInternshipIcon.svg";
import resumeIcon from "./img/linkResumeIcon.svg";
import gigProfileIcon from "./img/linkGigProfileIcon.svg";
import rightArrowIcon from "./img/rightArrowIcon2.svg";
import clipboard from "./img/clipboard.png";
import rupee from "./img/rupee.png";
import UserContext from "../../../context/userContext";

export default function Stat() {
  const { user } = useContext(UserContext);

  // console.log(user);

  return (
    <div className="stat-block">
      <div className="stat-card-block">
        <Link to="/profile" className="student-status-block">
          <img
            src={studentStatusIcon}
            alt="img"
            className="student-status__img"
          ></img>

          <div className="student-status-text-block">
            <h1>Student Status</h1>
            <p>Click To Complete Your Details</p>
            <img alt="" src={rightArrowIcon} className="arrowIcon-one" />
          </div>
        </Link>

        <Link to="/my-gigs" className="my-gig-block">
          <img src={gigIcon} alt="img" className="my-gig__img"></img>
          <div className="my-gig-text-block">
            <h1>My Gigs</h1>
            <p>Check all your Gigs here</p>
            <img alt="" src={rightArrowIcon} className="arrowIcon-two" />
          </div>
        </Link>
        <Link to="/my-internships" className="my-internship-block">
          <img
            src={internshipIcon}
            alt="img"
            className="my-internship__img"
          ></img>
          <div className="my-internship-text-block">
            <h1>My Internship</h1>
            <p>Check all your Internships</p>
            <img alt="" src={rightArrowIcon} className="arrowIcon-three" />
          </div>
        </Link>
        <Link to="/resume" className="my-resume-block">
          <img src={resumeIcon} alt="img" className="my-resume__img"></img>
          <div className="my-resume-text-block">
            <h1>My Resume</h1>
            <p>Click To Check Your Resume</p>
            <img alt="" src={rightArrowIcon} className="arrowIcon-four" />
          </div>
        </Link>
        <Link to="/my-profile" className="gig-profile-block">
          <img
            src={gigProfileIcon}
            alt="img"
            className="gig-profile__img"
          ></img>
          <div className="gig-profile-text-block">
            <h1>Gig Profile</h1>
            <p>Here's Your Gig Profile</p>
            <img alt="" src={rightArrowIcon} className="arrowIcon-five" />
          </div>
        </Link>
      </div>
    </div>
  );
}
