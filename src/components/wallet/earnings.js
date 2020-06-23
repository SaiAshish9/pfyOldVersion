import { Button, message } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { tokenHeader } from "../../constant/tokenHeader";
import calender from "./images/calender.svg";
import coinIcon from "./images/coin.svg";
import envelop from "./images/envelop.svg";
import future from "./images/future.svg";
import noEarningIcon from "./images/noEarningIcon.svg";
import PaymentMethod from "./paymentMethodModal";

const codeToText = {
  901: "Not Redeemed",
  902: "Requested",
  903: "Completed",
};

export default function Earnings({ data, details, isUpdate }) {
  const [isShow, setIsShow] = useState(false);

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
            {data.length > 0 && (
              <Button onClick={redeem} className="redeem-btn" shape={"round"}>
                Redeem Now
              </Button>
            )}
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
                    <h1 className="earning-description-amount">
                      Rs.{earning.amount}
                    </h1>
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
            <div className="noEarning-block">
              <div className="noEarning-img-block">
                <img src={noEarningIcon} alt="" className="noEarning-img" />
              </div>
              <h1 className="noEarning-msg">
                Your wallet is empty right now. Perform a gig to earn money.
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
