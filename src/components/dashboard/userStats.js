import React from "react";
import { Row, Col } from "antd";

const UserStats = () => {
  return (
    <>
      <Row style={{ padding: "40px" }}>
        <div>Your Monthly Stats</div>
        <Row style={{ padding: "40px" }}>
          <Col className="myCol" span={8}>
            <div>
              <div>logo</div>
              <div>content</div>
              <div>Icon</div>
            </div>
          </Col>
          <Col className="myCol" span={8}>
            <div>
              <div>logo</div>
              <div>content</div>
              <div>Icon</div>
            </div>
          </Col>
          <Col className="myCol" span={8}>
          <div>
          <div>logo</div>
          <div>content</div>
          <div>Icon</div>
        </div>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default UserStats;
