/* eslint-disable jsx-a11y/alt-text */
import { Button, DatePicker, Input, Select } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CalendarOutlined } from "@ant-design/icons";

/* ---------------------------------- ***** --------------------------------- */
import mailIcon from "../../assets/img/login/mailIcon.svg";
import userIcon from "../../assets/img/login/userIcon.svg";
import cityIcon from "../../assets/img/login/cityIcon.svg";
import genderIcon from "../../assets/img/login/genderIcon.svg";

const { Option } = Select;

const UserForm = ({ phone, passToken, handleModalCancel }) => {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState();
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState();

  const handleFirstName = (e) => {
    const userFirstName = e.target.value;
    console.log(`"first name" ${userFirstName}`);
    setFirstName(userFirstName);
  };

  const handleLastName = (e) => {
    const userLastName = e.target.value;
    console.log(`"last name" ${userLastName}`);
    setLastName(userLastName);
  };

  const handleEmail = (e) => {
    const userEmail = e.target.value;
    setEmail(userEmail);
  };

  const handleCity = (value) => {
    setCity(value);
  };
  const handleDOB = (date, dateString) => {
    console.log(date);
    setDOB(dateString);
  };

  const handleGender = (value) => {
    setGender(value);
  };

  const handleProfileContinueButton = (e) => {
    e.preventDefault();
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: `+91${phone}`,
      city: city,
      dob: DOB,
      gender: gender,
      passToken: passToken,
    };

    axios
      .post(`auth/register`, userData)
      .then((res) => {
        Cookies.set("token", res.data.token);
        console.log(res);
        handleModalCancel();
        history.push(`/home`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="userForm-main-block">
      <h1 className="userForm-header">Create Account</h1>
      <form className="userForm-form-block">
        <div className="name-block">
          <Input
            prefix={<img src={userIcon} alt="" className="" />}
            className="first-name-input"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstName}
          ></Input>
          <Input
            prefix={<img src={userIcon} alt="" className="" />}
            className="last-name-input"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastName}
          ></Input>
        </div>

        <Input
          // style={profileInput}
          prefix={<img src={mailIcon} alt="" className="" />}
          className="email-input"
          placeholder="Email Address"
          value={email}
          onChange={handleEmail}
        ></Input>

        <div className="dob-gender-block">
          <DatePicker
            className="date-input"
            placeholder="Date of Birth"
            format="DD/MM/YYYY"
            showToday={false}
            onChange={handleDOB}
          />
          <Select
            placeholder="Gender"
            value={gender}
            className="gender-input"
            onChange={handleGender}
          >
            <Option value="M">Male</Option>
            <Option value="F">Female</Option>
          </Select>
        </div>

        <Select
          value={city}
          className="city-input"
          onChange={handleCity}
          placeholder="City"
        >
          {/* FIXME use all city data  */}
          {["Dehi", "kolkata", "Mumbai", "Telangana", "Uttar Pradesh"].map(
            (city, index) => (
              <Option value={city} key={index}>
                {city}
              </Option>
            )
          )}
        </Select>

        <Button
          htmlType="submit"
          className="confirm-button"
          onClick={handleProfileContinueButton}
        >
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
