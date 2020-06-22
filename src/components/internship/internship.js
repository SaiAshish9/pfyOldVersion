import { Col, Row, Select, Input } from "antd";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
// import InternshipContext from "../../context/internshipContext";
import Card from "../common/card";
import Filter from "../filters/filter";
import { arrayValidation } from "../validation/validation";
import { getInternshipWithoutStatus } from "../../api/internshipApi";
import { InternshipContext } from "../../store/internshipStore";

const cardStyle = {
  display: "flex",
  justifyContent: "center",
};

const { Option } = Select;
export default function Internship() {
  // const [internship, setInternship] = useState(InternshipContext);
  const { internship, dispatchInternship } = InternshipContext();
  const [arrangeCard, setArrangeCard] = useState("latest");

  /* ----------------------- fetching Internship without status ----------------------- */
  useEffect(() => {
    const source = axios.CancelToken.source();
    getInternshipWithoutStatus(dispatchInternship);
    return () => {
      source.cancel();
    };
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
            <div className="card-heading-result-box">
              <h1 className="card-heading-one">Internships</h1>
              <h2 className="card-heading-two">
                ({internship && internship.length} Results)
              </h2>
            </div>

            {/* ----------------------------- custom element ----------------------------- */}
            <div className="filter-input">
              <span className="sort-content">
                <span className="sort-by-text">Sort By :</span>
                <Select
                  className=""
                  defaultValue="latest"
                  placeholder="Select a person"
                  onChange={handleArrangingCard}
                >
                  <Option value="latest">Latest</Option>
                  <Option value="popular">Popular</Option>
                </Select>
              </span>

              <Input
                className="search-by-company"
                prefix={<SearchOutlined />}
                placeholder="Search by Company Name"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>
          <div className="card-container">
            {myInternshipCard && myInternshipCard}
          </div>
        </Col>
      </Row>
    </div>
  );
}
