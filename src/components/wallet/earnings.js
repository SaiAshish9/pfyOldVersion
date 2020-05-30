import React, { Fragment, useState } from "react";
import { Button, message, Icon } from "antd";
import dateIcon from "./images/dateIcon.svg";
import rupee1 from "./images/rupee1.svg";
import timeIcon from "./images/timeIcon.svg";
import moment from "moment";
import coinIcon from "./images/coin.svg";
import envelop from "./images/envelop.svg";
import future from "./images/future.svg";
import calender from "./images/calender.svg";
import PaymentMethod from "./paymentMethodModal";
import axios from "axios";
import noDetails from "./images/noDetails.jpg";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { tokenHeader } from "../../constant/tokenHeader";

const codeToText = {
  901: "Not Redeemed",
  902: "Requested",
  903: "Completed",
};

export default function Earnings({ data, details, isUpdate }) {
  const [isShow, setIsShow] = useState(false);

  console.log("%c Details", "font-size: 25px, color: darkorange");
  // console.log(details)
  console.log(data);

  const isModalOpen = () => {
    setIsShow(true);
  };

  const isClose = () => {
    setIsShow(false);
  };

  const redeem = () => {
    const url = "wallet/request_redemption";
    if (details.wallet) {
      axios
        .post(url, tokenHeader())
        .then((res) => {
          const resData = res.data;
          console.log("REDEEM", resData.message);
          message.info(resData.message);
          // setIsUpdate(Math.random());
          isUpdate();
        })
        .catch((err) => {
          const msg = err.response.data.message;
          console.log(msg);
          message.info(msg);
        });
    } else {
      message.info("You have no balance to redeem");
    }
  };

  const arr = [1, 2, 3];
  console.log(data);
  return (
    <div className="earning-block">
      <PaymentMethod isModalOpen={isShow} isClose={isClose} />
      <div className="earning-inner-block">
        <div className="payment-btn-and-earning">
          <div className="coin-img">
            <img src={coinIcon} alt="" />
          </div>
          <div className="buttons">
            {/* {details && details.wallet ?<Button onClick={redeem} className="redeem-btn" shape={"round"}>
                    Redeem Now
                  </Button>: null} */}

            {/* <Button style={{marginLeft: details.wallet ? "0" : "12rem" }} onClick={isModalOpen} className="add-payment-method-btn" shape={"round"}>
                    Add Payment Method
                  </Button>  */}
            <Button onClick={redeem} className="redeem-btn" shape={"round"}>
              Redeem Now
            </Button>
            <Button
              onClick={isModalOpen}
              className="add-payment-method-btn"
              shape={"round"}
            >
              Add Payment Method
            </Button>
          </div>
        </div>
      </div>

      <div className="earning-list-block">
        <div className="title">Earnings</div>
        <div className="list">
          {data.length ? (
            data.map((earning, index) => (
              <div key={index} className="single-item">
                <div className="envelop-img">
                  <img src={envelop} alt="" />
                </div>
                <div className="earning-description">
                  <div>
                    <div className="earning-description-title">
                      {earning.mission.title}
                    </div>
                    <div className="earning-description-date">
                      <img src={calender} alt="" />
                      <span className="description-date-string">
                        {moment(earning.createdAt).format("DD MMM YYYY")}
                      </span>{" "}
                    </div>
                  </div>
                  <div>
                    <div className="earning-description-amount">
                      {earning.amount}
                    </div>
                    <div className="earning-description-status">
                      {" "}
                      <img src={future} alt="" />{" "}
                      <span className="description-status-string">
                        {codeToText[earning.status]}
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <ExclamationCircleOutlined
                style={{ fontSize: "3.5rem", marginRight: "1rem" }}
                type="exclamation-circle"
              />
              <div style={{ fontSize: "1.5rem", fontFamily: "CircularStd" }}>
                Your Wallet Is <br /> Currently Empty
              </div>
              <img src={noDetails} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
