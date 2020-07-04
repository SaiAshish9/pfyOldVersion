import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import Option1 from "../../../assets/test1/selection.png";
import Option2 from "../../../assets/test1/submission.png";
import Option3 from "../../../assets/test1/payment.png";
import BlueGrid from "../../../assets/svgs/blueGrid";
import BlueBg from "../../../assets/test1/blue.svg";

const images = [Option1, Option2, Option3];

const ActiveImg1 = () => (
  <img
    style={{ position: "relative", zIndex: 5 }}
    alt="1"
    data-aos="zoom-in"
    // className="animate__animated animate__zoomIn"
    src={images[0]}
  />
);

const ActiveImg2 = () => (
  <img
    style={{ position: "relative", zIndex: 5 }}
    alt="2"
    data-aos="zoom-in"
    // className="animate__animated animate__zoomIn"
    src={images[1]}
  />
);

const ActiveImg3 = () => (
  <img
    alt="3"
    style={{ position: "relative", zIndex: 5, bottom: "3rem" }}
    // className="animate__animated animate__zoomIn"
    data-aos="zoom-in"
    src={images[2]}
  />
);

const InActiveImg1 = () => (
  <img
    alt="i1"
    // data-aos="zoom-in"
    // className="animate__animated animate__backInRight"
    style={{
      opacity: 0.7,
      width: 248,
      height: 225,
      objectFit: "contain",
    }}
    src={images[0]}
  />
);

const InActiveImg2 = ({ selected }) => (
  <img
    alt="i2"
    // data-aos="zoom-in"
    // className="animate__animated animate__backInRight"
    style={{
      opacity: 0.7,
      position: "relative",
      bottom: selected === 0 && "3rem",
      width: "70%",
    }}
    src={images[1]}
  />
);

const InActiveImg3 = () => (
  <img
    alt="i3"
    // data-aos="zoom-in"
    // className="animate__animated animate__backInRight"
    style={{
      opacity: 0.7,
      width: 223.2,
      height: 221,
      objectFit: "contain",
    }}
    // className="animate__animated animate__fadeIn"
    src={images[2]}
  />
);

const Section3 = () => {
  const [selected, setSelected] = useState(0);
  // const [unselected, setUnselected] = useState([0, 2]);

  const options = [
    {
      name: "Selection",
      color: "#ff5e16",
    },
    {
      name: "Submission",
      color: "#4385e0",
    },
    {
      name: "Payment",
      color: "#4d52d1",
    },
  ];

  return (
    <Row style={{ marginBottom: "17rem" }}>
      <Col
        span={12}
        style={{
          paddingLeft: " 5rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <Typography
            style={{
              fontWeight: 600,
              color: options[selected]["color"],
              fontFamily: "Inter-SemiBold",
              lineHeight: "42px",
              fontSize: 38,
            }}
          >
            Hassle Free.
            <span
              style={{
                fontWeight: 600,
                fontSize: 38,
                color: "#333e49",
                fontFamily: "Inter-SemiBold",
                // opacity: 0.9,
                lineHeight: "42px",
                marginLeft: 10,
              }}
            >
              Working has never <br />
              been this easier and fun.
            </span>
          </Typography>
        </div>
        <div style={{ marginTop: "10vh", display: "flex" }}>
          <Col style={{ minHeight: "30vh" }}>
            <Row
              className={selected === 0 && "animate__animated animate__pulse"}
              style={{
                width: "1rem",
                height: selected === 0 ? "5.5rem" : "1rem",
                background: "#ff5e16",
                borderRadius: selected === 0 ? 9 : "50%",
                margin: "10px 0",
              }}
            ></Row>
            <Row
              className={selected === 1 && "animate__animated animate__pulse"}
              style={{
                width: "1rem",
                height: selected === 1 ? "5.5rem" : "1rem",
                background: "#4385e0",
                borderRadius: selected === 1 ? 9 : "50%",
                margin: "10px 0",
              }}
            ></Row>
            <Row
              className={selected === 2 && "animate__animated animate__pulse"}
              style={{
                width: "1rem",
                height: selected === 2 ? "5.5rem" : "1rem",
                background: "#4d52d1",
                borderRadius: selected === 2 ? 9 : "50%",
                margin: "10px 0",
                transition: selected === 2 && "0.4s ease-out-in",
              }}
            ></Row>
          </Col>
          <Col style={{ marginLeft: "10%" }}>
            <Row>
              {options.map((i, k) => {
                if (k !== selected) {
                  return (
                    <Typography
                      onClick={() => {
                        // setUnselected([0, 1, 2].filter((x) => x !== k));
                        setSelected(k);
                      }}
                      style={{
                        color: "#b8b8b8",
                        fontSize: 20,
                        lineHeight: "22px",
                        fontWeight: 600,
                        fontFamily: "Inter-SemiBold",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                    >
                      {i.name}
                    </Typography>
                  );
                } else {
                  return (
                    <Col>
                      <Typography
                        onClick={() => {
                          setSelected(k);
                        }}
                        style={{
                          color: i.color,
                          fontSize: 20,
                          lineHeight: "22px",
                          fontWeight: 600,
                          fontFamily: "Inter-SemiBold",
                          margin: "0 10px",
                          cursor: "pointer",
                        }}
                      >
                        {i.name}
                      </Typography>
                      <hr
                        style={{
                          background: i.color,
                          width: "30%",
                          height: 3,
                        }}
                      />
                    </Col>
                  );
                }
              })}
            </Row>
            <Typography
              style={{
                color: "#3d3d3d",
                fontSize: 20,
                lineHeight: "32px",
                fontWeight: 600,
                // width: "70%",
                fontFamily: "Inter-SemiBold",
                marginTop: 10,
              }}
            >
              {selected === 0 ? (
                <div>
                  <Typography>Apply to jobs that match your skills</Typography>
                  <Typography>
                    and interests at a single click on the
                  </Typography>
                  <Typography>mobile app or website.</Typography>
                </div>
              ) : selected === 1 ? (
                <div>
                  <Typography>Complete tasks before the deadline</Typography>
                  <Typography>and submit proof of work completed</Typography>
                  <Typography>on the mobile app or website.</Typography>
                </div>
              ) : (
                <div>
                  <Typography>Get paid directly into Pracify</Typography>
                  <Typography>wallet. Transfer your earnings into</Typography>
                  <Typography>your Paytm or Bank account.</Typography>
                </div>
              )}
            </Typography>
          </Col>
        </div>
      </Col>
      <Col span={2} style={{ position: "relative", bottom: "5rem" }}>
        <BlueGrid />
      </Col>
      <Col span={10}>
        <img
          alt="bg"
          src={BlueBg}
          style={{
            position: "absolute",
            right: 0,
            top: "-5rem",
          }}
        />
        <div style={{ position: "absolute", right: "17rem", top: "4rem" }}>
          {/* {unselected[0] === 0 ? (
            <InActiveImg1 />
          ) : unselected[0] === 1 ? (
            <InActiveImg2 />
          ) : (
            <InActiveImg3 />
          )}{" "} */}
          {selected === 0 ? <ActiveImg1 /> : <InActiveImg1 />}
        </div>
        <div
          style={{
            position: "absolute",
            right: "3rem",
            zIndex: 1,
            top: "7rem",
          }}
        >
          {/* {selected === 0 ? (
            <ActiveImg1 />
          ) : selected === 1 ? (
            <ActiveImg2 />
          ) : (
            <ActiveImg3 />
          )} */}
          {selected === 1 ? (
            <ActiveImg2 />
          ) : (
            <InActiveImg2 selected={selected} />
          )}
        </div>
        <div style={{ position: "absolute", right: "16rem", top: "20rem" }}>
          {/* {unselected[1] === 0 ? (
            <InActiveImg1 />
          ) : unselected[1] === 1 ? (
            <InActiveImg2 />
          ) : (
            <InActiveImg3 />
          )}{" "} */}
          {selected === 2 ? <ActiveImg3 /> : <InActiveImg3 />}
        </div>
      </Col>
    </Row>
  );
};

export default Section3;
