import React from "react";
import calendarIcon from "./img/smallCalendarIcon.svg";
import taskIcon from "./img/smallTaskIcon.svg";
import rupeeIcon from "./img/smallRupeeIcon.svg";
import { Link } from "react-router-dom";
import cookie from "js-cookie";

export default function SmallCard({ gigOrInternship, isGigOrInternship }) {
  const isToken = cookie.get("token");

  const gig = isGigOrInternship === "gig";
  const internship = isGigOrInternship === "internship";

  //#region
  const gigCompany = internship
    ? false
    : gigOrInternship.company
    ? gigOrInternship.company
    : gigOrInternship.companyId;

  const internshipCompany = gig
    ? false
    : gigOrInternship.company
    ? gigOrInternship.company
    : gigOrInternship.companyId;

  console.log(internshipCompany);

  const gigTasks = internship
    ? false
    : Array.isArray(gigOrInternship.tasks)
    ? gigOrInternship.tasks.length
    : gigOrInternship.tasks;

  const id = gig ? gigOrInternship._id : gigOrInternship._id;
  const logo = gig ? gigCompany.logoUrl : internshipCompany.logoUrl;
  const title = gig ? gigOrInternship.title : gigOrInternship.designation;
  const companyName = gig
    ? gigCompany.companyName
    : internshipCompany.companyName;
  const amount = gig ? gigOrInternship.reward : gigOrInternship.stipend;
  const durationLength = gig ? `${gigTasks} Task` : gigOrInternship.duration;
  const icon = gig ? taskIcon : calendarIcon;

  //   const applyBefore = gig
  //     ? gigOrInternship.applyBefore
  //     : gigOrInternship.applyBefore;

  const detailPath = gig ? `/gig/${id}` : `/internship/${id}`;

  const privateDetailPath = gig
    ? `/relatedGig/${id}`
    : `/relatedInternship/${id}`;
  //#endregion

  return (
    <Link to={!isToken ? detailPath : privateDetailPath}>
      <div className="similar-gigOrInternship-block2">
        <div className="similar-gigOrInternship-block3-img-block">
          <img
            src={logo}
            alt=""
            className="similar-gigOrInternship-block3__img"
          ></img>
        </div>
        <div className="similar-gigOrInternship-block4-content-block">
          <h4 className="similar-gigOrInternship-block4__h4">{title}</h4>
          <p className="similar-gigOrInternship-block4__p">{companyName}</p>
          <div className="info-main-graphic-block">
            <div className="info-graphic-block-one">
              <img src={rupeeIcon} alt="" className="" />
              <p className="info-graphic-block-one__p">{amount}</p>
            </div>
            <div className="info-graphic-block-two">
              <img src={icon} alt="" className="" />
              <p className="info-graphic-block-two__p">{durationLength}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
