import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNavLink() {
  return (
    <>
      <Link to="/internships" className="myLink1">
        Internships
      </Link>
      <Link to="/gigs" className="myLink2">
        Gigs
      </Link>
      <Link to="/login">
        <Button className="header__button1">Login</Button>
      </Link>
      <Button className="download-app-button">Download App</Button>
      <a
        href="https://business.pracify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="header__button2">For Business</Button>
      </a>
    </>
  );
}
