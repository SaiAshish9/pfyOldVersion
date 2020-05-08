import axios from "axios";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import SmallCard from "../common/smallCard";
import { arrayValidation } from "../validation/validation";
import helpIcon from "./help.svg";

export default function MoreSuggestion({ isGigOrInternship, category }) {
  console.log("isGigOrInternship", isGigOrInternship, category);
  const [similarGigOrInternship, setSimilarGigOrInternship] = useState();

  useEffect(() => {
    console.log("similarGigOrInternship", similarGigOrInternship);
  }, [similarGigOrInternship]);

  useEffect(() => {
    if (isGigOrInternship === "gig") {
      axios
        .get(`mission/fetch?pagesize=4&title=${category}`)
        .then((res) => {
          setSimilarGigOrInternship(res.data.missions);
          console.log("similar gig", res.data);
        })
        .catch((e) => {
          console.log("similar gig error", e.res);
        });
    } else if (isGigOrInternship === "internship") {
      axios
        .get(`internship/fetch_with_status?pagesize=4&category=xyz`)
        .then((res) => {
          setSimilarGigOrInternship(res.data.internships);
          console.log("similar internship", res.data);
        })
        .catch((e) => {
          console.log("similar internship error", e);
        });
    }
  }, [category, isGigOrInternship]);

  // const gigCompany = internship
  //   ? false
  //   : gig.company
  //   ? gig.company
  //   : gig.companyId;

  // const internshipCompany = gig
  //   ? false
  //   : internship.company
  //   ? internship.company
  //   : internship.companyId;

  // const gigTasks = internship
  //   ? false
  //   : Array.isArray(gig.tasks)
  //   ? gig.tasks.length
  //   : gig.tasks;

  // const id = gig ? gig._id : internship._id;
  // const logo = gig ? gigCompany.logoUrl : internshipCompany.logoUrl;
  // const title = gig ? gig.title : internship.designation;
  // const companyName = gig
  //   ? gigCompany.companyName
  //   : internshipCompany.companyName;
  // const amount = gig ? gig.reward : internship.stipend;
  // const durationLength = gig ? `${gigTasks} Task` : internship.duration;
  // const icon = gig ? taskIcon : calendarIcon;
  // const applyBefore = gig ? gig.applyBefore : internship.applyBefore;

  // const DetailPath = gig ? `/gig/${id}` : `/internship/${id}`;

  return (
    <div className="moreGigOrInternship-main-block">
      {isGigOrInternship === "gig" && (
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
      )}
      <div className="similar-gigOrInternship-block1">
        <h3 className="similar-gigOrInternship-block1__h3">
          {isGigOrInternship === "gig" ? "Similar Gigs" : "Similar Internships"}
        </h3>
        {arrayValidation(similarGigOrInternship) &&
          similarGigOrInternship.map((gigOrInternship, index) => {
            return (
              <SmallCard
                key={index}
                gigOrInternship={gigOrInternship}
                isGigOrInternship={isGigOrInternship}
              />
            );
          })}
      </div>
    </div>
  );
}
