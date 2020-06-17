import { DownCircleFilled } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import notificationApi from "../../../api/notificationApi";
import { userApi } from "../../../api/userApi";
import notificationIcon from "../../../assets/img/notificationIcon.svg";
import userBlankImg from "../../../assets/img/userBlankImg.svg";
import { NotificationContext } from "../../../store/notificationStore";
import { UserContext } from "../../../store/userStore";
import Support from "../../support/support";
import { arrayValidation, objectValidation } from "../../validation/validation";
import VerifyStudentStatus from "../../verify_student_Status/verifyStudentStatus";

const headerLink = [
  { name: "Home", link: "/home" },
  { name: "Gigs", link: "/relatedGigs" },
  { name: "Internships", link: "/relatedInternships" },
  { name: "Resume", link: "/resume" },
  { name: "Wallet", link: "/wallet" },
  { name: "Student Status", link: "" },
];

export default function PrivateHeaderNavLink() {
  const { user, dispatchUser } = UserContext();
  const { notification, dispatchNotification } = NotificationContext();

  const userName = objectValidation(user) ? user.user.firstName : "";
  const userImg = objectValidation(user) ? user.user.imgUrl : userBlankImg;

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
      console.log("un mounting");
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
    </Menu>
  );
  const notificationMenu = () => (
    <Menu className="notification-main-block">
      {!arrayValidation(notification) ? (
        <Menu.ItemGroup title="Notification" className="notification-title">
          <Menu.Item key="1">No New Notification</Menu.Item>
        </Menu.ItemGroup>
      ) : (
        <Menu.ItemGroup title="Notification" className="notification-title">
          {notification.map((populateNotification, index) => {
            console.log(populateNotification);
            return (
              <Menu.Item key={index}>
                <p className="notification-para">
                  {populateNotification.message}
                </p>
              </Menu.Item>
            );
          })}
        </Menu.ItemGroup>
      )}
    </Menu>
  );

  return (
    <>
      <div className="desktop-nav-layout">
        {headerLink.map((data, index) => (
          <Fragment key={index}>
            {location === data.link ? (
              <span className="myLink-span">{data.name}</span>
            ) : (
              <Link to={data.link} className="myLink">
                {data.name}
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
        overlay={notificationMenu}
        trigger={["click"]}
        className="user-profile-dropDown"
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
            <img src={userImg} alt="img"></img>
          </span>
          <span className="user-profile">Hi {userName}</span>
          <DownCircleFilled />
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
