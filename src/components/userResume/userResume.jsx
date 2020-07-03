import axios from "axios";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import { tokenHeader } from "../../constant/tokenHeader";
import UserCard from "../common/userCard";
import Achievement from "./achievement";
import DigitalProfile from "./digitalProfile";
import Education from "./education";
import Experience from "./experience";
import Objective from "./objective";
import Position from "./position";
import Project from "./project";
import Skill from "./skill";
import Training from "./training";
// import Dummy from "./dummyData";

const UserResume = () => {
  const [userResumeData, setUserResumeData] = useState({});
  const [updater, setUpdater] = useState(0);
  const [isLoader, setIsLoader] = useState(true);
  console.log("withRating", userResumeData.skills);

  useEffect(() => {
    console.log("updater", updater);
    axios
      .get("resume/me", tokenHeader())
      .then((res) => {
        console.log("user resume data", res.data);
        setIsLoader(false);
        setUserResumeData(res.data.resume);
      })
      .catch((e) => console.log(e.response));
  }, [updater]);

  return (
    <div className="resume-with-userCard-block">
      <UserCard />
      <div className="resume-block">
        <Objective
          careerObjective={userResumeData.careerObjectives}
          updateResume={setUpdater}
          loader={isLoader}
        />

        <Education
          education={userResumeData.education}
          updateResume={setUpdater}
        />
        <Experience
          workExperience={userResumeData.workExperience}
          updateResume={setUpdater}
        />

        <Skill skill={userResumeData.skills} updateResume={setUpdater} />
        <Position position={userResumeData.POR} updateResume={setUpdater} />
        <Training
          training={userResumeData.trainings}
          updateResume={setUpdater}
        />
        <Project project={userResumeData.projects} updateResume={setUpdater} />
        <Achievement
          achievement={userResumeData.achievements}
          updateResume={setUpdater}
        />
        <DigitalProfile
          digitalProfile={userResumeData.digitalProfiles}
          updateResume={setUpdater}
        />
      </div>
    </div>
  );
};

export default UserResume;
