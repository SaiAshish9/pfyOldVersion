import React from "react";
import { Typography } from "antd";
import ParcifyCircle from "../../assets/images/ParcifyCircle.png";
import CoinImg from "../../assets/svgs/rupee_1.svg"
import CalendarImg from "../../assets/svgs/calendar.svg"

const BusinessCard = () => (
  <div
    className="animate__animated animate__slideInLeft"
    style={{
      //   height: "14.43rem",
      width: "15.75rem",
      position: "absolute",
      left: "14%",
      top: "145%",
      zIndex: 4,
      background: "#fff",
      borderRadius: 28,
      padding: "1rem",
      boxShadow: "0 26px 40px 0 rgba(0, 0, 0, 0.08)",
    }}
  >
    <img
      src={ParcifyCircle}
      alt="Parcify"
      style={{
        width: "5rem",
        height: "5rem",
      }}
    />
    <Typography
      style={{
        fontSize: 18,
        lineHeight: 1.17,
        fontWeight: 600,
        color: "#333e49",
      }}
    >
      Business Development
    </Typography>
    <Typography
      style={{
        fontSize: 16,
        opacity:0.8,
        marginTop:5,
        lineHeight: 1.17,
        fontWeight: 600,
        color: "#333e49",
      }}
    >
      Pracify
    </Typography>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0",
      }}
    >
      <img src={CoinImg} alt="$" />
      <Typography
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          opacity: 0.9,
        }}
      >
        10000
      </Typography>
      <img src={CalendarImg} alt="@" />
      <Typography
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          opacity: 0.9,
        }}
      >
        2 Months
      </Typography>
    </div>
    <hr
      style={{
        width: "100%",
        opacity: 0.3,
        background: "rgba(0, 0, 0, 0.08)",
        borderRadius: 20,
      }}
    />
    <Typography style={{ 
      fontWeight: 600,
      fontSize:12,
      marginLeft:10,
      lineHeight:1.14
      }}>
      Apply Before : 10th Nov 2020
    </Typography>
  </div>
);

export default BusinessCard;
