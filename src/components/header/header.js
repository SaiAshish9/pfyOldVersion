import React from "react";
import { MyHeader } from "./headerStyled";
import { Link, useHistory } from "react-router-dom";
import Login from './login/login';

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
        <Link to="/gigs" className="myLink">
          GIGS
        </Link>
        <Link to="/internships" className="myLink">
          INTERNSHIPS
        </Link>
        <Link to="/faqs" className="myLink">
          FAQS
        </Link>
        <Link to="/get-in-contact" className="myLink">
          GET IN CONTACT
        </Link>

        <Login/>
      </div>
    </MyHeader>
  );
};

export default Header;
