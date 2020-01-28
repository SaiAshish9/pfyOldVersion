import React from "react";
import { Row, Col } from "antd";
// import {MyCard} from '../defaultStyled/defaultStyled';


const RecommendedForUser = () => {
  return (
    <>
      <Row style={{ padding: "40px" }}>
      <div>Recommended For you</div>
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

export default RecommendedForUser;
