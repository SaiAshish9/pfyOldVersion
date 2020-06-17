import React, { Fragment } from "react";
/* ---------------------------------- ***** --------------------------------- */
import { UserProfileContext } from "../../../store/userProfileStore";
import UserCard from "../../common/userCard";
import { objectValidation } from "../../validation/validation";
import AboutUser from "./AboutUser";
import OfflineAvailUser from "./offlineAvailUser";
import UserDigitalProfile from "./userDigitalProfile";
import UserLanguage from "./userLanguage";
import UserSkill from "./userSkill";

const UserProfile = () => {
  const { profileData } = UserProfileContext();

  console.log("profileData");

  return (
    <Fragment>
      {objectValidation(profileData) ? (
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
      ) : null}
    </Fragment>
  );
};
export default UserProfile;
