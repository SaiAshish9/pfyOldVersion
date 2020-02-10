import React from 'react';
import {Progress} from "antd" 
import phoneIcon from "./img/phoneIcon.svg";
import emailIcon from "./img/emailIcon.svg";
import locationIcon from "./img/locationIcon.svg";

const userCard = () =>{
    return (
        <div className="userProfile-block">
        <div className="avatar-block">
          <div className="avatar-img-block">
            <img src={""} alt=""></img>
          </div>
          <h2>name</h2>
        </div>
        <div className="avatar-intro-block">
          <div className="residence-block">
            <img src={locationIcon} alt=""></img>
            <p>residence</p>
          </div>
          <div className="mail-block">
            <img src={emailIcon} alt=""></img>
            <p>mail</p>
          </div>
          <div className="number-block">
            <img src={phoneIcon} alt=""></img>
            <p>number</p>
          </div>
        </div>
        <div className="divider-block"></div>
        <div>
          <p>Profile Score</p>
          <Progress percent={50} status="active" />
        </div>
      </div>
    )

} 
export default userCard