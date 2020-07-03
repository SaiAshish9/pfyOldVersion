import axios from "axios";
import React, { useEffect, useState } from "react";
import { tokenHeader } from "../../../constant/tokenHeader";
import MyEmptyContent from "../../common/myEmptyContent";
/* ---------------------------------- ***** --------------------------------- */
import { arrayValidation } from "../../validation/validation";
import UserStatusCard from "../userStatusCard";

export default function UserGig() {
  //TODO need to remove by default array state
  const [gig, setGig] = useState();

  useEffect(() => {
    axios
      .get(`mission/mymissions`, tokenHeader())
      .then((res) => {
        console.log(res.data);
        setGig(res.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const applied =
    arrayValidation(gig) && gig.filter((myGig) => myGig.status === 601);
  console.log(applied);
  const shortlisted =
    arrayValidation(gig) && gig.filter((myGig) => myGig.status === 602);
  console.log(shortlisted);
  const selected =
    arrayValidation(gig) && gig.filter((myGig) => myGig.status === 603);
  const rejected =
    arrayValidation(gig) && gig.filter((myGig) => myGig.status === 604);
  const completed =
    arrayValidation(gig) && gig.filter((myGig) => myGig.status === 605);
  const failed =
    arrayValidation(gig) && gig.filter((myGig) => myGig.status === 606);

  const getCard = (dataOfCard, status) =>
    arrayValidation(dataOfCard) &&
    dataOfCard.map((userCardData, index) => {
      const userGig = userCardData.mission;
      console.log(userGig);
      return (
        <UserStatusCard
          aboutCard={userGig}
          status={status}
          key={index}
        ></UserStatusCard>
      );
    });

  const userApplied = getCard(applied, "Applied");
  const userShortlisted = getCard(shortlisted, "Waitlisted");
  const userSelected = getCard(selected, "Selected");
  const userRejected = getCard(rejected, "Rejected");
  const userCompleted = getCard(completed, "Completed");
  const userFailed = getCard(failed, "Failed");

  return (
    <div className="userStatus-main-block">
      <div className="userStatus-content-block">
        <h1 className="userStatus-head">My Gigs</h1>
        <div className="userStatus-card-main-block">
          {userApplied && userApplied}

          {userShortlisted && userShortlisted}

          {userSelected && userSelected}

          {userRejected && userRejected}

          {userCompleted && userCompleted}

          {userFailed && userFailed}
        </div>
        {gig && gig.length === 0 && <MyEmptyContent from="gig" />}
      </div>
    </div>
  );
}
