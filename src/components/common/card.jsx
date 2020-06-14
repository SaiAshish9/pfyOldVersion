import cookie from "js-cookie";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import { s3URL } from "../../constant/url";
import calendarIcon from "./img/calendarIcon.svg";
import clockIcon from "./img/clockIcon.svg";
import rupeeIcon from "./img/rupeeIcon.svg";
import taskIcon from "./img/taskIcon.svg";

export default function Card(props) {
  const isToken = cookie.get("token");
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
  console.log("company logo", logo);
  const title = gig ? gig.title : internship.designation;
  const companyName = gig
    ? gigCompany.companyName
    : internshipCompany.companyName;
  const amount = gig ? gig.reward : internship.stipend;
  const durationLength = gig ? `${gigTasks} Task` : internship.duration;
  const icon = gig ? taskIcon : calendarIcon;
  const applyBefore = gig ? gig.applyBefore : internship.applyBefore;

  const detailPath = gig ? `/gig/${id}` : `/internship/${id}`;

  const privateDetailPath = gig
    ? `/relatedGig/${id}`
    : `/relatedInternship/${id}`;
  //#endregion

  return (
    <Link to={!isToken ? detailPath : privateDetailPath}>
      <div className="my-card-block">
        <div>
          <div className="logo">
            <img src={s3URL + logo} alt=""></img>
          </div>
          <h4 className="designation">{title}</h4>
          <p className="company-name">{companyName}</p>
        </div>
        <div className="brief-info-main-block">
          <div className="brief-info-block">
            <img src={rupeeIcon} alt=""></img>
            <p className="brief-info-para">{amount}</p>
          </div>
          <div className="brief-info-block">
            <img src={icon} alt=""></img>
            <p className="brief-info-para">{durationLength}</p>
          </div>
        </div>
        <div className="boundary-two">
          <div className="applyBefore-block">
            <img src={clockIcon} alt="" className="applyBefore-img"></img>
            <p className="due-time">
              Apply Before: {moment(applyBefore).format("DD MMM YYYY")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
