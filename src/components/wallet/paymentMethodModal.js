import React, {useState} from 'react';
import { Modal, Button, Radio, Input } from 'antd';
import axios from 'axios';


export default function PaymentMethodModal(props) {

    const [visible, setVisible] = useState(false)
    const [radioOption, setRadioOption] = useState(false)
    const [paytmDetails, setPaytmDetails] = useState({})
    const [bankDetails, setBankDetails] = useState({})

    const showModal = () => {
        setVisible(true);
      };
    
      const handleOk = e => {
        // console.log(e);
        if(radioOption){
            const url = "wallet/add_payment_method";
            const dataToBeSend = radioOption === "paytm" ? paytmDetails : bankDetails;
            const data = {
                [radioOption]: dataToBeSend
            }
            console.table(dataToBeSend)
            axios.post(url, data)
            .then(res => {
                console.log(res.data)
                props.isClose()
            })
        }
        // setVisible(false);
      };
    
      const handleCancel = e => {
          setVisible(false);
          props.isClose();
      };

      const onChange = (e) => {
          console.log('yotu choose ' + e.target.value)
          setRadioOption(e.target.value)
      }
   
      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };

      const paytmChangeHandler = (e, key) => {
          setPaytmDetails({...paytmDetails, [key]: e.target.value })
      }
      console.table(paytmDetails)

      const bankChangeHandler = (e, key) => {
          setBankDetails({...bankDetails, [key]: e.target.value })
      }
      console.table(bankDetails)
    
    return (
        <div>
        <Modal
          title="Add Payment Method"
          visible={props.isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className={"payment_method_modal"}
          footer={[
            <Button key="submit" type="primary"
            className="submit_btn"
            onClick={handleOk}
            // loading={loading} onClick={this.handleOk}
            >
            Submit
          </Button>
          ]}
        >
        <div className="payment_method_modal_title">Tell us where you want you redeem your wallet balance</div>
        <Radio.Group onChange={onChange} value={radioOption}>
        <Radio style={radioStyle}  value={"paytm"}>
          Add Paytm Details
        </Radio>
        <Radio  style={radioStyle} value={"bank"}>
          Add Bank Details
        </Radio>
        </Radio.Group>
        <div className="paytm_input" style={{display: radioOption === "paytm" ? "block" : "none" }}>
            <div className="heading" >Name of wallet user</div>
            <Input onChange={(e) => paytmChangeHandler(e, "holder_name")} placeholder="please enter name" />
            <div className="heading" >Number of wallet holder</div>
            <Input onChange={(e) => paytmChangeHandler(e, "number")} placeholder="please enter number" />
        </div>
        <div className="bank_input" style={{display: radioOption === "bank" ? "block" : "none"}} >
            <div className="heading" >A/C Holders Name </div>
            <Input onChange={(e) => bankChangeHandler(e, "account_holder_name")} placeholder="please enter name" />
            <div className="heading" >A/C Number</div>
            <Input onChange={(e) => bankChangeHandler(e, "account_number")} placeholder="please enter A/C number" />
            <div className="heading" >Bank Name</div>
            <Input onChange={(e) => bankChangeHandler(e, "bank_name")} placeholder="please enter bank name" />
            <div className="heading" >Branch Name</div>
            <Input onChange={(e) => bankChangeHandler(e, "branch_number")} placeholder="please enter branch number" />
            <div className="heading" >IFSC </div>
            <Input onChange={(e) => bankChangeHandler(e, "ifsc_code")} placeholder="please enter IFSC code" />
            
        </div>
        </Modal>
      </div>
    )
}
