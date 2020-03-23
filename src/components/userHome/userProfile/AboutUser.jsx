import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";
import userFaceIcon from "./img/(1).svg";
import addIcon from "./img/addIcon.svg";

const AboutUser = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const onSubmitAboutMe = data => {
    const url = "user/update";
    const data1 = {
      aboutMe: data.aboutMe
    };
    axios.put(url, data1).then(res => {
      console.log(res.data);
      // setIsRerender(!isRerender)
      props.isUpdate();
      setIsModalVisible(false);
    });
    console.log("in about me handler ");
    console.log(data.aboutMe);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAboutButton = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="about-avatar-block">
      <div className="about-avatar-content-block">
        <div style={{ display: "flex" }}>
          <img src={userFaceIcon} alt="" className="about-avatar-img"></img>
          <div className="about-avatar-content">
            <h2>About me</h2>
            <p>
              {props.profileData
                ? props.profileData.aboutMe
                : "Tell us about yourself"}{" "}
            </p>
          </div>
        </div>
        <img
          src={addIcon}
          alt=""
          onClick={handleAboutButton}
          style={{ alignSelf: "baseline" }}
        />
      </div>

      {/* <Button
        type="primary"
        shape="round"
        className="about-avatar-button"
        onClick={handleAboutButton}
      >
        Add
      </Button> */}
      <Modal
        title="About Me"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmitAboutMe)}
          style={{ display: "flex", flexDirection: "column" }}
          className="objective-block-one__form"
        >
          <textarea
            name="aboutMe"
            ref={register}
            // defaultValue={}
            placeholder="please enter about you..."
            // style={inputStyle}
            className="objective-modal__textarea"
          />
          <Button
            htmlType="submit"
            className="objective-block-one__buttonTwo"
            style={{ alignSelf: "center", marginTop: "32px" }}
          >
            Done
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default AboutUser;
