import { Progress } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import locationIcon from "../../assets/img/locationIcon.svg";
import { UserProfileContext } from "../../store/userProfileStore";
import EditProfile from "../userHome/userProfile/editProfile.jsx";
import emailIcon from "./img/emailIcon.svg";
import phoneIcon from "./img/phoneIcon.svg";

export default function UserCard() {
  const location = useLocation();
  const { profileData } = UserProfileContext();

  console.log("profileData", profileData);
  const firstName = !!profileData && profileData.firstName;
  const lastName = !!profileData && profileData.lastName;
  return (
    <div className="userProfile-with-profileScore-block">
      <div className="userProfile-block">
        <EditProfile userData={profileData} />
        <div className="avatar-block">
          <div className="avatar-img-block">
            <img
              src={!!profileData ? profileData.imgUrl : ""}
              alt=""
              className="avatar__img"
            ></img>
          </div>
        </div>
        <div className="avatar-intro-block">
          <h2 className="avatar-name">
            {firstName} {lastName}
          </h2>
          <div className="mail-block">
            <img src={emailIcon} alt=""></img>
            <p>{!!profileData && profileData.email}</p>
          </div>
          <div className="numLocBlock">
            <div className="number-block">
              <img src={phoneIcon} alt=""></img>
              <p>{!!profileData && profileData.phone}</p>
            </div>
            <div className="residence-block">
              <img src={locationIcon} alt=""></img>
              <p>{!!profileData && profileData.city}</p>
            </div>
          </div>
        </div>
      </div>
      {location.pathname === "/profile" ? (
        <div className="gig-Score-block">
          <h1 className="gig-Score__h1">Your Gig Profile Score</h1>
          <Progress
            type="circle"
            percent={!!profileData && profileData.profileScore}
            status="active"
            strokeWidth={15}
            strokeColor="#6dff5d"
            width={160}
            className="gig-progressBar"
          />
        </div>
      ) : (
        <div className="gig-Score-block">
          <h1 className="gig-Score__h1">Your Resume Score</h1>
          <Progress
            type="circle"
            percent={!!profileData && profileData.profileScore}
            status="active"
            strokeWidth={15}
            strokeColor="#6dff5d"
            width={160}
            className="gig-progressBar"
          />
        </div>
      )}
    </div>
  );
}
