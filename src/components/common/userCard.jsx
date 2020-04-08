import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Progress, Icon } from "antd";
import axios from "axios";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import phoneIcon from "./img/phoneIcon.svg";
import emailIcon from "./img/emailIcon.svg";
import locationIcon from "./img/locationIcon.svg";
import EditProfile from "../userHome/userProfile/editProfile";
import { useLocation } from "react-router-dom";

export default function UserCard(props) {
  const myUserProfile = props.myUserProfile;
  const history = useHistory();
  const location = useLocation();
  const [userData, setUserData] = useState();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    axios
      .get(`${apiURL}/user/`, tokenHeader)
      .then((res) => {
        myUserProfile && myUserProfile(res.data);
        setUserData(res.data);
      })
      .catch((e) => {
        console.log("userData", e);
      });
  }, []);

  console.log("userData", userData);

  const handleCard = () => {
    if (location.pathname !== "/profile") {
      history.push("/profile");
    }
  };

  const openModal = () => {
    setIsShow(!isShow);
  };

  const isClose = () => {
    setIsShow(false);
  };

  return (
    <div className="userProfile-with-profileScore-block">
      <div className="userProfile-block" onClick={handleCard}>
        <EditProfile show={isShow} isClose={isClose} />
        {/* <div className="edit-icon" style={{textAlign: "end", fontSize:"1.2rem"}}> <Icon onClick={openModal} type="edit"></Icon></div> */}
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
          <h2 style={{ textAlign: "center", fontSize: "22px", margin: "0px" }}>
            {!!userData && userData.firstName}
          </h2>
          <div className="mail-block">
            {/* <img src={emailIcon} alt=""></img> */}
            <p>{!!userData && userData.email}</p>
          </div>
          <div className="number-block">
            <p>{!!userData && userData.phone}</p>
            {/* <img src={phoneIcon} alt=""></img> */}
          </div>
          <div className="residence-block">
            {/* <img src={locationIcon} alt=""></img> */}
            <h2>{!!userData && userData.city}</h2>
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
