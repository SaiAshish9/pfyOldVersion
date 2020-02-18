/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Menu, Dropdown, Icon } from "antd";
import Cookies from "js-cookie";
import "./privateHeader.scss";

const PrivateHeader = () => {
  const history = useHistory();

  const handleLogout = () => {
    Cookies.remove("token");
    history.push("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/my-internships">My Internship</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/my-gigs">My Gig</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Button type="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      className="headerNav"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <Link to="/home" className="myLink">
        Home
      </Link>
      <Link to="/resume" className="myLink">
        Resume
      </Link>
      <Link to="/gigs" className="myLink">
        GIG
      </Link>
      <Link to="/internships" className="myLink">
        INTERNSHIPS
      </Link>
      <Dropdown overlay={menu} trigger={["click"]} className="ant-drop">
        <a className="ant-dropdown-link" href="#">
          My Profile <Icon type="down" />
        </a>
      </Dropdown>
    </div>
  );
};

export default PrivateHeader;
