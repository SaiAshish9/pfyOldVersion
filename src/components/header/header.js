import React, { useState } from "react";
import { Scroll } from "react-fns";
import { useHistory } from "react-router-dom";
import pracifyLogo from "../../assets/img/logo.png";
import HeaderNavLink from "./headerNavLink";
import { MyHeader } from "./headerStyled";
import MobileNavIcon from "./mobileNavIcon";



const Header = () => {
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
    transition: "transform 1s ease-in-out",
    transform: isNavOpen ? "translate(0%,0px)" : "translate(100%,0px)"
  };

  return (
    <div>
      <Scroll
        render={({ x, y }) => {
          return (
            <MyHeader>
              <div className="headerNav" scrolleffect={y}>
                <div className="logo-container" onClick={handleLogo}>
                  <img src={pracifyLogo} alt="" className="logoIcon" />
                </div>
                <div className="link-container">
                  <HeaderNavLink></HeaderNavLink>
                </div>

                <div onClick={handleNavIconClick} className="mobile-nav-menu">
                  <MobileNavIcon isNavOpen={isNavOpen} />
                </div>
              </div>
              <div className="mobile-nav" style={myMobileNav}>
                <div className="mobile-nav-link">
                  <HeaderNavLink></HeaderNavLink>
                </div>
              </div>
            </MyHeader>
          );
        }}
      />
      {isNavOpen && <div className="wrapper" onClick={handleWrapper}></div>}
    </div>
  );
};

export default Header;
