import React, { useState, useEffect, Fragment } from "react";

import AboutUser from "./AboutUser";
import OfflineAvailUser from "./offlineAvailUser";
import UserLanguage from "./userLanguage";
import UserSkill from "./userSkill";
import UserDigitalProfile from "./userDigitalProfile";
import axios from "axios";

import UserCard from "../../common/userCard";
import { tokenHeader } from "../../../constant/tokenHeader";

const UserProfile = () => {
  const [profileData, setProfileData] = useState();
  const [isUpdate, SetIsUpdate] = useState(null);

  // GET PROFILE
  useEffect(() => {
    const url = "user/";
    axios
      .get(url, tokenHeader())
      .then((res) => {
        const profileData = res.data;
        console.log("PROFILE IS HERE", profileData);
        setProfileData(profileData);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [isUpdate]);

  const myUserProfile = (myProfileData) => {
    console.log("myProfileData", myProfileData);
  };

  const runFun = () => {
    SetIsUpdate(Math.random());
  };

  return (
    <Fragment>
      {profileData ? (
        <div className="profilePage-block">
          <UserCard myUserProfile={myUserProfile}></UserCard>
          <div className="avatar-profile-detail-block">
            <AboutUser isUpdate={runFun} profileData={profileData} />
            <OfflineAvailUser isUpdate={runFun} profileData={profileData} />
            <UserLanguage isUpdate={runFun} profileData={profileData} />
            <UserSkill isUpdate={runFun} profileData={profileData} />
            <UserDigitalProfile isUpdate={runFun} profileData={profileData} />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
export default UserProfile;
