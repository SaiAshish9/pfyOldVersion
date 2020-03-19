/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Row, Col, Select } from "antd";
import { apiURL } from "../../constant/url";

import Card from "../common/card";
import Filter from "../filters/filter";
import { arrayValidation } from "../validation/validation";

import GigContext from "../../context/gigContext";

const cardStyle = {
  display: "flex",
  justifyContent: "center"
};
const { Option } = Select;

const Gig = () => {
  const [gig, setGig] = useState();
  const [arrangeCard, setArrangeCard] = useState("latest");

  const gigCard =
    arrayValidation(gig) &&
    gig.map(gig => (
      <Col style={cardStyle} span={8} key={gig._id}>
        <Card gig={gig} />
      </Col>
    ));

  /* ----------------------- fetching gig without status ----------------------- */
  useEffect(() => {
    axios
      .get(`${apiURL}/mission/fetch`)
      .then(function(response) {
        // handle success
        const gigData = response.data.missions;
        setGig(gigData);
        console.log(gigData);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {});
  }, []);

  const handleArrangingCard = value => {
    setArrangeCard(value);
  };

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
              <h1 className="card-heading-one">Gigs</h1>
              {gig && (
                <h2 className="card-heading-two">({gig.length} Results)</h2>
              )}
            </div>
            <Select
              defaultValue="latest"
              placeholder="Select a person"
              onChange={handleArrangingCard}
            >
              <Option value="latest">Latest</Option>
              <Option value="popular">Popular</Option>
            </Select>
          </div>
          <div className="card-container">{gigCard && gigCard}</div>
        </Col>
      </Row>
    </div>
  );
};
export default Gig;
