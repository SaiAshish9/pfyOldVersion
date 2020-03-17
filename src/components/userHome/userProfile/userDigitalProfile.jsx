import React,{useState} from "react";
import { Button, Input, Modal } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";

import five from "./img/(5).svg";
import six from "./img/(6).svg";
import seven from "./img/(7).svg";
import eight from "./img/(8).svg";

const UserDigitalProfile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data.objectiveTextarea);
    // axios
    //   .put(
    //     `${apiURL}/resume/addobjective?careerObjectives=${data.objectiveTextarea}`,
    //     null,
    //     tokenHeader
    //   )
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(e => {
    //     console.log(e.response);
    //   });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleProfileButton = () => {
    setIsModalVisible(true);
  };
  return (
    <div className="avatar-digital-profile-block">
      <div className="avatar-digital-profile-content-block">
        <img className="avatar-digital-profile-img" src={five} alt=""></img>
        <div className="avatar-digital-profile-content">
          <h2>Digital Profile</h2>
        </div>
      </div>
      <div className="fb-block">
        <img src={six} alt=""></img>
        <Input></Input>
      </div>
      <div className="insta-block">
        <img src={seven} alt=""></img>
        <Input></Input>
      </div>
      <div className="tik-tok-block">
        <img src={eight} alt=""></img>
        <Input></Input>
      </div>
      <Button
        type="primary"
        shape="round"
        className="avatar-digital-profile-button"
        onClick={handleProfileButton}
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

export default UserDigitalProfile;
