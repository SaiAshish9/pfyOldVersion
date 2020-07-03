import React from "react";
import emptyContentImg from "../../assets/img/emptyContentImg.svg";

export default function EmptyContent({ from }) {
  const getFrom = from === "gig" ? "gigs" : "internships";
  return (
    <div className="empty-content-main">
      <div className="empty-content-img">
        <img
          src={emptyContentImg}
          alt=""
          className="empty-content-img__image"
        />
      </div>
      <h1 className="empty-content__h1">
        {`We're bringing new ${getFrom} internships for you!`}
      </h1>
      <p className="empty-content__p">This space will be updated soon.</p>
    </div>
  );
}
