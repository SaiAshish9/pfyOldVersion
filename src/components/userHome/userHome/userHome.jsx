import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import Avatar from "./avatar";
import Stat from "./stat";
import GigOrInternship from "./gigOrInternship";
import userReducer from "../../../reducer/userReducer";
import UserContext from "../../../context/userContext";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";

const UserHome = () => {
  const [user, userDispatch] = useReducer(userReducer, {});

  useEffect(() => {
    axios
      .get(`${apiURL}/home`, tokenHeader)
      .then(res => {
        let userData = res.data;
        // setUser(userData);
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
        <Avatar />
        <Stat user={user} />
        <GigOrInternship></GigOrInternship>
      </div>
    </UserContext.Provider>
  );
};
export default UserHome;
