import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Progress } from "antd";
import UserContext from "../../../context/userContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Avatar = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  const userName =
    Object.entries(user).length > 0 && user.constructor === Object
      ? user.user.firstName
      : "";
      
  const userImg =
    Object.entries(user).length > 0 && user.constructor === Object
      ? user.user.imgUrl
      : "";

  console.log(Object.entries(user).length > 0);
  console.log(user.constructor === Object);
  console.log();

  const handleAvatar = () => {
    history.push("/profile");
  };

  return (
    <div className="avatar-block">
        <div className="avatar-detail-block" onClick={handleAvatar}>
          <div className="avatar-img-block">
            <img src={userImg} alt="img"></img>
          </div>
          <div className="avatar-profile-block">
            <h3>Hi {userName}</h3>
            <h4>Gig Profile Score: {user.profileScore}%</h4>
            <Progress percent={user.profileScore} status="active" />
          </div>
        </div>
      <div className="notification-detail-block">
        <h1>Notification</h1>
      </div>
    </div>
  );
};
export default Avatar;
