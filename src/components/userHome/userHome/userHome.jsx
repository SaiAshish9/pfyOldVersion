import React, { useEffect, useState, useReducer } from "react";
import { Card, Skeleton } from "antd";

import axios from "axios";

import Avatar from "./avatar";
import Stat from "./stat";
import GigOrInternship from "./gigOrInternship";
import userReducer from "../../../reducer/userReducer";
import UserContext from "../../../context/userContext";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";
import { objectValidation } from "../../validation/validation";

const UserHome = () => {
  const [user, userDispatch] = useReducer(userReducer, {});

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    axios
      .get(`${apiURL}/home`, tokenHeader)
      .then(res => {
        let userData = res.data;
        console.log(res.data);
        userDispatch({ type: "MY_USER", userData });
      })
      .catch(e => {
        console.log(e.response);
      });
  }, []);

  useEffect(() => {}, []);
  // const thisUser=user

  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      <div className="homePage-block">
        {objectValidation(user) ? (
          <Avatar />
        ) : (
          <div className="avatar-block">
            <Card style={{ width: "48%"}}>
              <Skeleton avatar active />
            </Card>
            <Card style={{ width: "48%"}}>
              <Skeleton avatar active />
            </Card>
          </div>
        )}

        <Stat user={user} />
        <GigOrInternship></GigOrInternship>
      </div>
    </UserContext.Provider>
  );
};
export default UserHome;
