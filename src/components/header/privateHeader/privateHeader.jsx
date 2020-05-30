/* eslint-disable jsx-a11y/anchor-is-valid */
import { CloseOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Scroll } from "react-fns";
import { useHistory } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import pracifyLogo from "../../../assets/img/logoDark.png";
import menuIcon from "../../../assets/img/menuIcon.svg";
import PrivateHeaderNavLink from "./privateHeaderNavLink";

export default function PrivateHeader() {
  const history = useHistory();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLogo = () => {
    history.push("/");
  };

  const handleNavIconClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleWrapper = () => {
    setIsNavOpen(!isNavOpen);
  };

  const myMobileNav = {
    transition: "transform .3s ease-in-out",
    transform: isNavOpen ? "translate(0%,0px)" : "translate(100%,0px)",
  };
  return (
    <>
      <Scroll
        render={({ x, y }) => {
          return (
            <div className="private-main-nav">
              <div
                className="headerNav"
                style={{
                  height: 60,
                  background: "#fff",
                  transition: "all 0.6s ease 0s",
                  boxShadow:
                    y > 20
                      ? "0px 2px 16px -6px black"
                      : "0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="logo-container" onClick={handleLogo}>
                  <img src={pracifyLogo} alt="" className="logoIcon" />
                </div>

                <div className="link-container">
                  <PrivateHeaderNavLink></PrivateHeaderNavLink>
                </div>

                {!isNavOpen && (
                  <div onClick={handleNavIconClick} className="mobile-nav-menu">
                    <img src={menuIcon} alt="" className="menu-icon" />
                  </div>
                )}
              </div>
              <div className="private-mobile-nav" style={myMobileNav}>
                <div className="mobile-nav-link">
                  {isNavOpen && (
                    <CloseOutlined
                      className="nav-close-icon"
                      onClick={handleNavIconClick}
                    />
                  )}
                  <PrivateHeaderNavLink />
                </div>
              </div>
            </div>
          );
        }}
      />
      {isNavOpen && <div className="wrapper" onClick={handleWrapper}></div>}
    </>
  );
}
