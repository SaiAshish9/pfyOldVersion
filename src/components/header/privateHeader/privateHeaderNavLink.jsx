import { DownCircleFilled } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import userBlankImg from "../../../assets/img/userBlankImg.svg";
import { tokenHeader } from "../../../constant/tokenHeader";
import Support from "../../NewComps/support/support";
import VerifyStudentStatus from "../../NewComps/verify_student_Status/verifyStudentStatus";
import { objectValidation } from "../../validation/validation";

export default function PrivateHeaderNavLink() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`home`, tokenHeader())
      .then((res) => {
        const userData = res.data;
        setUser(userData);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

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

  const closeVerify = () => {
    console.log("in close verify");
    setIsShowVerify(false);
  };

  const ShowVerify = (e) => {
    if (e.key === "4") {
      setIsShowVerify(true);
    }
  };

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

  const showSupport = () => {
    setIsShow(true);
  };

  const isClose = () => {
    setIsShow(false);
  };

  return (
    <>
      <div className="desktop-nav-layout">
        {location === "/home" ? (
          <span className="myLink">Home</span>
        ) : (
          <Link to="/home" className="myLink">
            Home
          </Link>
        )}
        {location === "/gigs" ? (
          <span className="myLink">Gigs</span>
        ) : (
          <Link to="/gigs" className="myLink">
            Gigs
          </Link>
        )}

        {location === "/internships" ? (
          <span className="myLink">Internships</span>
        ) : (
          <Link to="/internships" className="myLink">
            Internships
          </Link>
        )}
        {location === "/resume" ? (
          <span className="myLink">Resume</span>
        ) : (
          <Link to="/resume" className="myLink">
            Resume
          </Link>
        )}

        {location === "/wallet" ? (
          <span className="myLink">Wallet</span>
        ) : (
          <Link to="/wallet" className="myLink">
            Wallet
          </Link>
        )}
        <span className="myLink">Student Status</span>
        <span onClick={showSupport} className="myLink">
          Support
        </span>
      </div>
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

      <Support isShow={isShow} isClose={isClose} />
      <VerifyStudentStatus
        isCloseVerify={closeVerify}
        isShowVerify={isShowVerify}
      />
    </>
  );
}
