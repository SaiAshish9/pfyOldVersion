import React, { Fragment } from "react";
import dateIcon from "./images/dateIcon.svg";
import rupee1 from "./images/rupee1.svg";
import timeIcon from "./images/timeIcon.svg";
import moment from "moment";
import future from "./images/future.svg";
import transactionImg from "./images/transactionImg.svg";
import calender from "./images/calender.svg";
import creditCardImg from "./images/credit_card.svg";
import { Icon } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const codeToText = {
  801: "Amount Requested",
  802: "Amount Received",
};

export default function Transactions({ data, details }) {
  const arr = [1, 2, 3];
  console.log("%c Details", "font-size: 25px");
  console.log(data, details);
  return (
    <Fragment>
      <div className="transaction-block">
        {details ? (
          <Fragment>
            <div className="credit-card-block-wallet">
              <img src={creditCardImg} alt="" className="credit-card__img" />
              <div className="credit-card__amount">
                <span className="credit-card__title">Available Balance: </span>
                Rs {details.wallet}
              </div>
              <div className="credit-card__details">
                <div className="credit-card__number">
                  <span>x x x x</span> 1 2 3 4
                </div>
                <div className="credit-card__holder">Card Holder</div>
                <div className="credit-card__name">
                  {details.firstName} {details.lastName}
                </div>
              </div>
              <div className="credit-card__validity">
                <span className="credit-card__validity-span">Validity</span>{" "}
                <br />
                <span className="credit-card__validity-duration">Forever</span>
              </div>
            </div>
          </Fragment>
        ) : null}
        <div className="transaction-inner-block">
          <h1 className="transaction__h1">Transactions</h1>
          {data.length ? (
            data.map((trans, index) => (
              <div key={index} className="transaction-content-block">
                <div className="transaction-img-block">
                  <img
                    src={transactionImg}
                    alt=""
                    className="transaction__img"
                  />
                </div>
                <div className="transaction-title-block">
                  <h3 className="transaction-title__h3">Amount Paid</h3>
                </div>
                <div className="transaction-date-block">
                  <img
                    src={calender}
                    alt=""
                    className="transaction-date__img"
                  />{" "}
                  <span className="transaction-date__span">
                    {moment(trans.createdAt).format("DD MMM YYYY")}
                  </span>{" "}
                </div>
                <div className="transaction-amount-block">
                  <span className="transaction-amount__h1">
                    Rs.{trans.amount}
                  </span>
                </div>
                <div className="transaction-summary-status-block">
                  <img
                    src={future}
                    alt=""
                    className="transaction-summary-status__img"
                  />{" "}
                  <span className="transaction-summary-status__img">
                    {codeToText[trans.type]}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <Fragment>
              <div className="no-transaction-block">
                <ExclamationCircleOutlined type="exclamation-circle" />
                <div className="no-transaction-text">
                  There is currently <br /> No Transaction
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}
