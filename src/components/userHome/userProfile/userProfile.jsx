import React from "react";

import AboutUser from "./AboutUser";
import OfflineAvailUser from "./offlineAvailUser";
import UserLanguage from "./userLanguage";
import UserSkill from "./userSkill";
import UserDigitalProfile from "./userDigitalProfile";

import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";
import axios from "axios";

import UserCard from "../../common/userCard";

const UserProfile = () => {
  axios.get(`${apiURL}/user/`, tokenHeader).then(res => {
    console.log(res);
    console.log(res.data);
    // const profileData = res.data
  });

  return (
    <div className="profilePage-block">
      <UserCard></UserCard>
      <div className="avatar-profile-detail-block">
        <AboutUser />
        <OfflineAvailUser />
        <UserLanguage />
        <UserSkill />
        <UserDigitalProfile />
      </div>
    </div>
  );
};
export default UserProfile;
