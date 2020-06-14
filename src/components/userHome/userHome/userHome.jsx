import { Card, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import { tokenHeader } from "../../../constant/tokenHeader";
import { UserContext } from "../../../store/userStore";
import { objectValidation } from "../../validation/validation";
import Avatar from "./avatar";
import GigOrInternship from "./gigOrInternship";
import MyOverview from "./myOverview";
import { userApi } from "../../../api/userApi";

export default function UserHome() {
  const [notification, setNotification] = useState([]);
  const { user, dispatchUser } = UserContext();
  console.log("useruser", user);

  useEffect(() => {
    const source = axios.CancelToken.source();
    userApi(dispatchUser);
    return () => {
      console.log("un mounting");
      source.cancel();
    };
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(`notification/fetch`, tokenHeader(), {
        cancelToken: source.token,
      })
      .then((res) => {
        const myNotification = res.data;
        console.log("myNotification", myNotification);
        setNotification(myNotification);
      })
      .catch((e) => {
        console.log(e.response);
      });
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div className="homePage-block">
      {objectValidation(user) ? (
        <Avatar user={user} notification={notification} />
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
      {/* <Stat /> */}
      <MyOverview user={user} />
      <GigOrInternship user={user}></GigOrInternship>
    </div>
  );
}
