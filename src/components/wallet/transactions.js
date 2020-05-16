import React, { Fragment } from 'react';
import dateIcon from "./images/dateIcon.svg";
import rupee1 from "./images/rupee1.svg";
import timeIcon from "./images/timeIcon.svg";
import moment from 'moment';
import future from "./images/future.svg";
import transactionImg from "./images/transactionImg.svg";
import calender from "./images/calender.svg";
import creditCardImg from "./images/credit_card.svg";
import { Icon } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';



const codeToText = {
  801: "Amount Requested",
  802: "Amount Received"
}

export default function Transactions({data, details}) {
  const arr = [1,2,3]
  console.log("%c Details", 'font-size: 25px')
  console.log(data, details)
    return (
      <Fragment>
      <div className="transaction-block">
        { details ? <Fragment>
        <div className="credit-card-block-wallet">
             <img src={creditCardImg} alt="" className="credit-card__img" />
            <div className="credit-card__amount">
                  <span className="credit-card__title">Avaliable Balance: </span>
                  Rs {details.wallet}
            </div>
            <div className="credit-card__details">
              <div className="credit-card__number">xxxx 1 2 3 4</div>
              <div className="credit-card__holder">Card Holder</div>
              <div className="credit-card__name">{details.firstName}</div>
            </div>
            <div className="credit-card__validity">
              <span style={{fontSize: "9px"}} className="credit-card__validity-span" >Validity</span> <br/>
              <span className="credit-card__validity-duration">FOREVER</span>
            </div>
          </div>
       </Fragment> : null } 
          <div className="transaction-inner-block">
            <h1 className="transaction__h1">Transactions</h1>
        {data.length ? data.map((trans, index) =>
                <div key={index} className="transaction-content-block">
                  <div className="transaction-img-block">
                    <img
                      src={transactionImg}
                      alt=""
                      className="transaction__img"
                    />
                  </div>
                  <div className="transaction-title-or-date">
                    <h3 className="transaction-title__h3">Amount Paid</h3>
                    <div className="transaction-date">
                      <img
                        src={calender}
                        alt=""
                        className="transaction-date__img"
                      />
                      <span className="transaction-date__span">{moment(trans.createdAt).format("DD MMM YYYY")}</span>{" "}
                    </div>
                  </div>
                  <div className="transaction-summary-block">
                    <h1 className="transaction-summary__h1">{trans.amount}</h1>
                    <div className="transaction-summary__status">
                      {" "}
                      <img
                        src={future}
                        alt=""
                        className="transaction-summary-status__img"
                      />{" "}
                      <span className="transaction-summary-status__img">
                      {codeToText[trans.type]}
                      </span>{" "}
                    </div>
                  </div>
                </div>
            ): 
            <Fragment>
              <div style={{display: "flex", alignItems:"center", marginTop: "5rem"}}>
                {/* <Icon style={{fontSize:"3.5rem", marginRight:"1rem"}} type="exclamation-circle" />  */}
                <ExclamationCircleOutlined style={{fontSize:"3.5rem", marginRight:"1rem"}} type="exclamation-circle"/>
                
                <div style={{fontSize: "1.5rem", fontFamily: "CircularStd" }}>There is currently <br/> No Transaction</div>
              </div>
            </Fragment> }
          </div>
        
      
        </div>
        
        </Fragment>
    )
}