import { CloseOutlined } from "@ant-design/icons";
import cookies from "js-cookie";
import React, { useState } from "react";
import { Scroll } from "react-fns";
import { useHistory, useLocation } from "react-router-dom";
import menuIcon from "../../assets/img/menuIcon.svg";
import pracifyLogo from "../../assets/img/logo.png";
import HeaderNavLink from "./headerNavLink";
import { tokenHeader } from "../../constant/tokenHeader";

const Header = () => {
  const userToken = cookies.get("token");
  const history = useHistory();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const pathWithoutHeader = location.pathname === "/login";
  console.log("pathWithoutHeader", pathWithoutHeader);

  const handleLogo = () => {
    history.push("/");
  };

  const handleNavIconClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleWrapper = () => {
    setIsNavOpen(!isNavOpen);
  };

  console.log(isNavOpen);

  const myMobileNav = {
    transition: "transform .3s ease-in-out",
    transform: isNavOpen ? "translate(0%,0px)" : "translate(100%,0px)",
  };

  //FIXME  Problem
  const { headers } = tokenHeader();
  console.log("headers", headers);
  return (
    <div
      style={{ display: pathWithoutHeader || headers.token ? "none" : "block" }}
    >
      <Scroll
        render={({ x, y }) => {
          return (
            <div className="main-nav">
              <div
                className="headerNav"
                style={{
                  transition: "all 0.6s ease 0s",
                  boxShadow: y > 20 ? "0px 2px 16px -6px black" : "none",
                }}
              >
                <div className="logo-container" onClick={handleLogo}>
                  <img src={pracifyLogo} alt="" className="logoIcon" />
                </div>

                <div className="link-container">
                  <HeaderNavLink></HeaderNavLink>
                </div>

                {!isNavOpen && (
                  <div onClick={handleNavIconClick} className="mobile-nav-menu">
                    <img src={menuIcon} alt="" className="menu-icon" />
                  </div>
                )}
              </div>
              <div className="mobile-nav" style={myMobileNav}>
                <div className="mobile-nav-link">
                  {isNavOpen && (
                    <CloseOutlined
                      className="nav-close-icon"
                      onClick={handleNavIconClick}
                    />
                  )}
                  <HeaderNavLink></HeaderNavLink>
                </div>
              </div>
            </div>
          );
        }}
      />
      {isNavOpen && <div className="wrapper" onClick={handleWrapper}></div>}
    </div>
  );
};

export default Header;
