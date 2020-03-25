import React,{useState, useEffect} from "react";
import { Button, Icon, Tabs, message } from "antd";
import coinIcon from "./images/coin.svg";
import dateIcon from "./images/dateIcon.svg";
import rupee1 from "./images/rupee1.svg";
import envelop from './images/envelop.svg';
import calander from './images/calander.svg';
import future from './images/future.svg';
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
        const resData = res.data;
        console.log('REDEEM', resData.message)
        message.info(resData.message)
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

  const arr = [1,2,3]
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
      <div className="earning-block">
        <div className="earning-inner-block">
          <div className="payment-btn-and-earning">
            <div className="coin-img">
              <img src={coinIcon} alt=""/>
            </div>
            <div className="buttons">
            <Button className="redeem-btn" shape={"round"}>Redeem Now</Button>
            <Button className="add-payment-method-btn" shape={"round"}>Add Payment Method</Button>
            </div>
          </div>
          <div className="earning-list-block">
            <div className="title">Earnings</div>
            <div className="list">
              { arr.map(el => 
                <div className="single-item">
                <div className="envelop-img">
                  <img src={envelop} alt=""/>
                </div>
                <div className="earning-description">
                  <div>
                    <div className="earning-description-title">Post on Instagram</div>
                    <div className="earning-description-date"><img src={calander} alt=""/><span className="description-date-string">28  Dec 2020</span> </div>
                  </div>
                  <div>
                    <div className="earning-description-amount">RS 50</div>
                    <div className="earning-description-status"> <img src={future} alt=""/> <span className="description-status-string">Completed</span> </div>
                  </div>
                </div>
              </div>
                ) }
            </div>
          </div>
          
        </div>
      </div>
      <div className="transaction-block">
        <div className="transaction-inner-block">
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
