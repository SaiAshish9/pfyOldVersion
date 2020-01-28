import React from "react";
import Avatar from "./avatar" 
import LatestWork from "./latestWork" 

const UserHome = () => {
  return (
    <div style={{padding:"0px 80px", marginTop: "40px"}}>
    <Avatar />
    <LatestWork />
    </div>
  );
};
export default UserHome;
