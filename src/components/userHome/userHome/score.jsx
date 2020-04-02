import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import resumeIcon from "./img/updateResumeIcon.svg";
import gigProfileIcon from "./img/updateGigProfileIcon.svg";
import rightArrowBlackIcon from "./img/rightArrowBlackIcon.svg";

export default function Score() {
  const history = useHistory();

  const handleUpdateResume = () => {
    history.push("/resume");
  };

  const handleUpdateGigProfile = () => {
    history.push("/profile");
  };

  return (
    <div className="score-main-block">
      <div className="resume-score-block">
        <div className="resume-score-img-block">
          <img src={resumeIcon} alt="" className="" />
        </div>
        <div className="resume-score-content">
          <h1 className="">You Resume Score Is 40%</h1>
          <p className="">
            Recruiters prefer hiring interns with a resume score of 60%.
            Increase your resume score today to boost your chances of landing
            your next Dream Internship.
          </p>
          <Button
            className="resume-update__button"
            onClick={handleUpdateResume}
          >
            Update <img src={rightArrowBlackIcon} alt="" />
          </Button>
        </div>
      </div>
      <div className="gig-profile-block">
        <div className="gig-profile-img-block">
          <img src={gigProfileIcon} alt="" className="" />
        </div>
        <div className="gig-profile-content">
          <h1 className="">Your Gig Profile Score Is 50%</h1>
          <p className="">
            Companies prefer hiring workers with a gig profile score of at least
            70%. Update your Gig profile now to increase your chances of landing
            your next Gig.
          </p>
          <Button
            className="gig-profile-update__button"
            onClick={handleUpdateGigProfile}
          >
            Update <img src={rightArrowBlackIcon} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
}
