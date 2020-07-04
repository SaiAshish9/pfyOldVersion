import React from "react";
import { Row, Col } from "antd";
import PinkGrid from "../../../assets/svgs/pinkGrid";
// import Wallet from "../../assets/svgs/wallet";
// import Verify from "./verify";
// import BusinessCard from "./businessCard";
// import NotificationCard from "./notifications";
// import ProfileCard from "./profile";
import VerifyStatus from "../../../assets/test1/verifyStatus.png";
import Card from "../../../assets/test1/card.png";
import BusinessDev from "../../../assets/test1/businessDev.png";
import Notifications from "../../../assets/test1/notifications.png";
import ProfileScore from "../../../assets/test1/profileScore.png";

const Section1 = () => (
  <Row
    align="center"
    style={{
      height: 408,
      margin: "32vh auto 80vh",
      width: 922,
    }}
  >
    <div
      className="animate__animated animate__zoomIn"
      style={{
        position: "absolute",
        left: 220,
        zIndex: 1,
        //    bottom: "-2%"
      }}
    >
      <PinkGrid />
    </div>

    <Col
      style={{
        height: 408,
        width: 922,
        border: "10px solid #f7f7f7",
        borderBottom: "none",
        borderRadius: "2rem",
        position: "relative",
        padding: "3rem",
        zIndex: 2,
        background: "#fff",
        marginTop: "10vh",
      }}
    >
      <img
        src={VerifyStatus}
        alt="Verify Status"
        data-aos="slide-right"
        // className="animate__animated animate__slideInLeft"
      />
      {/* <Verify /> */}
    </Col>
    <div
      // className="animate__animated animate__slideInRight"
      style={{
        position: "absolute",
        right: "20%",
        zIndex: 4,
        //    bottom: "-2%"
      }}
    >
      <img data-aos="slide-left" src={Card} alt="card" />
      {/* <Wallet /> */}
    </div>

    {/* <BusinessCard /> */}

    <img
      src={BusinessDev}
      data-aos="slide-right"
      style={{
        position: "absolute",
        left: "14%",
        top: `${window.screen.height + 200}px`,
        zIndex: 4,
      }}
      alt="business"
      // className="animate__animated animate__slideInLeft"
    />

    {/* <ProfileCard /> */}

    <img
      src={ProfileScore}
      style={{
        position: "absolute",
        right: "40%",
        top: `${window.screen.height + 180}px`,
        zIndex: 4,
      }}
      alt="profile"
    />

    {/* <NotificationCard /> */}

    <div
      style={{
        width: 235,
        height: 235,
        opacity: 0.1,
        backgroundColor: "#ea907a",
        borderRadius: "50%",
        position: "relative",
        left: "55%",
        // bottom: "10%",
      }}
    ></div>

    <img
      src={Notifications}
      style={{
        position: "absolute",
        top: `${window.screen.height + 200}px`,
        right: "10%",
        zIndex: 4,
      }}
      alt="notifications"
      data-aos="slide-left"
      // className="animate__animated animate__slideInRight"
    />
  </Row>
);

export default Section1;
