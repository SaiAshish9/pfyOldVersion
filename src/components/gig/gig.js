/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Row, Col } from "antd";
// import GigCard from "./gigCard";
import Card from "../common/card";
import Filter from "../filters/filter";
import GigContext from "../../context/gigContext";
// import { GigStyled } from "./gigStyled";

const cardStyle = {
  display: "flex",
  justifyContent: "center"
};

const Gig = () => {
  const { gig } = useContext(GigContext);

  const gigCard = gig.map(gig => (
    <Col style={cardStyle} span={8} key={gig._id}>
      <Card gig={gig} />
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
              <h1 className="card-heading-one">Gigs</h1>
              <h2 className="card-heading-two">({gig.length} Results)</h2>
            </div>
          </div>
          {gigCard}
        </Col>
      </Row>
    </div>
  );
};
export default Gig;
