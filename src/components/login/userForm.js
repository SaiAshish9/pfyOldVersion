/* eslint-disable jsx-a11y/alt-text */
import { Button, DatePicker, Input, Select, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

/* ---------------------------------- ***** --------------------------------- */
import mailIcon from "../../assets/img/login/mailIcon.svg";
import dummyUserImg from "../../assets/img/dummyUserImg.svg";
import userIcon from "../../assets/img/login/userIcon.svg";
import cityIcon from "../../assets/img/login/cityIcon.svg";
import genderIcon from "../../assets/img/login/genderIcon.svg";

const { Option } = Select;

const UserForm = ({ phone, passToken }) => {
  const history = useHistory();

  const [atUserInfo, setAtUserInfo] = useState(true);
  const [userToken, setUserToken] = useState({ token: "" });

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
        setUserToken({ token: res.data.token });
        console.log(res);
        setAtUserInfo(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  //! ---------------------- user Image uploading process ---------------------- */
  const [userImage, setUserImage] = useState({ loading: false });

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const onChange = (info) => {
    console.log("info", info);
    if (info.file.status === "uploading") {
      setUserImage({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        setUserImage({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      console.log("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      console.log("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }
  //! ------------------------------- ********** ------------------------------- */

  return (
    <>
      {atUserInfo ? (
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
      ) : (
        <div className="upload-img-block">
          <h1 className="userForm-header">Hi {firstName}!</h1>
          <div className="upload-img-content">
            {userImage.imageUrl ? (
              <div className="dummy-img-block">
                <img src={userImage.imageUrl} alt="avatar" />
              </div>
            ) : (
              <div className="dummy-img-block">
                <img src={dummyUserImg} alt="avatar" />
              </div>
            )}
          </div>
          <span className="upload-img-msg">
            Would you like to upload a <br /> profile picture?
          </span>
          <div className="userImg-upload-img-block">
            <ImgCrop rotate>
              <Upload
                name="userImage"
                action="https://pracify.com/testing/user/check_image"
                headers={userToken}
                listType="picture-card"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={onChange}
                onPreview={onPreview}
              >
                {userImage.loading ? (
                  <Button className="userImg-upload-img-one">
                    <LoadingOutlined />
                  </Button>
                ) : (
                  <Button className="userImg-upload-img-one">Yes</Button>
                )}
              </Upload>
            </ImgCrop>
            <Button
              className="userImg-upload-img-two"
              onClick={() => {
                history.push(`/home`);
              }}
            >
              I'll do it later
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserForm;
