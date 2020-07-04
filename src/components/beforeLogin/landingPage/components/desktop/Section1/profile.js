import React from "react";
import { Typography, Progress } from "antd";
import ProfileCardImg from "../../assets/svgs/profile.svg";
import { IoMdMail } from "react-icons/io";
import { MdPhone, MdLocationOn } from "react-icons/md";

const BusinessCard = () => (
  <React.Fragment>
    <div>
      <div
        style={{
          height: "24.5625rem",
          width: "15.75rem",
          position: "absolute",
          right: "41%",
          top: "138%",
          zIndex: 3,
          background: "#ea907a",
          borderRadius: 20,
        }}
      ></div>
      <div
        style={{
          padding: "1rem 0.5rem",
          height: "24.5625rem",
          width: "15.75rem",
          position: "absolute",
          right: "42%",
          top: "140%",
          zIndex: 4,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          borderRadius: 28,
          boxShadow: "0 26px 40px 0 rgba(0, 0, 0, 0.08)",
        }}
      >
        <div
          style={{
            boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
            width: "7rem",
            height: "7rem",
            borderRadius: "50%",
            padding: 0,
            background: `url(${ProfileCardImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            background: "#f5f5f5",
            borderRadius: 7,
            height: "10px",
            width: "139px",
          }}
        ></div>
        <Typography
          style={{
            color: "#333e49",
            fontWeight: 600,
            lineHeight: 1.19,
            opacity: 0.8,
            fontSize: 17,
          }}
        >
          Shivam Malhotra
        </Typography>
        <Typography
          style={{
            fontSize: 12,
            color: "#333e49",
            opacity: 0.8,
            display: "flex",
            alignItems: "center",
          }}
        >
          <IoMdMail size={16} style={{ marginRight: 5, opacity: 0.9 }} />
          shivam@pracify.com
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontSize: 12,
              color: "#333e49",
              opacity: 0.8,
              display: "flex",
              alignItems: "center",
              margin: "0 10px",
            }}
          >
            <MdPhone size={16} style={{ marginRight: 5, opacity: 0.9 }} />
            9582033304
          </Typography>
          <Typography
            style={{
              fontSize: 12,
              color: "#333e49",
              opacity: 0.8,
              display: "flex",
              alignItems: "center",
              margin: "0 10px",
            }}
          >
            <MdLocationOn size={16} style={{ marginRight: 5, opacity: 0.9 }} />
            New Delhi
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            padding: "0.5rem 1rem",
            boxShadow: "0 9px 39px 0 rgba(0, 0, 0, 0.08)",
            borderRadius: 6,
            marginBottom: 10,
            width:210
          }}
        >
          <Typography
            style={{
              color: " #333e49",
              fontWeight: 600,
              fontSize: 12,
              opacity:0.8,
              lineHeight: 1.23,
              height:16
            }}
          >
            Gig Profile Score is 70%
          </Typography>
          <Progress showInfo={false} strokeColor={"#7aea7a"} 
          strokeWidth={15}
          style={{margin:2}}
          percent={70} />
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default BusinessCard;
