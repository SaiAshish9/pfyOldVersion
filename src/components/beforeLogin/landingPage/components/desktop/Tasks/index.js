import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
// import JobsComponent from "../../assets/svgs/jobsComplete";
import ArrowBow from "../../../assets/svgs/arrowBow";
// import WorkRm from "../../assets/svgs/workRm";
import WorkRemotely from "../../../assets/test1/workRemotely.svg";
import Jobs from "../../../assets/test1/jobs.svg";
import Payments from "../../../assets/test1/payments.svg";
import Mobile from "../../../assets/test/mobile.png";
import MobileBg from "../../../assets/test/mobileBg.svg";
import MobileGrid from "../../../assets/test/mobileGrid.svg";
import MobileInclinedBg from '../../../assets/test/mobileInclinedBg.svg'

const Tasks = () => {
  const [selected, setSelected] = useState(0);

  const options = [
    {
      title: "Jobs for Everyone",
      description: "Find and apply to jobs that match your skills & interest.",
      icon: Jobs,
    },
    {
      title: "Work Remotely",
      description:
        "Work on the go using your smartphone or computer according to your own schedule. ",
      icon: WorkRemotely,
    },
    {
      title: "Fast & Secure Payments",
      description:
        "Get paid directly into your Pracify wallet after completing the work successfully.",
      icon: Payments,
    },
  ];

  return (
    <Row style={{ margin: "15vh 0" }}>
      <Col span={10}>
        <div>
          <img src={MobileBg} alt="bg" />
          <img
            src={MobileGrid}
            alt="grid"
            style={{
              position: "absolute",
              left: "10vw",
              top: "1rem",
            }}
          />
          <img
            src={Mobile}
            alt="grid"
            style={{
              position: "absolute",
              left: "12vw",
              top: "3.6rem",
            }}
          />
          {/* <JobsComponent /> */}
        </div>
        <Row
          data-aos="slide-right"
          data-aos-offset="500"
          // className="animate__animated animate__slideInLeft"
          style={{ position: "relative", bottom: "18rem", left: "4rem" }}
        >
          <ArrowBow />
        </Row>

        <img
          src={MobileInclinedBg}
          alt="grid"
          style={{
            position: "absolute",
            left: "23rem",
            zIndex:-1,
            bottom: "12rem",
          }}
        />
      </Col>
      <Col
        style={{
          paddingLeft: "4rem",
          paddingTop: "7rem",
          width: "45%",
          marginLeft: "10%",
        }}
      >
        <Typography
          style={{
            fontSize: 26,
            // fontWeight: "bolder",
            color: "#333e49",
            fontFamily: "Inter-SemiBold",
            fontWeight: 600,
            lineHeight: "36px",
            textAlign: "start",
            fontStretch: "normal",
          }}
        >
          With Pracify you can work from
          <br />
          wherever you want,whenever you want.
        </Typography>
        <Typography
          style={{
            margin: "10px 0",
            fontSize: 20,
            fontFamily: "Inter-Medium",
            fontWeight: 500,
            lineHeight: "40px",
            fontStretch: "normal",
            fontStyle: "normal",
          }}
        >
          Get paid for completing tasks online
        </Typography>

        <Col style={{ marginTop: "2rem" }}>
          {options.map((i, k) => (
            <Col
              key={k}
              onClick={() => {
                setSelected(k);
              }}
              style={{
                padding: "1.5rem 2rem",
                borderTop: "1px solid #ea907a",
                width: "90%",
                borderBottom: k === 2 && "1px solid #ea907a",
                cursor: "pointer",
                // marginRight:'20%'
              }}
            >
              <Row
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    background: "#fdf4f1",
                    height: "2.5rem",
                    width: "2.5rem",
                    borderRadius: "50%",
                    marginRight: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* {i.icon} */}
                  <img alt={k} src={i.icon} />
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Inter-SemiBold",
                    color: "#ea907a",
                    lineHeight: "36px",
                    fontSize: 22,
                  }}
                >
                  {i.title}
                </Typography>
              </Row>
              {selected === k && (
                <Typography
                  className="animate__animated animate__fadeIn"
                  style={{
                    color: "#9ba0a6",
                    fontFamily: "Inter-Medium",
                    opacity: 0.6,
                    fontSize: 18,
                    marginTop: 5,
                    marginLeft: "3.8rem",
                    lineHeight: "26px",
                  }}
                >
                  {i.description}
                </Typography>
              )}
            </Col>
          ))}
        </Col>
      </Col>
    </Row>
  );
};

export default Tasks;
