import React from "react";
import { Collapse, Checkbox } from "antd";
import "./filter.scss";

const Filter = () => {
  const { Panel } = Collapse;
  return (
    <div className="filter-container">
      <div className="filter-text">
        <h1>Filters</h1>
      </div>
      <Collapse
      // style={{ background: "#fff", borderRadius: "8px" }}
      >
        <Panel header="Categories" key="1">
          <Checkbox>finance</Checkbox>
        </Panel>
        <Panel header="Work Location" key="2">
          <Checkbox>in office</Checkbox>
        </Panel>
        <Panel header="City" key="3">
          <Checkbox>delhi</Checkbox>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filter;
