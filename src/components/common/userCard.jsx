import { Progress } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import { tokenHeader } from "../../constant/tokenHeader";
import EditProfile from "../userHome/userProfile/editProfile.jsx";
import emailIcon from "./img/emailIcon.svg";
import locationIcon from "../../assets/img/locationIcon.svg";
import phoneIcon from "./img/phoneIcon.svg";

export default function UserCard({ myUserProfile }) {
  const location = useLocation();
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get("user", tokenHeader())
      .then((res) => {
        myUserProfile && myUserProfile(res.data);
        setUserData(res.data);
      })
      .catch((e) => {
        console.log("userData", e);
      });
  }, []);

  console.log("userData", userData);

  return (
    <div className="userProfile-with-profileScore-block">
      <div className="userProfile-block">
        <EditProfile userData={userData} />
        <div className="avatar-block">
          <div className="avatar-img-block">
            <img
              src={!!userData ? userData.imgUrl : ""}
              alt=""
              className="avatar__img"
            ></img>
          </div>
        </div>
        <div className="avatar-intro-block">
          <h2 className="avatar-name">{!!userData && userData.firstName}</h2>
          <div className="mail-block">
            <img src={emailIcon} alt=""></img>
            <p>{!!userData && userData.email}</p>
          </div>
          <div className="numLocBlock">
            <div className="number-block">
              <img src={phoneIcon} alt=""></img>
              <p>{!!userData && userData.phone}</p>
            </div>
            <div className="residence-block">
              <img src={locationIcon} alt=""></img>
              <p>{!!userData && userData.city}</p>
            </div>
          </div>
        </div>
      </div>
      {location.pathname === "/profile" ? (
        <div className="gig-Score-block">
          <h1 className="gig-Score__h1">Your Gig Profile Score</h1>
          <Progress
            type="circle"
            percent={!!userData && userData.profileScore}
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
            percent={!!userData && userData.profileScore}
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
