import { DownCircleFilled } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState, Fragment } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import userBlankImg from "../../../assets/img/userBlankImg.svg";
import { tokenHeader } from "../../../constant/tokenHeader";
import Support from "../../NewComps/support/support";
import VerifyStudentStatus from "../../NewComps/verify_student_Status/verifyStudentStatus";
import { objectValidation, arrayValidation } from "../../validation/validation";
import notificationIcon from "../../../assets/img/notificationIcon.svg";

const headerLink = [
  { name: "Home", link: "/home" },
  { name: "Gigs", link: "/gigs" },
  { name: "Internships", link: "/internships" },
  { name: "Resume", link: "/resume" },
  { name: "Wallet", link: "/wallet" },
  { name: "Student Status", link: "" },
];
const { SubMenu } = Menu;
export default function PrivateHeaderNavLink() {
  const [user, setUser] = useState({});
  const [notification, setNotification] = useState([1, 2, 3]);

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
    axios
      .get(`home`, tokenHeader(), {
        cancelToken: source.token,
      })
      .then((res) => {
        const userData = res.data;
        setUser(userData);
      })
      .catch((e) => {
        console.log(e.response);
      });
    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(`notification/fetch`, tokenHeader(), {
        cancelToken: source.token,
      })
      .then((res) => {
        const myNotification = res.data;
        console.log("myNotification", myNotification);
        setNotification(myNotification);
      })
      .catch((e) => {
        console.log(e.response);
      });
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
    <Menu>
      {!arrayValidation(notification) ? (
        <Menu.ItemGroup title="Notification">
          <Menu.Item key="1">No New Notification</Menu.Item>
        </Menu.ItemGroup>
      ) : (
        <Menu.ItemGroup title="Notification">
          {notification.map((populateNotification, index) => (
            <Menu.Item key={index}>Option {index}</Menu.Item>
          ))}
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
          <div className="user-notification-img-bl">
            <img src={notificationIcon} alt="" className="user-" />
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
