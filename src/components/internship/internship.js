import { Col, Row, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import InternshipContext from "../../context/internshipContext";
import Card from "../common/card";
import Filter from "../filters/filter";
import { arrayValidation } from "../validation/validation";

const cardStyle = {
  display: "flex",
  justifyContent: "center",
};

const { Option } = Select;
export default function Internship() {
  const [internship, setInternship] = useState(InternshipContext);
  const [arrangeCard, setArrangeCard] = useState("latest");

  /* ----------------------- fetching Internship without status ----------------------- */
  useEffect(() => {
    axios
      .get(`internship/fetch`)
      .then(function (response) {
        const internshipData = response.data.internships;
        setInternship(internshipData);
        console.log(internshipData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  const myInternshipCard =
    arrayValidation(internship) &&
    internship.map((internship) => (
      <Col style={cardStyle} span={8} key={internship._id}>
        <Card internship={internship}></Card>
      </Col>
    ));

  const handleArrangingCard = (value) => {
    setArrangeCard(value);
  };

  return (
    <div className="card-container-main-block">
      <Row
        className="full-page"
        gutter={[0, 24]}
        style={{ marginTop: "0", marginBottom: 0 }}
      >
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

            {/* ----------------------------- custom element ----------------------------- */}
            <Select
              defaultValue="latest"
              placeholder="Select"
              onChange={handleArrangingCard}
            >
              <Option value="latest">Latest</Option>
              <Option value="popular">Popular</Option>
            </Select>
          </div>
          <div className="card-container">
            {myInternshipCard && myInternshipCard}
          </div>
        </Col>
      </Row>
    </div>
  );
}
