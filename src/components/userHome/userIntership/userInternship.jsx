import { Tabs } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MyEmptyContent from "../../common/myEmptyContent";
/* ---------------------------------- ***** --------------------------------- */
import Card from "../../common/card";
import UserStatusCard from "../userStatusCard";
import { arrayValidation } from "../../validation/validation";
import { tokenHeader } from "../../../constant/tokenHeader";

const UserInternship = () => {
  const [internship, setInternship] = useState();

  useEffect(() => {
    axios
      .get(`internship/myinternships`, tokenHeader())
      .then((res) => {
        setInternship(res.data.internships);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const applied =
    arrayValidation(internship) &&
    internship.filter((myInternship) => myInternship.status === 300);
  console.log(applied);
  const shortlisted =
    arrayValidation(internship) &&
    internship.filter((myInternship) => myInternship.status === 301);
  const selected =
    arrayValidation(internship) &&
    internship.filter((myInternship) => myInternship.status === 302);
  const rejected =
    arrayValidation(internship) &&
    internship.filter((myInternship) => myInternship.status === 303);

  console.log(arrayValidation(applied));

  const getCard = (dataOfCard, status) =>
    arrayValidation(dataOfCard) &&
    dataOfCard.map((userCardData, index) => {
      console.log("userCardData", userCardData);
      const userInternship = userCardData.internship;
      console.log("userInternship", userInternship);
      return (
        <UserStatusCard
          aboutCard={userInternship}
          status={status}
          key={index}
        ></UserStatusCard>
      );
    });

  const userApplied = getCard(applied, "Applied");
  const userShortlisted = getCard(shortlisted, "Shortlisted");
  const userSelected = getCard(selected, "Selected");
  const userRejected = getCard(rejected, "Rejected");

  return (
    <div className="userStatus-main-block">
      <div className="userStatus-content-block">
        <h1 className="userStatus-head">My Internships</h1>
        <div className="userStatus-card-main-block">
          {userApplied && userApplied}
          {userShortlisted && userShortlisted}
          {userSelected && userSelected}
          {userRejected && userRejected}
        </div>
        {internship && internship.length === 0 && (
          <MyEmptyContent from="internship" />
        )}
      </div>
    </div>
  );
};
export default UserInternship;
