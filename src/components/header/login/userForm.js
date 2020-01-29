/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Input, DatePicker, Button, Select } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

import indianCity from "../../../staticData/cityData.json";
import femaleImage from "./image/female.png";
import maleImage from "./image/male.png";

const buttonStyle = {
  padding: "0px 50px"
};

const profileInput = {
  marginBottom: "12px"
};

const UserForm = ({ phone, passToken, handleModalCancel}) => {
  const history = useHistory();

  const { Option } = Select;
  const dateFormatList = ["DD/MM/YYYY"];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");

  const myCity = indianCity.city.map(city,i => (
    <Option value={city} key={i}>
      {city}
    </Option>
  ));

  const handleFirstName = e => {
    const userFirstName = e.target.value;
    console.log(`"first name" ${userFirstName}`);
    setFirstName(userFirstName);
  };

  const handleLastName = e => {
    const userLastName = e.target.value;
    console.log(`"last name" ${userLastName}`);
    setLastName(userLastName);
  };

  const handleEmail = e => {
    const userEmail = e.target.value;
    setEmail(userEmail);
  };

  const handleCity = value => {
    setCity(value);
  };
  const handleDOB = (date, dateString) => {
    console.log(date);
    setDOB(dateString);
  };

  const handleGender = userGender => {
    console.log(userGender);
    setGender(userGender);
  };

  const handleProfileContinueButton = e => {
    e.preventDefault();
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: `+91${phone}`,
      city: city,
      dob: DOB,
      gender: gender,
      passToken: passToken
    };

    axios
      .post("http://35.154.129.241:5000/auth/register", userData)
      .then(res => {
        Cookies.set("token", res.data.token);
        console.log(res);
        // const username = res.data.user.firstName;
        // const id = res.data.user._id;
        handleModalCancel()
        history.push(`/home`);
      })
      .catch(error => {
        console.log(error.response);
      });

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phone);
    console.log(city);
    console.log(DOB);
    console.log(gender);
    console.log(passToken);
  };

  return (
    <form>
      <div className="name-block">
        <div>
          <h4>First Name</h4>
          <Input
            style={profileInput}
            placeholder="enter your First Name"
            value={firstName}
            onChange={handleFirstName}
          ></Input>
        </div>
        <div>
          <h4>Last Name</h4>
          <Input
            style={profileInput}
            placeholder="enter your Last Name"
            value={lastName}
            onChange={handleLastName}
          ></Input>
        </div>
      </div>

      <h4>Email</h4>
      <Input
        style={profileInput}
        placeholder="enter your Email"
        value={email}
        onChange={handleEmail}
      ></Input>

      <div className="city-dob-block">
        <div className="city-block">
          <h4>City</h4>
          <Select
            showSearch
            // style={{ width: 174 }}
            placeholder="Select a City"
            optionFilterProp="children"
            // onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
            value={city}
            onChange={handleCity}
          >
            {myCity}
          </Select>
        </div>
        <div className="dob-block">
          <h4>Date Of Birth</h4>
          <DatePicker
            placeholder="DD/MM/YYYY"
            format={dateFormatList}
            showToday={false}
            // value={DOB}
            onChange={handleDOB}
          />
        </div>
      </div>

      <h4>Gender</h4>
      <div style={{}} className="gender-image-block">
        <div className="gender-image-block-one">
          <img src={maleImage} onClick={() => handleGender("M")}></img>
        </div>
        <div className="gender-image-block-two">
          <img
            src={femaleImage}
            onClick={() => handleGender("F")}
            value="F"
          ></img>
        </div>
      </div>

      <Button
        htmlType="submit"
        type="primary"
        shape="round"
        size="default"
        style={buttonStyle}
        onClick={handleProfileContinueButton}
      >
        CONTINUE
      </Button>
    </form>
  );
};

export default UserForm;
