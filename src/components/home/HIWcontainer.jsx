import React from "react";
import AOS from "aos";

import hiwIcon1 from "./img/hiwIcon1.png";
import hiwIcon2 from "./img/hiwIcon2.png";
import hiwIcon3 from "./img/hiwIcon3.png";
import hiwImg1 from "./img/hiwImg1.png";
import hiwImg2 from "./img/hiwImg2.png";
import hiwImg3 from "./img/hiwImg3.png";

import dottedIcon1 from "./img/dottedIcon1.svg";
import dottedIcon2 from "./img/dottedIcon2.svg";

AOS.init();
const HIWcontainer = () => {
  return (
    <div className="hiw-container">
      <div className="hiw-h1-container">
        <h1 data-aos="fade-up" className="hiw__h1">
          How It Works
        </h1>
      </div>
      <div className="hiw-subContainer">
        <div className="hiw-subContainer-content">
          <div className="hiw-subContainer-icon-container">
            <img
              data-aos="zoom-in"
              src={hiwIcon1}
              alt=""
              className="hiw-subContainer__icon"
            />
          </div>

          <div className="hiw-subContainer-text">
            <h2 data-aos="fade-up" className="hiw-subContainer__h2">
              Apply To Jobs You Like
            </h2>
            <p data-aos="fade-up" className="hiw-subContainer__p">
              Finding jobs on Pracify is easy. You can apply <br /> to jobs that
              interests you using your smartphone <br /> or your laptop.
            </p>
          </div>
        </div>
        <div className="hiw-subContainer-img-container">
          <img
            data-aos="zoom-in"
            src={hiwImg1}
            alt=""
            className="hiw-subContainer__img"
          />
        </div>
        <img src={dottedIcon1} alt="" className="hiw-dotted__img1" />
      </div>
      <div
        // style={{
        //   flexDirection: "row-reverse"
        // }}
        className="hiw-subContainer-different "
      >
        <div className=" hiw-subContainer-content">
          <div className="hiw-subContainer-icon-container">
            <img
              data-aos="zoom-in"
              src={hiwIcon2}
              alt=""
              className="hiw-subContainer__icon"
            />
          </div>

          <div className="hiw-subContainer-text">
            <h2 data-aos="fade-up" className="hiw-subContainer__h2">
              Submit Proof Of Work
            </h2>
            <p data-aos="fade-up" className="hiw-subContainer__p">
              Complete the tasks before deadline and <br /> submit proof of work
              completion.
            </p>
          </div>
          <img src={dottedIcon2} alt="" className="hiw-dotted__img2" />
        </div>
        <div className="hiw-subContainer-img-container">
          <img
            data-aos="zoom-in"
            src={hiwImg2}
            alt=""
            className="hiw-subContainer__img"
          />
        </div>
      </div>
      <div
        className="hiw-subContainer"
        style={{ paddingTop: "60px", marginBottom: "60px" }}
      >
        <div className="hiw-subContainer-content">
          <div className="hiw-subContainer-icon-container">
            <img
              data-aos="zoom-in"
              src={hiwIcon3}
              alt=""
              className="hiw-subContainer__icon"
            />
          </div>

          <div className="hiw-subContainer-text">
            <h2 data-aos="fade-up" className="hiw-subContainer__h2">
              Get Paid
            </h2>
            <p data-aos="fade-up" className="hiw-subContainer__p">
              Once the company approves your work, get paid in the Pracify
              wallet. Transfer your earnings directly to your :
            </p>

            <div
              data-aos="fade-up"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                style={{
                  height: "8px",
                  width: "8px",
                  borderRadius: "8px",
                  backgroundColor: "#61d9ac"
                }}
              ></div>
              <span
                style={{
                  margin: "0px 0px 0px 8px",
                  color: "#273152",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "28px"
                }}
              >
                Bank Account
              </span>
            </div>
            <div
              data-aos="fade-up"
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "40px"
              }}
            >
              <div
                style={{
                  height: "8px",
                  width: "8px",
                  borderRadius: "8px",
                  backgroundColor: "#61d9ac"
                }}
              ></div>
              <span
                style={{
                  margin: "0px 0px 0px 8px",
                  color: "#273152",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "28px"
                }}
              >
                PayTM Wallet
              </span>
            </div>
          </div>
        </div>
        <div className="hiw-subContainer-img-container">
          <img
            data-aos="zoom-in"
            src={hiwImg3}
            alt=""
            className="hiw-subContainer__img"
          />
        </div>
      </div>
    </div>
  );
};

export default HIWcontainer;
