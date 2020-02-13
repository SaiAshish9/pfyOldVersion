import React, { useState, useEffect } from "react";

import AboutUser from "./AboutUser";
import OfflineAvailUser from "./offlineAvailUser";
import UserLanguage from "./userLanguage";
import UserSkill from "./userSkill";
import UserDigitalProfile from "./userDigitalProfile";

import UserCard from "../../common/userCard";

const UserProfile = () => {
  const [profileData, setProfileData] = useState();

  const myUserProfile = myProfileData => {
    console.log("myProfileData",myProfileData);
  };

  return (
    <div className="profilePage-block">
      <UserCard myUserProfile={myUserProfile}></UserCard>
      <div className="avatar-profile-detail-block">
        <AboutUser profileData={profileData}/>
        <OfflineAvailUser />
        <UserLanguage />
        <UserSkill />
        <UserDigitalProfile />
      </div>
    </div>
  );
};
export default UserProfile;
