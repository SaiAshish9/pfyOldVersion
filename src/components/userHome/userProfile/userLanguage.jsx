import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";
import three from "./img/(3).svg";

const UserLanguage = () => {
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
  const handleLanguageButton = () => {
    setIsModalVisible(true);
  };
  return (
    <div className="language-of-avatar-block">
      <div className="language-of-avatar-content-block">
        <img className="language-of-avatar-img" src={three} alt=""></img>
        <div className="language-of-avatar-content">
          <h2>Languages</h2>
          <p>Which languages do you speak?</p>
        </div>
      </div>
      <Button
        type="primary"
        shape="round"
        className="language-of-avatar-button"
        onClick={handleLanguageButton}
      >
        Add Languages
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

export default UserLanguage;
