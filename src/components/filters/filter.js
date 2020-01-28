import React from "react";
import { Collapse, Checkbox } from "antd";

const Filter = () => {
  const { Panel } = Collapse;
  return (
    <div>
      <Collapse style={{background:"#fff"}}>
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
