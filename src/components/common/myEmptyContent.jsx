import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import myEmptyContent from "../../assets/img/myEmptyContent.svg";

export default function MyEmptyContent({ from }) {
  const goto = from === "gig" ? "/relatedGigs" : "/relatedInternships";
  const getFrom = from === "gig" ? "gig" : "internship";
  return (
    <div className="my-empty-content">
      <h1 className="my-empty-content__h1">
        {`You have not applied to any ${getFrom} yet.`}
      </h1>
      <Link to={goto}>
        <Button className="my-empty-content__button">Apply Now</Button>
      </Link>
      <img src={myEmptyContent} alt="" className="my-empty-content__img" />
    </div>
  );
}
