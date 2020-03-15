import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

// import { GigCardStyled } from "../defaultStyled/defaultStyled";
import calendarIcon from "./img/calendarIcon.svg";
import rupeeIcon from "./img/rupeeIcon.svg";
import taskIcon from "./img/taskIcon.svg";
const Card = props => {
  const gig = props.gig;
  const internship = props.internship;

/* ---------------------------- variable setting ---------------------------- */
  //#region 
  const gigCompany = internship
    ? false
    : gig.company
    ? gig.company
    : gig.companyId;

  const internshipCompany = gig
    ? false
    : internship.company
    ? internship.company
    : internship.companyId;

  const gigTasks = internship
    ? false
    : Array.isArray(gig.tasks)
    ? gig.tasks.length
    : gig.tasks;

  const id = gig ? gig._id : internship._id;
  const logo = gig ? gigCompany.logoUrl : internshipCompany.logoUrl;
  const title = gig ? gig.title : internship.designation;
  const companyName = gig
    ? gigCompany.companyName
    : internshipCompany.companyName;
  const amount = gig ? gig.reward : internship.stipend;
  const durationLength = gig ? `${gigTasks} Task` : internship.duration;
  const icon = gig ? taskIcon : calendarIcon;
  const applyBefore = gig ? gig.applyBefore : internship.applyBefore;

  const DetailPath = gig ? `/gig/${id}` : `/internship/${id}`;
  
  //#endregion

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
            <p className="brief-info-para">{durationLength}</p>
          </div>
        </div>
        <div className="boundary-two">
          <h5 className="due-time">Apply Before: {moment(applyBefore).format("DD MMM YYYY")}</h5>
        </div>
      </div>
    </Link>
  );
};
export default Card;
