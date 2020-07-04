import React, { useState } from "react";
// import Logo from "../../../assets/images/logo.png";
// import { BsFilterLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import Logo from "../../../assets/images/logo.png";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(19px)",
        background: "#fff",
        height: "10vh",
        position: "fixed",
        zIndex: 10,
        padding: "0 2rem",
        width: "100vw",
        top: 0,
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          style={{
            height: "12vh",
            position: "relative",
            top: 5,
          }}
          alt="Pracify"
        />
      </Link>
      <GoThreeBars
        onClick={() => {
          setOpen(true);
        }}
        style={{
          fontSize: "2rem",
          color: "#54a1d7",
        }}
      />
      <Drawer
        placement="right"
        closable={false}
        visible={open}
        // closeIcon={<AiOutlineClose
        // color='red'
        // />}

        // width={window.screen.width}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            margin: "10vh 5vw ",
            fontSize: 18,
            lineHeight: 1.22,
            fontFamily: "Inter-SemiBold",
          }}
        >
          <AiOutlineClose
            onClick={() => {
              setOpen(false);
            }}
            style={{
              position: "absolute",
              right: "2rem",
              top: "2rem",
              fontSize: "2rem",
              color: "#62bcb0",
              fontWeight: "bolder",
            }}
          />
          <p
            style={{
              color: "#62bcb0",
              textAlign: "center",
              borderBottom: "1px solid #f4f4f4",
              padding: "1rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Home
          </p>
          <p
            style={{
              textAlign: "center",
              // margin: "-10px 0",
              borderBottom: "1px solid #f4f4f4",
              paddingBottom: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/gigs" style={{ color: "inherit" }} className="">
              Gigs
            </Link>
          </p>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "1rem",
              borderBottom: "1px solid #f4f4f4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/internships" style={{ color: "inherit" }} className="">
              Internships
            </Link>
          </p>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "1rem",
              borderBottom: "1px solid #f4f4f4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/login" style={{ color: "inherit" }} className="">
              Login
            </Link>
          </p>
          <Button
            type="text"
            style={{
              height: 49,
              width: "100%",
              borderRadius: 7,
              fontSize: 18,
              lineHeight: 1.22,
              fontFamily: "Inter",
              marginTop: 30,
              border: " 1px solid #000",
              color: "#000",
              marginRight: "30px",
            }}
          >
            Download App
          </Button>
          <a
            href="https://business.pracify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="text"
              style={{
                height: 49,
                width: "100%",
                borderRadius: 7,
                fontSize: 18,
                marginTop: 20,
                backgroundColor: "#7a81ea",
                color: "#fff",
                marginRight: "30px",
              }}
            >
              I'm a Company
            </Button>
          </a>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
