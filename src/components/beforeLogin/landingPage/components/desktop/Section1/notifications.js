import React from "react";
import {  Typography } from "antd";
import AccountImg from "../../assets/svgs/account.svg";
import BriefcaseImg from "../../assets/svgs/briefcase.svg";
import AwardImg from "../../assets/svgs/award.svg";
// import ScrollAnimation from "react-animate-on-scroll";
import {AnimatedOnScroll} from 'react-animated-css-onscroll'

const Notifications = [
  {
    img: AccountImg,
    text: "Please verify your student status on Pracify",
  },
  {
    img: BriefcaseImg,
    text: "You have been selected for Marketing Internship",
  },
  {
    img: AwardImg,
    text: "You have been selected for Product Testing Gig",
  },
];

const BusinessCard = () => (

    <div
      className="animate__animated animate__slideInRight"
      style={{
        // height:236 ,
        width: 296,
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        right: "14%",
        top: "144%",
        zIndex: 4,
        background: "#fff",
        borderRadius: 28,
        padding: "1rem",
        boxShadow: "0 26px 40px 0 rgba(0, 0, 0, 0.08)",
      }}
    >
      <Typography
        style={{
          fontSize: "0.8rem",
          fontWeight: 600,
          marginLeft: 10,
          color: "#333e49",
          marginBottom: 20,
        }}
      >
        Notifications
      </Typography>

      {Notifications.map((i, k) => (
        <div key={k}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img src={i.img} alt={k} style={{ width: "18%" }} />
            <Typography
              style={{
                fontSize: 9,
                fontWeight: 600,
                textAlign: "start",
                width: "82%",
              }}
            >
              {i.text}
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
        </div>
      ))}
    </div>
);

export default BusinessCard;
