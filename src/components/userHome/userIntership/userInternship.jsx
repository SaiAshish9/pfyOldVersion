import React from "react";
import axios from "axios";
import { tokenHeader } from "../../../constant/tokenHeader";
import { apiURL } from "../../../constant/url";
import { Tabs } from "antd";

const UserInternship = () => {
  const { TabPane } = Tabs;
  axios
    .get(`${apiURL}/internship/myinternships`, tokenHeader)
    .then(res => {
      console.log(res.data);
    })
    .catch(e => {
      console.log(e.response);
    });

  const handleTabChange = key => {
    console.log(key);
  };

  return (
    <div style={{ padding: "0px 80px", marginTop: "40px" }}>
      <h1>internship</h1>
      <Tabs defaultActiveKey="1" onChange={handleTabChange} animated={false}>
        <TabPane tab="Applied" key="1">
          Applied
        </TabPane>
        <TabPane tab="Shortlisted" key="2">
          Shortlisted
        </TabPane>
        <TabPane tab="Selected" key="3">
          Selected
        </TabPane>
        <TabPane tab="Rejected" key="4">
          Rejected
        </TabPane>
      </Tabs>
    </div>
  );
};
export default UserInternship;
