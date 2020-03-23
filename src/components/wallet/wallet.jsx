import React,{useState, useEffect} from "react";
import { Button, Icon, Tabs, message } from "antd";
import coinIcon from "./coin.svg";
import dateIcon from "./dateIcon.svg";
import rupee1 from "./rupee1.svg";
// import rupee2 from "./rupee2.svg";
import PaymentMethodModal from './paymentMethodModal';
import axios from 'axios';
import Earnings from './earnings';
import Transactions from './transactions';

const { TabPane } = Tabs;


const Wallet = () => {
  const a = [1, 2, 3];
  const [isShow, setIsShow] = useState(false)
  const [walletBalance, setWalletBalance] = useState(null)
  const [earnings, setEarnings] = useState(null)
  const [transactions, setTransactions] = useState(null)
  const [isUpdate, setIsUpdate] = useState(null)

  const isModalOpen = () =>{
    setIsShow(true)
  }

  const isClose = () => {
    setIsShow(false)
  }

  useEffect(() => {
    const url = "wallet/fetch";
    axios.get(url)
      .then(res => {
        const data = res.data
        console.table(data)
        setWalletBalance(data.wallet)
      })

      // fetch my earnings
      const url2 = 'wallet/my_earnings';
      axios.get(url2)
        .then(res => {
          const earnings = res.data;
          console.log('EARNINGS', earnings)
          setEarnings(earnings)
        })

        // fetch money transactions

  const url3 = 'wallet/money_transfers';
  axios.get(url3)
    .then(res => {
      const transactions = res.data;
      console.log('TRANSACTIONS', transactions)
      setTransactions(transactions)
    })
  }, [isUpdate])

  const redeem = ( ) => {
    const url = "wallet/request_redemption";
    axios.post(url)
      .then(res => {
        const msg = res.data;
        console.log('REDEEM', msg)
        message.info(msg)
        setIsUpdate(Math.random())
      })
      .catch(err => {
        const msg = err.response.data.message
        console.log(msg)
        message.info(msg)
      })
  }
  

  const  callback = (key) => {
    console.log(key);
  }

  return (
    <div className="wallet" style={{}}>
      <PaymentMethodModal isModalOpen={isShow} isClose={isClose}/>
      <div className="payment-summary">
        <div className="summary-container">
          <img src={coinIcon} alt="" className="money-image" />
          <div className="content">
            <h1 className="total-money">RS. {walletBalance}</h1>
            <h4 className="message">Available Balance</h4>
          </div>
        </div>

        <div className="button-container">
          <Button onClick={isModalOpen} shape="round" className="add-payment">
            ADD PAYMENT METHOD
          </Button>
          { walletBalance ? <Button onClick={redeem} shape="round" className="redeem-now">
            REDEEM NOW
          </Button> : null}
        </div>
      </div>
      <Tabs className="tab-options" defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Earnings" key="earnings">
          <Earnings data={earnings}/>
        </TabPane>
        <TabPane tab="Transactions" key="transactions">
          <Transactions data={transactions} />
        </TabPane>
      </Tabs>
      {/* {a.map((element, i) => {
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
      })} */}
    </div>
  );
};

export default Wallet;
