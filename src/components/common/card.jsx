import React from "react";
import { Link } from "react-router-dom";

// import { GigCardStyled } from "../defaultStyled/defaultStyled";
import calendarIcon from "./images/calendarIcon.svg";
import rupeeIcon from "./images/rupeeIcon.svg";
import taskIcon from "./images/taskIcon.svg";
const Card = props => {
  const gig = props.gig;
  const internship = props.internship;

  const id = gig ? gig._id : internship._id;
  const logo = gig ? gig.company.logoUrl : internship.company.logoUrl;
  const title = gig ? gig.title : internship.designation;
  const companyName = gig
    ? gig.company.companyName
    : internship.company.companyName;
  const amount = gig ? gig.reward : internship.stipend;
  const durationLength = gig ? gig.tasks.length : internship.duration;
  const applyBefore = gig ? gig.applyBefore : internship.applyBefore;
  const DetailPath = gig ? `/gig/${id}` : `/internship/${id}`;
  const icon = gig ? taskIcon : calendarIcon;

  return (
    <Link to={DetailPath}>
      <div className="my-card-block">
        <div>
          <div className="logo">
            <img src={logo} style={{ width: "100%" }} alt=""></img>
          </div>
          <h4 className="designation" style={{}}>
            {title}
          </h4>
          <h5 className="company-name">{companyName}</h5>
          <div className="boundary-one" />
        </div>
        <div>
          <div className="brief-info-block">
            <img src={rupeeIcon} alt=""></img>
            <p className="brief-info-para">{amount}</p>
          </div>
        </div>
        <div>
          <div className="brief-info-block">
            <img src={icon} alt=""></img>
            <p className="brief-info-para">{durationLength} Tasks</p>
          </div>
        </div>
        <div className="boundary-two">
          <h5 className="due-time">Apply Before: {applyBefore}</h5>
        </div>
      </div>
    </Link>
  );
};
export default Card;
