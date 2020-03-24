import React from "react";
import { Collapse, Checkbox } from "antd";
import { useLocation } from "react-router-dom";
import "./filter.scss";

const Filter = () => {
  const { Panel } = Collapse;
  const location = useLocation().pathname;
  const isInternship = location === "/internships";
  const isGigs = location === "/gigs";

  return (
    <div className="filter-container">
      <div className="filter-text">
        <h1>Filters</h1>
      </div>
      <Collapse
        defaultActiveKey={
          (isGigs && ["1", "2", "3"]) || (isInternship && ["1"])
        }
      >
        <Panel header="Categories" key="1">
          {isGigs && (
            <>
              <Checkbox>Marketing</Checkbox>
              <Checkbox>Freelance</Checkbox>
              <Checkbox>Research & Auditing</Checkbox>
              <Checkbox>Business Development</Checkbox>
              <Checkbox>Data Moderation</Checkbox>
            </>
          )}
          {isInternship && (
            <>
              <Checkbox>Business Development</Checkbox>
              <Checkbox>Graphic Design</Checkbox>
              <Checkbox>Social Media Marketing</Checkbox>
              <Checkbox>Web Development</Checkbox>
              <Checkbox>Mobile App Development</Checkbox>
              <Checkbox>Human Resources</Checkbox>
              <Checkbox>Marketing</Checkbox>
              <Checkbox>Content Writing</Checkbox>
              <Checkbox>Legal</Checkbox>
              <Checkbox>Digital Marketing</Checkbox>
              <Checkbox>Campus Ambassador</Checkbox>
            </>
          )}
        </Panel>
        <Panel header="Work Location" key="2">
          {isGigs && (
            <>
              <Checkbox>Online</Checkbox>
              <Checkbox>Offline</Checkbox>
            </>
          )}
          {isInternship && (
            <>
              <Checkbox>inOffice</Checkbox>
              <Checkbox>Work From Home</Checkbox>
            </>
          )}
        </Panel>
        <Panel header="Monetary Benefit" key="3">
          <Checkbox>Paid</Checkbox>
          <Checkbox>Unpaid</Checkbox>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filter;
