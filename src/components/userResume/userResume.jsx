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
  console.log(userResumeData);

  useEffect(() => {
    console.log(userResumeData);
  }, [updater,userResumeData]);

  useEffect(() => {
    console.log(updater);
    axios
      .get(`${apiURL}/resume/me`, tokenHeader)
      .then(res => { 
        console.log(res.data);
        setUserResumeData(res.data);
      })
      .catch(e => console.log(e.response));
  }, [updater]);

  // useEffect(() => {
  //   console.log(userResumeData.education);
  //   console.log(userResumeData.digitalProfiles);
  // }, [userResumeData]);

  return (
    <div className="resume-with-userCard-block">
      <UserCard />
      <div className="resume-block">
        <Objective
          careerObjective={userResumeData.careerObjectives}
          set={setUpdater}
        />
        <Education education={userResumeData.education} set={setUpdater} />
        <Skill skill={userResumeData.skills} set={setUpdater} />
        <Experience
          workExperience={userResumeData.workExperience}
          set={setUpdater}
        />
        <Position position={userResumeData.POR} set={setUpdater} />
        <Training training={userResumeData.trainings} set={setUpdater} />
        <Project project={userResumeData.projects} set={setUpdater} />
        <DigitalProfile
          digitalProfile={userResumeData.digitalProfiles}
          set={setUpdater}
        />
        <Achievement
          achievement={userResumeData.achievements}
          set={setUpdater}
        />
      </div>
    </div>
  );
};

export default UserResume;
