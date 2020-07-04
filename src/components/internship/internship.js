import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getInternshipWithoutStatus } from "../../api/internshipApi";
import { InternshipContext } from "../../store/internshipStore";
/* ---------------------------------- ***** --------------------------------- */

import Card from "../common/card";
import Filter from "../filters/filter";
import { arrayValidation } from "../validation/validation";
import EmptyContent from "../common/emptyContent";
import { tokenHeader } from "../../constant/tokenHeader";

const cardStyle = {
  display: "flex",
  justifyContent: "center",
};

const { Option } = Select;
export default function Internship() {
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

  const tokenHead = tokenHeader().headers.token;
  return (
    <div className="card-container-main-block">
      <Row
        className="full-page"
        gutter={[0, 24]}
        style={{
          padding: !!tokenHead
            ? "100px 60px 80px 60px"
            : "140px 60px 80px 60px",
        }}
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
            {internship.length === 0 && <EmptyContent from="internship" />}
          </div>
        </Col>
      </Row>
    </div>
  );
}
