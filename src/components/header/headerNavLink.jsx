import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Login from "./login/login";

export default function HeaderNavLink() {
  return (
    <>
      {/* //! do not delete this content below */}
      <Link to="/internships" className="myLink1">
        Internships
      </Link>
      <Link to="/gigs" className="myLink2">
        Gigs
      </Link>

      {<Login />}
      <a
        href="https://business.pracify.com/"
        target="_blank"
        className="header__button2__a"
      >
        <Button className="header__button2">For Business</Button>
      </a>
    </>
  );
}
