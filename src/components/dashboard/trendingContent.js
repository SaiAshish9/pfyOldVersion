import React from "react";
import { Row, Col } from "antd";
// import {MyCard} from '../defaultStyled/defaultStyled';


const TrendingContent = () => {
  return (
    <>
      <Row style={{ padding: "40px" }}>
        Trending on Pracify
        <Row style={{ padding: "40px" }}>
          <Col className="myCol" span={6}>
            <div>
              <div>image</div>
              <div>content</div>
              <div>content</div>
            </div>
          </Col>
          <Col className="myCol" span={6}>
            <div>
              <div>image</div>
              <div>content</div>
              <div>content</div>
            </div>
          </Col>
          <Col className="myCol" span={6}>
            <div>
              <div>image</div>
              <div>content</div>
              <div>content</div>
            </div>
          </Col>
          <Col className="myCol" span={6}>
            <div>
              <div>image</div>
              <div>content</div>
              <div>content</div>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default TrendingContent;
