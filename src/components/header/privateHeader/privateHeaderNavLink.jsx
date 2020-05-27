import { DownCircleFilled } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Support from "../../NewComps/support/support";
import VerifyStudentStatus from "../../NewComps/verify_student_Status/verifyStudentStatus";

export default function PrivateHeaderNavLink() {
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

  const ShowVerify = () => {
    setIsShowVerify(true);
  };
  console.log(isShowVerify);

  const myProfileMenu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/my-internships">My Internship</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/my-gigs">My Gig</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <span onClick={ShowVerify}>Verify</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
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

  const handleAnchor = () => {};

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
          <span className="myLink">Gig</span>
        ) : (
          <Link to="/gigs" className="myLink">
            Gigs
          </Link>
        )}

        {location === "/internships" ? (
          <span className="myLink">Internship</span>
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
        <a href="#foo" name="foo">
          <span className="user-profile">My Profile</span>
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
