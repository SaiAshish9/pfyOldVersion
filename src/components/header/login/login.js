/* eslint-disable jsx-a11y/alt-text */
import { Button, Input, Modal } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import OTPInput from "otp-input-react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
/* -------------------------------- xxxxxxxxx ------------------------------- */
import { apiURL } from "../../../constant/url";
import { firebase } from "../../../firebase/firebase";
import "./login.css";
import loginImg from "./loginImg.png";
import UserForm from "./userForm";

//! ---------------------------------- style --------------------------------- */
const buttonStyle = {
  padding: "0px 50px"
};

const Continue = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const [phone, setPhone] = useState("");
  const [passToken, setPassToken] = useState("");

  const [isContinue, setIsContinue] = useState(false);

  const [OTP, setOTP] = useState("");
  const [proceedForOTP, setProceedForOTP] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const showModal = () => {
    setVisible(true);
    if (!proceedForOTP) {
      recaptchaVerifier();
    }
  };

  const recaptchaVerifier = () => {
    if (!isVerified) {
      try {
        setTimeout(() => {
          window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "invisible"
            }
          );
        }, 1000);
      } catch (e) {
        console.log("catch render before container");
      }
    }
  };

  const handleModalCancel = () => {
    setVisible(false);
  };

  const handleChangePhone = () => {
    setIsContinue(false);
    setOTP("");
  };

  const handlePhoneInput = e => {
    const myNumber = e.target.value;
    if (myNumber.length < 11 && myNumber.match(/^[0-9]*$/)) {
      setPhone(myNumber);
    }
  };

  const handleVerifyButton = e => {
    e.preventDefault();

    if (window.confirmResult) {
      window.confirmResult
        .confirm(OTP)
        .then(function(result) {
          console.log(result);
          setPassToken(result.user.uid);
          const userCredential = {
            phone: result.user.phoneNumber,
            passToken: result.user.uid
          };

          axios
            .post(`${apiURL}/auth/login`, userCredential)
            .then(function(res) {
              console.log(res);
              if (res.data.statusCode === 200) {
                // const username = res.data.user.firstName;
                // const id = res.data.user._id;
                handleModalCancel();
                Cookies.set("token", res.data.token);
                history.push("/home");
              } else if (res.data.statusCode === 210) {
                setIsVerified(true);
              } else {
                console.log("their is some error");
              }
            })
            .catch(function(error) {
              console.log("error.response", error.response);
              console.log("no internet");
            });
        })
        .catch(function(error) {
          console.log("wrong OTP");
          console.log(error);
        });
    } else {
      console.log("please enter OTP");
    }
  };

  const handleResendOTP = e => {
    e.preventDefault();
    setOTP("");
    firebasePhoneAuth();
  };

  //! -------------------------------- firebase -------------------------------- */

  const handleLoginContinueButton = e => {
    e.preventDefault();
    setIsContinue(true);
    setProceedForOTP(true);

    console.log("+91" + phone);
    firebasePhoneAuth();
  };

  const firebasePhoneAuth = () => {
    firebase
      .auth()
      .signInWithPhoneNumber(`+91${phone}`, window.recaptchaVerifier)
      .then(confirmResult => {
        console.log(confirmResult);
        window.confirmResult = confirmResult;
        console.log("correct Number");
        console.log("+91" + phone);
      })
      .catch(error => {
        console.log("incorrect Number");
        console.log("+91" + phone);
        console.log(error);
      });
  };

  return (
    <div>
      <Button onClick={showModal} className="header__button1">
        Login
      </Button>
      {/*  FIXME remove true add isVerified */}
      {isVerified ? (
        <Modal visible={visible} onCancel={handleModalCancel} footer={null}>
          <UserForm
            phone={phone}
            passToken={passToken}
            handleModalCancel={handleModalCancel}
          />
        </Modal>
      ) : (
        <Modal
          width="800px"
          visible={visible}
          onCancel={handleModalCancel}
          footer={null}
        >
          <div style={{ display: "flex" }}>
            <img
              src={loginImg}
              style={{ width: "48%", padding: "60px 60px 60px 30px" }}
            ></img>
            <div style={{ marginTop: "42px" }}>
              <h1>Login</h1>
              <p>
                Enter your mobile number to login to your existing Pracify
                account or to create a new account
              </p>
              <br />
              <form>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Enter your mobile number</h4>
                  {isContinue && (
                    <h5
                      onClick={handleChangePhone}
                      style={{ cursor: "pointer", color: "#406AF8" }}
                    >
                      Change Number
                    </h5>
                  )}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <Input
                    addonBefore="+91"
                    placeholder="enter your number"
                    disabled={isContinue ? true : false}
                    value={phone}
                    onChange={handlePhoneInput}
                  />
                </div>
                <div id="recaptcha-container"></div>
                {isContinue && (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <h4>Enter OTP</h4>

                      <h5
                        size="small"
                        style={{ cursor: "pointer", color: "#406AF8" }}
                        onClick={handleResendOTP}
                      >
                        Resend OTP
                      </h5>
                    </div>

                    <OTPInput
                      value={OTP}
                      onChange={setOTP}
                      autoFocus={true}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      secure={true}
                      inputStyles={{
                        borderWidth: "0px 0px 2px 0px",
                        borderColor: "#a9a9a9",
                        marginBottom: "12px",
                        "&:focus": {
                          outline: "none !important"
                        }
                      }}
                    />
                  </div>
                )}

                {isContinue ? (
                  <Button
                    htmlType="submit"
                    type="primary"
                    shape="round"
                    size="default"
                    style={buttonStyle}
                    onClick={handleVerifyButton}
                  >
                    VERIFY MOBILE
                  </Button>
                ) : (
                  <Button
                    htmlType="submit"
                    type="primary"
                    shape="round"
                    size="default"
                    style={buttonStyle}
                    onClick={handleLoginContinueButton}
                  >
                    CONTINUE
                  </Button>
                )}
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default Continue;
