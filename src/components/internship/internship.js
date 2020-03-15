/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Row, Col, Select } from "antd";
import InternshipContext from "../../context/internshipContext";
import Filter from "../filters/filter";
import Card from "../common/card";
import { arrayValidation } from "../validation/validation";

const cardStyle = {
  display: "flex",
  justifyContent: "center"
};
const { Option } = Select;
const Internship = () => {
  const [internship, setInternship] = useState(InternshipContext);
  const [arrangeCard, setArrangeCard] = useState("latest");

  useEffect(() => {
    axios
      .get("http://35.154.129.241:5000/internship/fetch")
      .then(function(response) {
        const internshipData = response.data.internships;
        setInternship(internshipData);
        console.log(internshipData);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {});
  }, []);

  const myInternshipCard =
    arrayValidation(internship) &&
    internship.map(internship => (
      <Col style={cardStyle} span={8} key={internship._id}>
        <Card internship={internship}></Card>
      </Col>
    ));

  const handleArrangingCard = value => {
    setArrangeCard(value);
  };

  useEffect(() => {
    console.log(arrangeCard);
  }, [arrangeCard]);

  return (
    <div className="card-container">
      <Row className="full-page" gutter={[0, 24]}>
        <Col className="filter-container" style={{ padding: "0px" }} span={6}>
          <Filter />
        </Col>
        <Col
          span={18}
          className="card-holder-box"
          style={{ paddingTop: "0px" }}
        >
          <div className="card-heading-box">
            <div style={{ display: "flex" }}>
              <h1 className="card-heading-one">Internships</h1>
              <h2 className="card-heading-two">
                ({internship && internship.length} Results)
              </h2>
            </div>

            <Select
              defaultValue="latest"
              placeholder="Select a person"
              onChange={handleArrangingCard}
              // Style={{ textIndent: "16px" }}
            >
              <Option value="latest">Latest</Option>
              <Option value="popular">Popular</Option>
            </Select>
          </div>
          {myInternshipCard && myInternshipCard}
        </Col>
      </Row>
    </div>
  );
};
export default Internship;
