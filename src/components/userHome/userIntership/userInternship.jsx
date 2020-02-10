import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../common/card";
import { tokenHeader } from "../../../constant/tokenHeader";
import { apiURL } from "../../../constant/url";
import { Tabs, Row, Col } from "antd";
import { arrayValidation } from "../../validation/validation";
import "./userInternship.css";

const UserInternship = () => {
  const { TabPane } = Tabs;
  const [internship, setInternship] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiURL}/internship/myinternships`, tokenHeader)
      .then(res => {
        setInternship(res.data.internships);
      })
      .catch(e => {
        console.log(e.response);
      });
  }, []);

  //! ---------------------------------- test ---------------------------------- */
  useEffect(() => {
    console.log(internship);
    console.log(internship.length>0 && internship[0].status);
    // const a = internship[0]

    // console.log(a.status);
  }, [internship]);

  const handleTabChange = key => {
    console.log(key);
  };

  const applied =
    arrayValidation(internship) &&
    internship.filter(myInternship => myInternship.status === 300);
  console.log(applied);
  const shortlisted =
    arrayValidation(internship) &&
    internship.filter(myInternship => myInternship.status === 301);
  const selected =
    arrayValidation(internship) &&
    internship.filter(myInternship => myInternship.status === 302);
  const rejected =
    arrayValidation(internship) &&
    internship.filter(myInternship => myInternship.status === 303);

  console.log(arrayValidation(applied));

  const userApplied =
    arrayValidation(applied) &&
    applied.map((appliedInternship, index) => {
      const userInternship = appliedInternship.internship;
      return (
        <div style={{ margin: "20px 20px" }} key={index}>
          <Card internship={userInternship}></Card>
        </div>
      );
    });

  const userShortlisted =
    arrayValidation(shortlisted) &&
    shortlisted.map((shortlistedInternship, index) => {
      const userInternship = shortlistedInternship.internship;
      return (
        <div style={{ margin: "20px 20px" }} key={index}>
          <Card internship={userInternship}></Card>
        </div>
      );
    });

  const userSelected =
    arrayValidation(selected) &&
    selected.map((selectedInternship, index) => {
      const userInternship = selectedInternship.internship;
      return (
        <div style={{ margin: "20px 20px" }} key={index}>
          <Card internship={userInternship}></Card>
        </div>
      );
    });

  const userRejected =
    arrayValidation(rejected) &&
    rejected.map((rejectedInternship, index) => {
      const userInternship = rejectedInternship.internship;
      return (
        <div style={{ margin: "20px 20px" }} key={index}>
          <Card internship={userInternship}></Card>
        </div>
      );
    });

  return (
    <div style={{ padding: "0px 80px", marginTop: "40px" }}>
      <h1>Internship</h1>
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
      </Tabs>
    </div>
  );
};
export default UserInternship;
