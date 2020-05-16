/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button, Menu, Dropdown, Icon } from "antd";
import Cookies from "js-cookie";
import "./privateHeader.scss";
import Support from '../../NewComps/support/support';
import VerifyStudentStatus from "../../NewComps/verify_student_Status/verifyStudentStatus";
import { DownCircleFilled } from '@ant-design/icons';

export default function PrivateHeader() {
  const [isShow, setIsShow] = useState(false)
  const [isShowVerify, setIsShowVerify] = useState(false)

  const location = useLocation().pathname;
  const history = useHistory();
  const handleLogout = () => {
    Cookies.remove("token");
    history.push("/");
  };

  const closeVerify = () => {
    console.log("in close verify");
    setIsShowVerify(false);
  }

  const ShowVerify = () => {
    setIsShowVerify(true);
  }
  console.log(isShowVerify);
  

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/my-internships">My Internship</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/my-gigs">My Gig</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <p onClick={ShowVerify}>Verify</p>
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
  }

  const isClose = () => {
    setIsShow(false);
  }

  return (
    <div className="headerNav">
      <VerifyStudentStatus isCloseVerify={closeVerify} isShowVerify={isShowVerify} />
      <div className="link-container">
        {location === "/home" ? (
          <p className="myLink">Home</p>
        ) : (
          <Link to="/home" className="myLink">
            Home
          </Link>
        )}
        {location === "/resume" ? (
          <p className="myLink">Resume</p>
        ) : (
          <Link to="/resume" className="myLink">
            Resume
          </Link>
        )}

        {location === "/gigs" ? (
          <p className="myLink">Gig</p>
        ) : (
          <Link to="/gigs" className="myLink">
            Gig
          </Link>
        )}

        {location === "/internships" ? (
          <p className="myLink">Internship</p>
        ) : (
          <Link to="/internships" className="myLink">
            Internship
          </Link>
        )}

        {location === "/wallet" ? (
          <p className="myLink">Wallet</p>
        ) : (
          <Link to="/wallet" className="myLink">
            Wallet
          </Link>
        )}

      <p onClick={showSupport}  className="myLink">Support</p>
      <Support isShow={isShow} isClose={isClose} />

      </div>

      <Dropdown overlay={menu} trigger={["click"]} className="ant-drop">
        <a className="ant-dropdown-link" href="#">
          My Profile <DownCircleFilled />
        </a>
      </Dropdown>
    </div>
  );
}
