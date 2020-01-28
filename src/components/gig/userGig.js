import React from "react";
import { Tabs, Row, Col } from "antd";
// import { MyCard } from "../defaultStyled/defaultStyled";

const UserGig = () => {
  const { TabPane } = Tabs;
  return (
    <>
      <h1>My gigs</h1>
      <Tabs defaultActiveKey="1" style={{ height: 220 }}>
        <TabPane tab="Applied" key="1">
          <Row style={{ border: "1px solid" }}>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Selected" key="2">
          <Row style={{ border: "1px solid" }}>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Completed" key="3">
          <Row style={{ border: "1px solid" }}>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Rejected" key="4">
          <Row style={{ border: "1px solid" }}>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Approved" key="5">
          <Row style={{ border: "1px solid" }}>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
            <Col style={{ border: "1px solid" }} span={6}>
              <div>
                <div>image</div>
                <div>content</div>
                <div>content</div>
              </div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </>
  );
};

export default UserGig;
