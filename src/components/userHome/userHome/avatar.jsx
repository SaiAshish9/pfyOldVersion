import React from "react";
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../../../store/userProfileStore";
import rightArrowBlackIcon from "../userHome/img/rightArrowBlackIcon.svg";
import creditCardImg from "./img/credit_card.svg";
import { useMediaQuery } from "react-responsive";

const Avatar = ({ user, notification }) => {
  const history = useHistory();
  const { profileData } = UserProfileContext();

  const media = useMediaQuery({
    query: "(max-width:600px)",
  });

  const firstName = !!profileData && profileData.firstName;
  const lastName = !!profileData && profileData.lastName;
  const userImg = !!profileData ? profileData.imgUrl : "";

  console.log(Object.entries(user).length > 0);
  console.log(user.constructor === Object);
  console.log();

  const handleCheckWallet = () => {
    history.push("/wallet");
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
      className="avatar-block"
    >
      <div
        style={{
          display: media && "flex",
          flexWrap: media && "wrap",
          marginLeft: 0,
          alignItems: media && "center",
          justifyContent: media && "center",
          marginBottom: media && "2rem",
        }}
        className="avatar-detail-block"
      >
        <div className="avatar-border-block">
          <div className="avatar-img-block">
            <img src={userImg} alt="img"></img>
          </div>
        </div>

        <div
          style={
            {
              // width:'120rem'
              // maxWidth:"80vw"
            }
          }
          className="avatar-profile-block"
        >
          <h3>
            Hi {firstName} {lastName}!
          </h3>
          <p
            style={{
              textAlign: media && "center",
            }}
            className="welcome-msg__p"
          >
            Welcome to Pracify!
          </p>
          {/* <Divider /> */}
          {/* <div className="notification-block">
            <img src={notificationIcon} alt="" className="notification-icon" />
            <p>You have {notification.length} New Notification!</p>
            <img src={rightArrowIcon} alt="" className="right-arrow" />
          </div> */}
        </div>
      </div>

      <div
        style={{
          marginLeft: media && 0,
          width: media && "96%",
        }}
        className="credit-card-block"
      >
        <img src={creditCardImg} alt="" className="credit-card__img" />
        <div 
        style={{
          top:media&&20,
          right:media&&42,
        }}
        className="credit-card__check-wallet" onClick={handleCheckWallet}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
            className="credit-card__title"
          >
            Wallet <img src={rightArrowBlackIcon} alt="" />
          </span>
        </div>
        <div className="credit-card__details">
          <div className="credit-card__number">
            <span>x x x x</span>
            <span>1 2 3 4</span>
          </div>
          <div className="credit-card__holder">Card Holder</div>
          <div
            style={{
              marginRight: media && "20px !important",
            }}
            className="credit-card__name"
          >
            {firstName} {lastName}
          </div>
        </div>
        <div className="credit-card__validity">
          <span
            style={{
              marginLeft: media && 10,
            }}
            className="credit-card__validity-span"
          >
            Validity
          </span>{" "}
          <br />
          <span
            style={{
              marginLeft: media && 10,
            }}
            className="credit-card__validity-duration"
          >
            Forever
          </span>
        </div>
      </div>
    </div>
  );
};
export default Avatar;
