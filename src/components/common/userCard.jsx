import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import axios from "axios";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import phoneIcon from "./img/phoneIcon.svg";
import emailIcon from "./img/emailIcon.svg";
import locationIcon from "./img/locationIcon.svg";

const UserCard = ({ myUserProfile }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get(`${apiURL}/user/`, tokenHeader)
      .then(res => {
        myUserProfile && myUserProfile(res.data);
        setUserData(res.data);
      })
      .catch(e => {
        console.log("userData", e);
      });
  }, []);

  console.log("userData", userData);

  return (
    <div className="userProfile-block">
      <div className="avatar-block">
        <div className="avatar-img-block">
          <img src={""} alt=""></img>
        </div>
        <h2>{!!userData && userData.firstName}</h2>
      </div>
      <div className="avatar-intro-block">
        <div className="residence-block">
          <img src={locationIcon} alt=""></img>
          <p>{!!userData && userData.city}</p>
        </div>
        <div className="mail-block">
          <img src={emailIcon} alt=""></img>
          <p>{!!userData && userData.email}</p>
        </div>
        <div className="number-block">
          <img src={phoneIcon} alt=""></img>
          <p>{!!userData && userData.phone}</p>
        </div>
      </div>
      <div className="divider-block"></div>
      <div>
        <p>Profile Score</p>
        <Progress percent={50} status="active" />
      </div>
    </div>
  );
};
export default UserCard;
