import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import AOS from "aos";
import logo from "./img/logo.png";
import { HeartFilled  } from '@ant-design/icons';

AOS.init();
export default function FooterContainer() {
  return (
    <div className="footer-container">
      <div className="footer-block">
        <img height={"100rem"} src={logo} />
        <div>
          <p className="footer-para">
            A-117, GD-ITL Northex Tower, <br /> Netaji Subhash Place, Pitampura,{" "}
            <br />
            New Delhi - 110034
            <br />
          </p>
        </div>
        <div className="contactUs-block">
          <div>
            <p className="contactUs-link">
              shivam@pracify.com
              <br />
              +91-9582033304
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="social-link-container">
        <p className="copyright__para">
          Copyright © 2020 Pracify All rights reserved.
        </p>
        <div className="social-link-text-container">
          <Link to="" className="social__link">
            Facebook
          </Link>
          <Link to="" className="social__link">
            Instagram
          </Link>
          <Link to="" className="social__link">
            Twitter
          </Link>
          <Link to="" className="social__link">
            LinkedIn
          </Link>
          <Link
            to=""
            className="social__link"
            style={{
              border: "none",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <p
        style={{
          fontSize: "16px",
          textAlign: "center",
          marginBottom: "0px",
        }}
      >
        Made with{" "}
        {/* <Icon
          type="heart"
          theme="filled"
          style={{
            color: "Red",
          }}
        />{" "} */}
        <HeartFilled theme="filled" style={{color: "Red" }} />
        in India
        <br />
      </p>
    </div>
  );
}
