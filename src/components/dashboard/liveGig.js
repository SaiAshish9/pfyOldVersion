import React from "react";
import { Row, Col } from "antd";
// import {MyCard} from '../defaultStyled/defaultStyled';

const LiveGig = () => {
  return (
    <>
      <Row style={{ padding: "40px" }}>
      <div>Live Gigs</div>
        <Row style={{ padding: "40px" }}>
          <Col className="myCol" span={6}>
            <div>
              <div>image</div>
              <div>content</div>
              <div>progress Bar</div>
            </div>
          </Col>
          <Col className="myCol" span={6}>
            <div>
              <div>image</div>
              <div>content</div>
              <div>progress Bar</div>
            </div>
          </Col>
          <Col className="myCol" span={6}>
            <div>
              <div>image</div>
              <div>content</div>
              <div>progress Bar</div>
            </div>
          </Col>
          <Col className="myCol" span={6}>
            <div>
              <div>image</div>
              <div>content</div>
              <div>progress Bar</div>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default LiveGig;
