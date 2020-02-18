/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";

import { Row, Col, Select } from "antd";
import InternshipContext from "../../context/internshipContext";
// import InternshipCard from "./internshipCard";
import Filter from "../filters/filter";
import Card from "../common/card";

const cardStyle = {
  display: "flex",
  justifyContent: "center"
};

const Internship = () => {
  const { internship } = useContext(InternshipContext);
  const myInternshipCard =
    !!internship &&
    internship.map(internship => (
      <Col style={cardStyle} span={8} key={internship._id}>
        <Card internship={internship}></Card>
      </Col>
    ));

  return (
    <div className="card-container">
      <Row className="full-page" gutter={[0, 24]}>
        <Col className="filter-container" style={{ padding: "0px" }} span={6}>
          <Filter />
        </Col>
        <Col span={18} className="card-holder-box">
          <div className="card-heading-box">
            <div style={{ display: "flex" }}>
              <h1 className="card-heading-one">Internships</h1>
              <h2 className="card-heading-two">
                ({internship.length} Results)
              </h2>
            </div>
          </div>
          {myInternshipCard}
        </Col>
      </Row>
    </div>
  );
};
export default Internship;
