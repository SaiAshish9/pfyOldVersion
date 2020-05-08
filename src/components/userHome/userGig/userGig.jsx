import { Tabs } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../common/card";
/* ---------------------------------- ***** --------------------------------- */
import { arrayValidation } from "../../validation/validation";

export default function UserGig() {
  const { TabPane } = Tabs;
  const [gig, setGig] = useState([]);

  useEffect(() => {
    axios
      .get(`mission/mymissions`)
      .then((res) => {
        console.log(res.data);
        setGig(res.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  //! ---------------------------------- test ---------------------------------- */
  useEffect(() => {
    console.log(gig[0]);
    console.log(gig.length > 0 && gig[0].missionId);
  }, [gig]);

  const handleTabChange = (key) => {
    console.log(key);
  };

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

  const getCard = (dataOfCard) =>
    arrayValidation(dataOfCard) &&
    dataOfCard.map((userCardData, index) => {
      const userGig = userCardData.mission;
      console.log(userGig);
      return (
        <div style={{ margin: "20px 20px 20px 1px" }} key={index}>
          <Card gig={userGig}></Card>
        </div>
      );
    });

  const userApplied = getCard(applied);
  const userShortlisted = getCard(shortlisted);
  const userSelected = getCard(selected);
  const userRejected = getCard(rejected);
  const userCompleted = getCard(completed);
  const userFailed = getCard(failed);

  return (
    <div
      style={{
        padding: "100px 60px 80px 60px",
        background: "#f3f3f3",
        minHeight: "680px",
      }}
    >
      <div
        className=""
        style={{
          backgroundColor: "#fff",
          padding: "35px 45px",
          borderRadius: "8px",
        }}
      >
        <h1>Gig</h1>
        <Tabs defaultActiveKey="1" onChange={handleTabChange} animated={false}>
          <TabPane tab="Applied" key="1">
            <div
              style={{
                display: "flex",
                flexFlow: "wrap",
                // justifyContent: "center"
              }}
            >
              {userApplied ? userApplied : "no applied internship"}
            </div>
          </TabPane>
          <TabPane tab="Shortlisted" key="2">
            <div
              style={{
                display: "flex",
                flexFlow: "wrap",
                // justifyContent: "center"
              }}
            >
              {userShortlisted ? userShortlisted : "not shortlisted"}
            </div>
          </TabPane>
          <TabPane tab="Selected" key="3">
            <div
              style={{
                display: "flex",
                flexFlow: "wrap",
                // justifyContent: "center"
              }}
            >
              {userSelected ? userSelected : "not selected"}
            </div>
          </TabPane>
          <TabPane tab="Rejected" key="4">
            <div
              style={{
                display: "flex",
                flexFlow: "wrap",
                // justifyContent: "center"
              }}
            >
              {userRejected ? userRejected : "not confirmation"}
            </div>
          </TabPane>
          <TabPane tab="Completed" key="5">
            <div
              style={{
                display: "flex",
                flexFlow: "wrap",
                // justifyContent: "center"
              }}
            >
              {userCompleted ? userCompleted : "not confirmation"}
            </div>
          </TabPane>
          <TabPane tab="Failed" key="6">
            <div
              style={{
                display: "flex",
                flexFlow: "wrap",
                // justifyContent: "center"
              }}
            >
              {userFailed ? userFailed : "not confirmation"}
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
