import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import pageNotFoundImg from "../assets/img/pageNotFoundImg.svg";
const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found-img">
        <img src={pageNotFoundImg} alt="" className="" />
      </div>
      <h1 className="page-not-found__h1">Page not found</h1>
      <p className="page-not-found__p">
        Sorry we couldn't find the page you were looking for!
      </p>
      <Link to="/">
        <Button className="page-not-found__button">TAKE ME HOME</Button>
      </Link>
    </div>
  );
};
export default PageNotFound;
