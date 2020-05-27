import { Card, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useReducer } from "react";
/* ---------------------------------- ***** --------------------------------- */
import UserContext from "../../../context/userContext";
import userReducer from "../../../reducer/userReducer";
import { objectValidation } from "../../validation/validation";
import Avatar from "./avatar";
import GigOrInternship from "./gigOrInternship";
import Score from "./score";
import Stat from "./stat";

const UserHome = () => {
  const [user, userDispatch] = useReducer(userReducer, {});

  //* --- initially home page take token data by
  //* --- passing token into history at login page
  //* --- after that home uses cookies for token

  useEffect(() => {
    console.log("user home data", user);
  }, [user]);

  useEffect(() => {
    axios
      .get(`home`)
      .then((res) => {
        let userData = res.data;
        console.log("User Home Data", res.data);
        userDispatch({ type: "MY_USER", userData });
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, userDispatch }}>
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
        <Stat user={user} />
        <Score />
        <GigOrInternship></GigOrInternship>
      </div>
    </UserContext.Provider>
  );
};
export default UserHome;
