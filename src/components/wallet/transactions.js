import React, { Fragment } from 'react';
import dateIcon from "./dateIcon.svg";
import rupee1 from "./rupee1.svg";
import timeIcon from "./timeIcon.svg";
import moment from 'moment';

const codeToText = {
  801: "Amount Requested",
  802: "Amount Received"
}

export default function Transactions({data}) {
    return (
      <Fragment>
        {data && data.map((trans, index) => 
          <div className="transaction-detail" key={index}>
          <div className="message">
            <img src={rupee1} alt="" />
            <h2 className="message-content">{ codeToText[trans.type] }</h2>
          </div>
          <div className="date-time-money">
            <div className="date">
              <img src={dateIcon} alt="" />
              <h3 className="date-content">{moment(trans.createdAt).format("DD MMM YYYY")}</h3>
            </div>
            <div className="time">
              <img src={timeIcon} alt="" />
              <h3 className="time-content">{moment(trans.createdAt).format('LT')}</h3>
            </div>
            <div className="rupee">
              <img
                src="https://img.icons8.com/windows/32/000000/rupee.png"
                alt=""
              ></img>
              <h2 className="rupee-content"> {trans.amount} </h2>
            </div>
          </div>
        </div>
        
        )}
        
        </Fragment>
    )
}
