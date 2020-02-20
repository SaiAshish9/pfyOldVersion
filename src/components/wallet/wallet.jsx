import React from "react";
import { Button, Icon } from "antd";
import coinIcon from "./coin.svg";
import dateIcon from "./dateIcon.svg";
import rupee1 from "./rupee1.svg";
// import rupee2 from "./rupee2.svg";
import timeIcon from "./timeIcon.svg";

const Wallet = () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="wallet" style={{}}>
      <div className="payment-summary">
        <div className="summary-container">
          <img src={coinIcon} alt="" className="money-image" />
          <div className="content">
            <h1 className="total-money">RS. 400</h1>
            <h4 className="message">Available Balance</h4>
          </div>
        </div>

        <div className="button-container">
          <Button shape="round" className="add-payment">
            ADD PAYMENT METHOD
          </Button>
          <Button shape="round" className="redeem now">
            REDEEM NOW
          </Button>
        </div>
      </div>
      {a.map((element, i) => {
        return (
          <div className="transaction-detail" key={i}>
            <div className="message">
              <img src={rupee1} alt="" />
              <h2 className="message-content">Amount paid</h2>
            </div>
            <div className="date-time-money">
              <div className="date">
                <img src={dateIcon} alt="" />
                <h3 className="date-content">28 DEC 2019</h3>
              </div>
              <div className="time">
                <img src={timeIcon} alt="" />
                <h3 className="time-content">01:37 PM</h3>
              </div>
              <div className="rupee">
                <img
                  src="https://img.icons8.com/windows/32/000000/rupee.png"
                  alt=""
                ></img>
                <h2 className="rupee-content">50</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wallet;
