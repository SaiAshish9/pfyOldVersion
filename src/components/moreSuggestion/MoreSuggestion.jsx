import React from "react";
import helpIcon from "./help.svg";
import calendarIcon from "./smallCalendarIcon.svg";
import taskIcon from "./smallTaskIcon.svg";
import rupeeIcon from "./smallRupeeIcon.svg";

const MoreSuggestion = () => (
  <div className="moreGigOrInternship-main-block">
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
    <div className="similar-gigOrInternship-block1">
      <h3 className="similar-gigOrInternship-block1__h3">Similar Gigs</h3>
      <div className="similar-gigOrInternship-block2">
        <div className="similar-gigOrInternship-block3-img-block">
          <img
            src="https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/62250102_356171508419805_4126052361166651392_n.png?_nc_cat=101&_nc_oc=AQmeLEAqe2BG16-GV3UEhZzOk4Vg3Zj4iNUk4MZQLlXe6SySgtHYqEunrrRG2_vdCSY&_nc_ht=scontent.fdel21-1.fna&oh=3463929943bacd47114a2071979214b0&oe=5EA09EF9"
            alt=""
            className="similar-gigOrInternship-block3__img"
          ></img>
        </div>
        <div className="similar-gigOrInternship-block4-content-block">
          <h4 className="similar-gigOrInternship-block4__h4">
            UI/UX Designing Internship
          </h4>
          <p className="similar-gigOrInternship-block4__p">text from backend</p>
          <div className="info-main-graphic-block">
            <div className="info-graphic-block-one">
              <img src={rupeeIcon} alt="" className="" />
              <p className="info-graphic-block-one__p">10000</p>
            </div>
            <div className="info-graphic-block-two">
              <img src={taskIcon} alt="" className="" />
              <p className="info-graphic-block-two__p">2 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MoreSuggestion;
