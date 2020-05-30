import { Card, Skeleton } from "antd";
import React, { useEffect, useReducer, useContext } from "react";
/* ---------------------------------- ***** --------------------------------- */
import UserContext, { getUser } from "../../../context/userContext";
// import userReducer from "../../../reducer/userReducer";
import { objectValidation } from "../../validation/validation";
import Avatar from "./avatar";
import GigOrInternship from "./gigOrInternship";
import Score from "./score";
import Stat from "./stat";

const UserHome = () => {
  // const [user, userDispatch] = useReducer(userReducer, {});
  const { user, userDispatch } = useContext(UserContext);

  useEffect(() => {
    console.log("user home data", user);
  }, [user]);

  //fetching data
  // useEffect(() => {
  //   getUser(userDispatch);
  // }, []);

  return (
    <div className="homePage-block">
      {objectValidation(user) ? (
        <Avatar />
      ) : (
        <div className="avatar-block">
          <Card style={{ width: "40%", marginRight: 40 }}>
            <Skeleton avatar active />
          </Card>
          <Card style={{ width: "40%" }}>
            <Skeleton avatar active />
          </Card>
        </div>
      )}
      <Stat />
      <Score />
      <GigOrInternship></GigOrInternship>
    </div>
  );
};
export default UserHome;
