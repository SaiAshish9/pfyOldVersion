import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function UserStatusCard({ aboutCard, status }) {
  const location = useLocation();
  console.log("location", location.pathname);
  console.log("aboutCard", aboutCard);

  const id = aboutCard._id;
  const companyLogo = aboutCard.company.logoUrl;
  const title = aboutCard.designation || aboutCard.title;
  const companyName = aboutCard.company.companyName;

  const gigRoute = location.pathname === "/my-gigs" && `/gig/${id}`;
  const internshipRoute =
    location.pathname === "/my-internships" && `/internship/${id}`;

  console.log("route", internshipRoute, gigRoute);

  return (
    <Link to={gigRoute || internshipRoute}>
      <div className="userStatus-card">
        <div className="userStatus-img-block">
          <img src={companyLogo} alt="" className="userStatus-img" />
        </div>
        <h2 className="userStatus-title">{title}</h2>
        <p className="userStatus-companyName">{companyName}</p>
        <div className="userStatus-span-block">
          <span className="userStatus-span">Status : {status}</span>
        </div>
      </div>
    </Link>
  );
}
