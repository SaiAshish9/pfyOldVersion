import { Menu } from "antd";
import React from "react";
import gigProfileIcon from "../../../assets/img/linkGigProfileIcon.svg";
import internshipIcon from "../../../assets/img/linkInternshipIcon.svg";
import studentStatusIcon from "../../../assets/img/linkStudentStatusIcon.svg";
import walletIcon from "../../../assets/img/linkWalletIcon.png";
import rightArrowIcon from "../../../assets/img/rightArrowIcon.svg";
import { arrayValidation } from "../../validation/validation";

export default function notificationMenu(notification) {
  const notificationImg = (type) => (
    <>
      {type === "0" && (
        <img src={gigProfileIcon} alt="img" className="notification-icon" />
      )}
      {type === "1" && (
        <img src={internshipIcon} alt="img" className="notification-icon" />
      )}
      {type === "2" && (
        <img
          src={walletIcon}
          alt="img"
          width={60}
          className="notification-icon"
        />
      )}
      {type === "3" && (
        <img src={studentStatusIcon} alt="img" className="notification-icon" />
      )}
    </>
  );
  return (
    <Menu className="notification-main-block">
      {!arrayValidation(notification) ? (
        <Menu.ItemGroup title="Notification" className="notification-title">
          <Menu.Item key="1">No New Notification</Menu.Item>
        </Menu.ItemGroup>
      ) : (
        <Menu.ItemGroup title="Notifications" className="notification-title">
          {notification.map((populateNotification, index) => (
            <Menu.Item key={index}>
              {notificationImg(populateNotification.type)}
              <p className="notification-para">
                {populateNotification.message}
              </p>
              <img src={rightArrowIcon} alt="" className="" />
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
      )}
    </Menu>
  );
}
