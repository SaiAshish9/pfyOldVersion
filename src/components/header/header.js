import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Scroll } from "react-fns";

import { MyHeader } from "./headerStyled";
import { Link, useHistory } from "react-router-dom";
import Login from "./login/login";
import pracifyLogo from "./logo.png";

const Header = () => {
  const history = useHistory();
  const handleLogo = () => {
    history.push("/");
  };

  return (
    <Scroll
      render={({ x, y }) => {
        return (
          <MyHeader scrollEffect={y}>
            <div className="logo-container" onClick={handleLogo}>
              <img src={pracifyLogo} alt="" className="logoIcon" />
            </div>
            <div className="link-container">
              <Link to="/" className="myLink1">
                Internships
              </Link>
              <Link to="/" className="myLink2">
                Gigs
              </Link>

              {<Login />}
              <Button className="header__button2">For Business</Button>
            </div>
          </MyHeader>
        );
      }}
    />
  );
};

export default Header;
