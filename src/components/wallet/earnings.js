import React, { Fragment } from 'react';
import dateIcon from "./images/dateIcon.svg";
import rupee1 from "./images/rupee1.svg";
import timeIcon from "./images/timeIcon.svg";
import moment from 'moment';

const codeToText = {
    901: "Not Redeemed",
    902: "Requested",
    903: "Completed"
}

export default function Earnings({data}) {
    console.log(data)
    return (
        <Fragment>
        { data && data.map((earning, index) => 
            <div className="transaction-detail" key={index}>
            <div className="message">
              <img src={rupee1} alt="" />
                <h2 className="message-content">{earning.mission.title}</h2>
            </div>
            <div className="date-time-money">
              <div className="date">
                <img src={dateIcon} alt="" />
                <h3 className="date-content"> {moment(earning.createdAt).format("DD MMM YYYY")} </h3>
              </div>
              <div className="time">
                <img src={timeIcon} alt="" />
                <h3 className="time-content">{ codeToText[earning.status] }</h3>
              </div>
              <div className="rupee">
                <img
                  src="https://img.icons8.com/windows/32/000000/rupee.png"
                  alt=""
                ></img>
                <h2 className="rupee-content">{earning.amount}</h2>
              </div>
            </div>
          </div>
            )}
        </Fragment>
        
    )
}
