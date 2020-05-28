import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Progress, Divider, Icon } from "antd";
import notificationIcon from "../userHome/img/notificationIcon.svg";
import rightArrowIcon from "../userHome/img/rightArrowIcon.svg";
import rightArrowBlackIcon from "../userHome/img/rightArrowBlackIcon.svg";
import creditCardImg from "./img/credit_card.svg";
import UserContext from "../../../context/userContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { objectValidation } from "../../validation/validation";
import userBlankImg from "../../../assets/img/userBlankImg.svg";

const Avatar = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  const userName = objectValidation(user) ? user.user.firstName : "";
  const userImg = objectValidation(user) ? user.user.imgUrl : userBlankImg;

  console.log(Object.entries(user).length > 0);
  console.log(user.constructor === Object);
  console.log();

  const handleAvatar = () => {
    history.push("/profile");
  };

  const handleCheckWallet = () => {
    history.push("/wallet");
  };

  return (
    <div className="avatar-block">
      <div className="avatar-detail-block" onClick={handleAvatar}>
        <div className="avatar-border-block">
          <div className="avatar-img-block">
            <img src={userImg} alt="img"></img>
          </div>
        </div>
        <div className="avatar-profile-block">
          <h3>Hi {userName}!</h3>
          <p className="welcome-msg__p">Welcome to Pracify!</p>
          <Divider />

          <div className="notification-block">
            <img src={notificationIcon} alt="" className="notification-icon" />
            <p>You have {"0"} New Notification!</p>
            <img src={rightArrowIcon} alt="" className="right-arrow" />
          </div>
        </div>
      </div>
      <div className="credit-card-block">
        <img src={creditCardImg} alt="" className="credit-card__img" />
        <div className="credit-card__check-wallet" onClick={handleCheckWallet}>
          <span className="credit-card__title">
            Check Wallet <img src={rightArrowBlackIcon} alt="" />
          </span>
        </div>
        <div className="credit-card__details">
          <div className="credit-card__number">x x x x 1 2 3 4</div>
          <div className="credit-card__holder">Card Holder</div>
          <div className="credit-card__name">{userName}</div>
        </div>
        <div className="credit-card__validity">
          <span
            style={{ fontSize: "9px" }}
            className="credit-card__validity-span"
          >
            Validity
          </span>{" "}
          <br />
          <span className="credit-card__validity-duration">FOREVER</span>
        </div>
      </div>
    </div>
  );
};
export default Avatar;

{
  /* <h4>Gig Profile Score: {user.profileScore}%</h4>
          <Progress percent={user.profileScore} status="active" /> */
}
