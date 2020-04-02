import React, { useState } from "react";
// import { Fade } from "react-reveal";

export default function MobileNavIcon({ isNavOpen }) {
  const barOne = {
    // transition: "transform 0.5s cubic-bezier(0.77,0.2,0.05,1)",
    transform: isNavOpen ? "rotate(45deg) translate(6px, 4px)" : "none"
  };
  const barTwo = {
    // transition: "transform 0.5s cubic-bezier(0.77,0.2,0.05,1)",
    opacity: isNavOpen ? "0" : "1"
  };
  const barThree = {
    // transition: "transform 0.5s cubic-bezier(0.77,0.2,0.05,1)",
    transform: isNavOpen ? "rotate(-45deg) translate(5px, -3px)" : "none"
  };
  return (
    <div className="mobile-nav-container">
      <div className="navbar-icon">
        <input className="myCheckbox" type="checkbox" />
        <div className="bar-icon1" style={barOne}></div>
        <div className="bar-icon2" style={barTwo}></div>
        <div className="bar-icon3" style={barThree}></div>
      </div>
    </div>
  );
}
