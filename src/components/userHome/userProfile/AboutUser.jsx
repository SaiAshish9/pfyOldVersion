import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";

import userFaceIcon from "./img/userFaceIcon.svg";

const AboutUser = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
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
        <img src={userFaceIcon} alt="" className="about-avatar-img"></img>
        <div className="about-avatar-content">
          <h2>About me</h2>
          <p>Tell us about yourself</p>
        </div>
      </div>

      <Button
        type="primary"
        shape="round"
        className="about-avatar-button"
        onClick={handleAboutButton}
      >
        Add
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
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
