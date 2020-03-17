import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";
import Objective from "./objective";
import Education from "./education";
import Skill from "./skill";
import Experience from "./experience";
import Position from "./position";
import Training from "./training";
import Project from "./project";
import DigitalProfile from "./digitalProfile";
import Achievement from "./achievement";

import UserCard from "../common/userCard";

const UserResume = () => {
  const [userResumeData, setUserResumeData] = useState({});
  const [updater, setUpdater] = useState(0);
  const [isLoader, setIsLoader] = useState(true);
  console.log(userResumeData);

  // useEffect(() => {
  //   console.log(userResumeData);
  // }, [updater, userResumeData]);

  useEffect(() => {
    console.log("updater", updater);
    axios
      .get(`${apiURL}/resume/me`, tokenHeader)
      .then(res => {
        console.log("user resume data", res.data);
        setIsLoader(false);
        setUserResumeData(res.data.resume);
      })
      .catch(e => console.log(e.response));
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
        <Skill skill={userResumeData.skills} updateResume={setUpdater} />
        <Experience
          workExperience={userResumeData.workExperience}
          updateResume={setUpdater}
        />
        <Position position={userResumeData.POR} updateResume={setUpdater} />
        <Training
          training={userResumeData.trainings}
          updateResume={setUpdater}
        />
        <Project project={userResumeData.projects} updateResume={setUpdater} />
        <DigitalProfile
          digitalProfile={userResumeData.digitalProfiles}
          updateResume={setUpdater}
        />
        <Achievement
          achievement={userResumeData.achievements}
          updateResume={setUpdater}
        />
      </div>
    </div>
  );
};

export default UserResume;
