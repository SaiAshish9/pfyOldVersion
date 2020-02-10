import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import axios from "axios";
import Card from "../../common/card";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";
import { arrayValidation } from "../../validation/validation";

const UserGig = () => {
  const { TabPane } = Tabs;
  const [gig, setGig] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiURL}/mission/mymissions`, tokenHeader)
      .then(res => {
        // setGig(res.data.internships);
        console.log(res.data);
        setGig(res.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }, []);

  //! ---------------------------------- test ---------------------------------- */
  useEffect(() => {
    console.log(gig[0]);
    console.log(gig.length > 0 && gig[0].missionId);
    // console.log(gig[0]);
    // console.log(gig.missionId);
  }, [gig]);

  const handleTabChange = key => {
    console.log(key);
  };

  // const a = (data)=>{
  //   arrayValidation(applied) &&
  // applied.map((appliedGig, index) => {
  //   const userGig = appliedGig.missionId;
  //   console.log(userGig)
  //   return (
  //     <div style={{ margin: "20px 20px" }} key={index}>
  //       <Card gig={userGig}></Card>
  //     </div>
  //   );
  // });
  // }

  const applied =
    arrayValidation(gig) && gig.filter(myGig => myGig.status === 601);
  console.log(applied);
  const shortlisted =
    arrayValidation(gig) && gig.filter(myGig => myGig.status === 602);
  console.log(shortlisted);
  const selected =
    arrayValidation(gig) && gig.filter(myGig => myGig.status === 603);
  const rejected =
    arrayValidation(gig) && gig.filter(myGig => myGig.status === 604);
  const completed =
    arrayValidation(gig) && gig.filter(myGig => myGig.status === 605);
  const failed =
    arrayValidation(gig) && gig.filter(myGig => myGig.status === 606);

  const getCard = dataOfCard =>
    arrayValidation(dataOfCard) &&
    dataOfCard.map((userCardData, index) => {
      const userGig = userCardData.mission;
      console.log(userGig);
      return (
        <div style={{ margin: "20px 20px" }} key={index}>
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
    <div style={{ padding: "0px 80px", marginTop: "40px" }}>
      <h1>Gig</h1>
      <Tabs defaultActiveKey="1" onChange={handleTabChange} animated={false}>
        <TabPane tab="Applied" key="1">
          <div
            style={{
              display: "flex",
              flexFlow: "wrap",
              justifyContent: "center"
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
              justifyContent: "center"
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
              justifyContent: "center"
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
              justifyContent: "center"
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
              justifyContent: "center"
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
              justifyContent: "center"
            }}
          >
            {userFailed ? userFailed : "not confirmation"}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};
export default UserGig;
