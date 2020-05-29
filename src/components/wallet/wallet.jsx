import { Button, message, Tabs } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import calender from "./images/calender.svg";
import coinIcon from "./images/coin.svg";
import creditCardImg from "./images/credit_card.svg";
import envelop from "./images/envelop.svg";
import future from "./images/future.svg";
import transactionImg from "./images/transactionImg.svg";
import PaymentMethod from "./paymentMethodModal";
import Transactions from "./transactions";
import Earnings from "./earnings";
import { tokenHeader } from "../../constant/tokenHeader";

const { TabPane } = Tabs;

const Wallet = () => {
  const a = [1, 2, 3];
  const [isShow, setIsShow] = useState(false);
  const [walletDetails, setWalletDetails] = useState(null);
  const [earnings, setEarnings] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [isUpdate, setIsUpdate] = useState(null);
  // const [isShow, setIsShow]

  const isModalOpen = () => {
    setIsShow(true);
  };

  const isClose = () => {
    setIsShow(false);
  };

  useEffect(() => {
    const url = "wallet/fetch";
    axios.get(url, tokenHeader).then((res) => {
      const data = res.data;
      console.table(data);
      setWalletDetails(data);
    });

    // fetch my earnings
    const url2 = "wallet/my_earnings";
    axios.get(url2, tokenHeader).then((res) => {
      const earnings = res.data;
      console.log("EARNINGS", earnings);
      setEarnings(earnings);
    });

    // fetch money transactions

    const url3 = "wallet/money_transfers";
    axios.get(url3, tokenHeader).then((res) => {
      const transactions = res.data;
      console.log("TRANSACTIONS", transactions);
      setTransactions(transactions);
      // setName()
    });
  }, [isUpdate]);

  const callback = (key) => {
    console.log(key);
  };

  const isUpdateHandler = () => {
    setIsUpdate(Math.random());
  };

  const arr = [1, 2, 3];
  return (
    // <div className="wallet" style={{}}>
    //   {/* <PaymentMethodModal isModalOpen={isShow} isClose={isClose}/> */}
    //   <div className="payment-summary">
    //     <div className="summary-container">
    //       <img src={coinIcon} alt="" className="money-image" />
    //       <div className="content">
    //         <h1 className="total-money">RS. {walletBalance}</h1>
    //         <h4 className="message">Available Balance</h4>
    //       </div>
    //     </div>

    //     <div className="button-container">
    //       <Button onClick={isModalOpen} shape="round" className="add-payment">
    //         ADD PAYMENT METHOD
    //       </Button>
    //       { walletBalance ? <Button onClick={redeem} shape="round" className="redeem-now">
    //         REDEEM NOW
    //       </Button> : null}
    //     </div>
    //   </div>
    //   <Tabs className="tab-options" defaultActiveKey="1" onChange={callback}>
    //     <TabPane tab="Earnings" key="earnings">
    //       {/* <Earnings data={earnings}/> */}
    //     </TabPane>
    //     <TabPane tab="Transactions" key="transactions">
    //       {/* <Transactions data={transactions} /> */}
    //     </TabPane>
    //   </Tabs>
    // </div>
    <div className="wallet">
      {/* <PaymentMethod isModalOpen={isShow} isClose={isClose} /> */}
      {earnings && walletDetails ? (
        <Earnings
          data={earnings}
          details={walletDetails}
          isUpdate={isUpdateHandler}
        />
      ) : null}
      {transactions && walletDetails ? (
        <Transactions data={transactions} details={walletDetails} />
      ) : null}
    </div>
  );
};

export default Wallet;
