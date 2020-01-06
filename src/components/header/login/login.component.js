import React, { useState, useEffect } from "react";
import { Modal, Button, Input } from "antd";
import { firebase } from "../../../firebase/firebase";
// import OTPInput, { ResendOTP } from "otp-input-react";

import MyOtp from "./myOTP";
const Continue = () => {
  const [visible, setVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [isContinue, setIsContinue] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setIsContinue(false);
    setPhone("");
  };

  const handlePhoneInput = e => {
    const myNumber = e.target.value;
    if (myNumber.length < 11 && myNumber.match(/^[0-9]*$/)) {
      setPhone(myNumber);
    }
  };

  

  //! -------------------------------- firebase -------------------------------- */
useEffect(()=>{
console.log(phone.match(/^[0-9]*$/))
},[])
  
  const handleContinueButton = e => {
    e.preventDefault()
      // Request to send OTP
      try{
        firebase
        .auth()
        .signInWithPhone(phone)
        .then(confirmResult => {
          this.setState({ confirmResult })
        })
        .catch(error => {
          alert(error.message)
  
          console.log(error)
        })
        setIsContinue(true);
      }
       catch{
        console.log("false input")

       }
      }
       

  //! ---------------------------------- style --------------------------------- */
  const continueButton = {
    position: "relative",
    left: "36%",
    padding: "0px 50px"
  };
  const verifyMobileButton = {
    position: "relative",
    left: "36%",
    padding: "0px 50px"
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        // title="Title"
        visible={visible}
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <h1>Login</h1>
        <form>
          <div style={{ marginBottom: 16 }}>
            <Input
              addonBefore="+91"
              placeholder="enter your number"
              disabled={isContinue ? true : false}
              value={phone}
              onChange={handlePhoneInput}
            />
          </div>
          {isContinue && <MyOtp />}
          {isContinue ? (
            <Button
              htmlType="submit"
              type="primary"
              shape="round"
              size="default"
              style={verifyMobileButton}
              onClick={e => e.preventDefault()}
            >
              VERIFY MOBILE
            </Button>
          ) : (
            <Button
              htmlType="submit"
              type="primary"
              shape="round"
              size="default"
              style={continueButton}
              onClick={handleContinueButton}
            >
              CONTINUE
            </Button>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default Continue;
