import React, { useState, useEffect } from "react";

import AboutUser from "./AboutUser";
import OfflineAvailUser from "./offlineAvailUser";
import UserLanguage from "./userLanguage";
import UserSkill from "./userSkill";
import UserDigitalProfile from "./userDigitalProfile";
import axios from 'axios';

import UserCard from "../../common/userCard";

const UserProfile = () => {
  const [profileData, setProfileData] = useState();
  const [isUpdate, SetIsUpdate] = useState(null)

  // GET PROFILE
  useEffect(() => {
    const url = 'user/';
    axios.get(url)
      .then(res => {
        const profileData = res.data;
        console.log('PROFILE IS HERE', profileData)
        setProfileData(profileData)
      })
  }, [isUpdate])

  const myUserProfile = myProfileData => {
    console.log("myProfileData",myProfileData);
  };

  const runFun = () => {
    SetIsUpdate(Math.random())
  }

  return (
    <div className="profilePage-block">
      <UserCard myUserProfile={myUserProfile}></UserCard>
      <div className="avatar-profile-detail-block">
        <AboutUser isUpdate={runFun} profileData={profileData}/>
        {profileData ? <OfflineAvailUser isUpdate={runFun}  profileData={profileData}/> : null}
        {profileData ? <UserLanguage isUpdate={runFun} profileData={profileData} /> : null}
        {profileData ? <UserSkill isUpdate={runFun} profileData={profileData} /> : null}
        { profileData ? <UserDigitalProfile isUpdate={runFun} profileData={profileData} /> : null}
        
      </div>
    </div>
  );
};
export default UserProfile;
