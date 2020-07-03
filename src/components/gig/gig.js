import { Col, Row, Select, Input } from "antd";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import Card from "../common/card";
import Filter from "../filters/filter";
import { arrayValidation } from "../validation/validation";
import { GigProvider, GigContext } from "../../store/gigStore";
import { getGigWithoutStatus } from "../../api/gigApi";
import EmptyContent from "../common/emptyContent";

const cardStyle = {
  display: "flex",
  justifyContent: "center",
};

const { Option } = Select;

export default function Gig() {
  // const [gig, setGig] = useState();
  const { gig, dispatchGig } = GigContext();
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
    const source = axios.CancelToken.source();
    getGigWithoutStatus(dispatchGig);
    return () => {
      source.cancel();
    };
  }, []);

  const handleArrangingCard = (value) => {
    setArrangeCard(value);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <GigProvider>
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
            <div className="card-container">
              {gigCard && gigCard}
              {gig.length === 0 && <EmptyContent from="gig" />}
            </div>
          </Col>
        </Row>
      </div>
    </GigProvider>
  );
}
