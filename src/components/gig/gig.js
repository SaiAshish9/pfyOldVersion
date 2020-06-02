import { Col, Row, Select, Input } from "antd";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import Card from "../common/card";
import Filter from "../filters/filter";
import { arrayValidation } from "../validation/validation";

const cardStyle = {
  display: "flex",
  justifyContent: "center",
};
const { Option } = Select;

const Gig = () => {
  const [gig, setGig] = useState();
  const [arrangeCard, setArrangeCard] = useState("latest");

  const gigCard =
    arrayValidation(gig) &&
    gig.map((gig) => (
      <Col style={cardStyle} span={8} key={gig._id}>
        <Card gig={gig} />
      </Col>
    ));

  /* ----------------------- fetching gig without status ----------------------- */
  useEffect(() => {
    axios
      .get(`mission/fetch`)
      .then((response) => {
        const gigData = response.data.missions;
        setGig(gigData);
        console.log(gigData);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const handleArrangingCard = (value) => {
    setArrangeCard(value);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
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
              <h1 className="card-heading-one">Gigs</h1>
              {gig && (
                <h2 className="card-heading-two">({gig.length} Results)</h2>
              )}
            </div>
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
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="card-container">{gigCard && gigCard}</div>
        </Col>
      </Row>
    </div>
  );
};
export default Gig;
