/* eslint-disable jsx-a11y/alt-text */
import { Button, Input, Statistic } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import loginHeroImg from "../../assets/img/login/loginHeroImg.svg";
import phoneNumberIcon from "../../assets/img/login/phoneNumberIcon.svg";
import { firebase } from "../../firebase/firebase";
import UserForm from "./userForm";
import LoginContext, { loginUser } from "../../context/loginContext";

//! ---------------------------------- style --------------------------------- */

const { Countdown } = Statistic;
export default function Login() {
  const history = useHistory();
  const { login, loginDispatch } = useContext(LoginContext);

  const [phone, setPhone] = useState("");
  const [passToken, setPassToken] = useState("");

  const [isSendOTP, setIsSendOTP] = useState(false);
  const [isSendOTPDisable, setIsSendOTPDisable] = useState(true);

  const [isOTPConfirm, setIsOTPConfirm] = useState(false);
  const [isOTPConfirmDisable, setIsOTPConfirmDisable] = useState(true);

  const [OTP, setOTP] = useState("");
  const [isResendOtpDisable, setIsResendOtpDisable] = useState(true);
  const [proceedForOTP, setProceedForOTP] = useState(false);

  useEffect(() => {
    setIsOTPConfirmDisable(OTP.length === 6 ? false : true);
  }, [OTP]);

  console.log("OTP.length", OTP.length);

  useEffect(() => {
    recaptchaVerifier();
  }, []);

  /* -------------------------------- OTP timer ------------------------------- */
  const [resendOTPDeadline, setResendOTPDeadline] = useState(
    Date.now() + 1000 * 0
  );

  const onResetOtpCountdownFinish = () => {
    setIsResendOtpDisable(false);
  };

  const recaptchaVerifier = () => {
    try {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
      console.log(window.recaptchaVerifier);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangePhone = () => {
    setIsSendOTP(false);
    setOTP("");
  };

  const handlePhoneInput = (e) => {
    const myNumber = e.target.value;
    if (myNumber.length < 11 && myNumber.match(/^[0-9]*$/)) {
      setPhone(myNumber);
    }
  };

  useEffect(() => {
    const phoneLength = phone.split("").length;
    if (phoneLength >= 10) {
      setIsSendOTPDisable(false);
    } else {
      setIsSendOTPDisable(true);
    }
  }, [phone]);

  //TODO
  const handleConfirmOTP = (e) => {
    e.preventDefault();
    if (window.confirmResult) {
      window.confirmResult
        .confirm(OTP)
        .then(function (result) {
          setPassToken(result.user.uid);
          const userCredential = {
            phone: result.user.phoneNumber,
            passToken: result.user.uid,
          };

          const registrationRequired = () => {
            setIsOTPConfirm(true);
          };
          loginUser(
            userCredential,
            registrationRequired,
            history,
            loginDispatch
          );
        })
        .catch(function (error) {
          console.log("wrong OTP");
          console.log(error);
        });
    } else {
      console.log("OTP is not matching");
    }
  };

  const handleResendOTP = (e) => {
    e.preventDefault();
    setOTP("");
    setIsResendOtpDisable(true);
    firebasePhoneAuth();
  };

  //! -------------------------------- firebase -------------------------------- */
  const handleSendOTP = (e) => {
    e.preventDefault();
    setIsSendOTP(true);
    setProceedForOTP(true);
    console.log("+91" + phone);
    firebasePhoneAuth();
  };

  const firebasePhoneAuth = () => {
    firebase
      .auth()
      .signInWithPhoneNumber(`+91${phone}`, window.recaptchaVerifier)
      .then((confirmResult) => {
        console.log(confirmResult);
        window.confirmResult = confirmResult;
        console.log("correct Number");
        console.log("+91" + phone);
        setResendOTPDeadline(Date.now() + 1000 * 60);
      })
      .catch((error) => {
        console.log("incorrect Number");
        console.log("+91" + phone);
        console.log(error);
      });
  };

  return (
    <div className="login-main-block">
      <div id="recaptcha-container"></div>
      <div className="login-hero-main-block">
        <h1>Welcome to Pracify</h1>
        <p>
          Earn money and experience while working <br /> on your own schedule
        </p>
        <img src={loginHeroImg}></img>
      </div>
      {!isSendOTP && (
        <div className="login-block">
          <h1>Login</h1>
          <p>
            Enter your mobile number to signup or <br /> login to your existing
            account
          </p>
          <br />
          <form className="login-form">
            <Input
              className="login-number"
              prefix={<img src={phoneNumberIcon} alt="" className="" />}
              placeholder="Enter Mobile Number"
              value={phone}
              onChange={handlePhoneInput}
            />
            <Button
              htmlType="submit"
              onClick={handleSendOTP}
              disabled={isSendOTPDisable}
              className="sendOTP-button"
            >
              Send OTP
            </Button>
          </form>
        </div>
      )}
      {isSendOTP && !isOTPConfirm && (
        <div className="otp-block">
          <h1>Verify OTP</h1>
          <p>
            Please enter the One Time Password (OTP)
            <br /> we've sent you to verify your mobile number
          </p>
          <h5 onClick={handleChangePhone}>Change Number</h5>

          <form className="otp-form">
            <Input
              placeholder="Enter OTP"
              maxLength={6}
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              className="otp-input"
            ></Input>
            <div className="resend-otp-block">
              <Countdown
                value={resendOTPDeadline}
                format="mm:ss"
                onFinish={onResetOtpCountdownFinish}
                valueStyle={{
                  fontSize: "0.83em",
                  fontWeight: "500",
                  marginRight: "8px",
                }}
              />
              <Button
                size="small"
                className="resend-otp-button"
                onClick={handleResendOTP}
                disabled={isResendOtpDisable}
              >
                Resend OTP
              </Button>
            </div>

            <Button
              htmlType="submit"
              onClick={handleConfirmOTP}
              disabled={isOTPConfirmDisable}
              className="confirm-otp-button"
            >
              Confirm
            </Button>
          </form>
        </div>
      )}
      {isOTPConfirm && <UserForm phone={phone} passToken={passToken} />}
    </div>
  );
}
