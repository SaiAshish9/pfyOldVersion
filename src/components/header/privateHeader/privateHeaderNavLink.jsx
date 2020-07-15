import { DownCircleFilled } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import notificationApi from "../../../api/notificationApi";
import { userApi } from "../../../api/userApi";
import { getUserProfile } from "../../../api/userProfileApi";
import notificationIcon from "../../../assets/img/notificationIcon.svg";
import downArrowIcon from "../../../assets/img/downArrowIcon.svg";
import maleIcon from "../../../assets/img/maleIcon.svg";
import femaleIcon from "../../../assets/img/femaleIcon.svg";
import { NotificationContext } from "../../../store/notificationStore";
import { UserProfileContext } from "../../../store/userProfileStore";
import { UserContext } from "../../../store/userStore";
import Support from "../../support/support";
import VerifyStudentStatus from "../../verify_student_Status/verifyStudentStatus";
import notificationMenu from "./notification";
import { useMediaQuery } from "react-responsive";

const headerLink = [
  { name: "Home", link: "/home" },
  { name: "Gigs", link: "/relatedGigs" },
  { name: "Internships", link: "/relatedInternships" },
  { name: "Resume", link: "/resume" },
  { name: "Wallet", link: "/wallet" },
  { name: "Student Status", link: "show-verify" },
];

export default function PrivateHeaderNavLink() {
  const { dispatchUser } = UserContext();
  const { notification, dispatchNotification } = NotificationContext();
  const { profileData, dispatchUserProfile } = UserProfileContext();

 const media = useMediaQuery({
   query: "(max-width:600px)",
 });



  const userName = !!profileData && profileData.firstName;
  const userImg = !!profileData ? profileData.imgUrl : "";
  const gender = !!profileData && profileData.gender;
  const [isShow, setIsShow] = useState(false);
  const [isShowVerify, setIsShowVerify] = useState(false);
  const location = useLocation().pathname;
  const history = useHistory();
  const handleLogout = () => {
    Cookies.remove("token");
    history.push("/");
  };

  const ShowVerify = (e) => {
    if (e.key === "4") {
      setIsShowVerify(true);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    userApi(dispatchUser);
    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
    getUserProfile(dispatchUserProfile);
    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
    notificationApi(dispatchNotification);
    return () => {
      source.cancel();
    };
  }, []);

  const myProfileMenu = (
    <Menu onClick={ShowVerify}>
        <React.Fragment>
          <Menu.Item key="0">
            <Link to="/profile">My Profile</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/my-internships">My Internship</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/my-gigs">My Gig</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <span>Verify</span>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="5">
            <Button type="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Menu.Item>
        </React.Fragment>
    </Menu>
  );

  return (
    <>
      <div className="desktop-nav-layout">
        {headerLink.map((data, index) => (
          <Fragment key={index}>
            {location === data.link ? (
              <span className="myLink-span">{data.name}</span>
            ) : data.link === "show-verify" ? (
              <span className="myLink" onClick={() => setIsShowVerify(true)}>
                {data.name}
              </span>
            ) : (
              <Link to={data.link} className="myLink">
                {!media &&data.name}
              </Link>
            )}
          </Fragment>
        ))}
        <span
          onClick={() => {
            setIsShow(true);
          }}
          className="myLink"
        >
          Support
        </span>
      </div>
      <Dropdown
        placement="bottomRight"
        overlay={notificationMenu(notification)}
        trigger={["click"]}
        className="user-notification-dropDown"
      >
        <a href="#f" name="f" onClick={(e) => e.preventDefault()}>
          <div className="user-notification-img-block">
            <img
              src={notificationIcon}
              alt=""
              className="user-notification-img"
            />
          </div>
        </a>
      </Dropdown>
      <Dropdown
        overlay={myProfileMenu}
        trigger={["click"]}
        className="user-profile-dropDown"
      >
        <a href="#foo" name="foo" onClick={(e) => e.preventDefault()}>
          <span className="header-avatar-img-block">
            {userImg ? (
              <img src={userImg} alt="img"></img>
            ) : (
              <img
                src={
                  gender === "M" ? maleIcon : gender === "f" ? femaleIcon : ""
                }
                alt=""
              ></img>
            )}
          </span>
          <span className="user-profile">Hi {userName}</span>
          <img src={downArrowIcon} alt="" className="" />
        </a>
      </Dropdown>
      <Support
        isShow={isShow}
        isClose={() => {
          setIsShow(false);
        }}
      />
      <VerifyStudentStatus
        closeModal={() => {
          setIsShowVerify(false);
        }}
        isVisibleModal={isShowVerify}
      />
    </>
  );
}
