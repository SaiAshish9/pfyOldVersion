import React from "react";
import { MyHeader } from "./headerStyled";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("/");
  };
  return (
    <MyHeader>
      <h1 className="logo" onClick={handleLogoClick}>
        LOGO
      </h1>
      <div className="headerNav">
        <Link to="/get-started" className="myLink">
          GET STARTED
        </Link>
        <Link to="/about-us" className="myLink">
          ABOUT US
        </Link>
        <Link to="/faqs" className="myLink">
          FAQS
        </Link>
        <Link to="/get-in-contact" className="myLink">
          GET IN CONTACT
        </Link>
      </div>
    </MyHeader>
  );
};

export default Header;
