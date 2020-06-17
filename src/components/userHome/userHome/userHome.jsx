import { Card, Skeleton } from "antd";
import React from "react";
import { NotificationContext } from "../../../store/notificationStore";
import { UserContext } from "../../../store/userStore";
import { objectValidation } from "../../validation/validation";
import Avatar from "./avatar";
import GigOrInternship from "./gigOrInternship";
import MyOverview from "./myOverview";

export default function UserHome() {
  const { user } = UserContext();
  const { notification } = NotificationContext();

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
