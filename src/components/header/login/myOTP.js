import React,{useState} from "react";
import OTPInput, { ResendOTP } from "otp-input-react";

const MyOtp = () => {
  const [OTP, setOTP] = useState("");

  return(
        <div>
        <h2>Verify OTP</h2>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            secure
          />
          <ResendOTP
            handelResendClick={() => console.log("Resend clicked")}
          />
        </div>
      )
};

export default MyOtp;
