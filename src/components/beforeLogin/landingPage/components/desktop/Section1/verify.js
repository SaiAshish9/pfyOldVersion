import React from 'react';
import Test from "../../assets/svgs/women.svg";
import Path from "../../assets/svgs/Path.svg";
import {Typography,Button} from 'antd'

const Verify = () => (
  <div
    style={{
      height: 133,
      width: 409,
      background: "#f3fefd",
      borderRadius: 23,
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <div
      style={{
        width: "60%",
      }}
    >
      <Typography
        style={{
          color: "#333743",
          fontWeight: 600,
          fontSize: 19,
          lineHeight:1.16,
          height:22,
          width:197
        }}
      >
        Verify Student Status
      </Typography>
      <Typography
        style={{
          fontSize: 12,
          color: "#525252",
          fontWeight: 600,
          width:207,
          height:30,
          margin:'5px 0',
          opacity:0.9,
          lineHeight:1.25
        }}
      >
        Verify your student status to access exclusive student offers
      </Typography>
      <Button
        type="link"
        style={{
          padding: 0,
          color: "#52bdb2",
          fontSize: 13,
          lineHeight: 1.23,
          fontWeight: "bolder",
        }}
      >
        VERIFY STATUS
      </Button>
    </div>
    <img
      src={Test}
      alt="verify"
      style={{
        position: "relative",
        left: "17%",
        zIndex: 3,
      }}
    />
    <div style={{ position: "relative", zIndex: 2, top: "17%" }}>
      <img src={Path} alt="path" />
    </div>
  </div>
);

export default Verify