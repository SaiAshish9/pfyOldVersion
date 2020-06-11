import { Card, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
/* ---------------------------------- ***** --------------------------------- */
import { tokenHeader } from "../../../constant/tokenHeader";
import { objectValidation } from "../../validation/validation";
import Avatar from "./avatar";
import GigOrInternship from "./gigOrInternship";
import MyOverview from "./myOverview";
import Stat from "./stat";

export default function UserHome() {
  const [user, setUser] = useState({});
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(`home`, tokenHeader(), { cancelToken: source.token })
      .then((res) => {
        const userData = res.data;
        setUser(userData);
        console.log("mounting", res.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("caught cancel");
        } else {
          console.log(error.response);
        }
      });
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
