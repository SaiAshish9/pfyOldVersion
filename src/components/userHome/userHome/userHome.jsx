import { Card, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { tokenHeader } from "../../../constant/tokenHeader";
/* ---------------------------------- ***** --------------------------------- */
// import userReducer from "../../../reducer/userReducer";
import { objectValidation } from "../../validation/validation";
import Avatar from "./avatar";
import GigOrInternship from "./gigOrInternship";
import Score from "./score";
import Stat from "./stat";

const UserHome = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`home`, tokenHeader())
      .then((res) => {
        const userData = res.data;
        setUser(userData);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  return (
    <div className="homePage-block">
      {objectValidation(user) ? (
        <Avatar user={user} />
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
      <Score user={user} />
      <GigOrInternship user={user}></GigOrInternship>
    </div>
  );
};
export default UserHome;
