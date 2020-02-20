import React from "react";
import helpIcon from "./help.svg";

const MoreSuggestion = () => (
  <div className="moreGig-main-block">
    <div className="support-block">
      <h3 className="support-block__h3">Support</h3>
      <div className="support-question-block">
        <img
          alt=""
          src={helpIcon}
          className="support-question-block__img"
        ></img>
        <p className="support-question-block__p">Ask Questions</p>
      </div>
    </div>
    <div className="more-gig-block1">
      <h3 className="more-gig-block1__h3">More Gigs</h3>
      <div className="more-gig-block2">
        <div className="more-gig-block3-img-block">
          <img className="more-gig-block3__img"></img>
        </div>
        <div className="more-gig-block4-content-block">
          <h4 className="more-gig-block4__h4">text from backend</h4>
          <p className="more-gig-block4__p">text from backend</p>
        </div>
      </div>
    </div>
  </div>
);

export default MoreSuggestion;
