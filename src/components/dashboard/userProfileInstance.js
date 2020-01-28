import React from "react";
import { Row, Col } from "antd";
import { UserProfileInstanceStyled } from "./dashboardStyled";

const UserProfileInstance = () => {
  return (
    <UserProfileInstanceStyled>
      <Row style={{ padding: "40px" }}>
        <Col className="myCol" span={12}>
          <div>
            <div>Image</div>
            <div>content</div>
          </div>
        </Col>
        <Col className="myCol" span={12}>
          <div>
            <div>heading</div>
            <div>
              <div>image</div>
              <div>content</div>
              <div>logo</div>
            </div>
          </div>
        </Col>
      </Row>
    </UserProfileInstanceStyled>
  );
};

export default UserProfileInstance;
