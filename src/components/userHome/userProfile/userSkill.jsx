import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiURL } from "../../../constant/url";
import { tokenHeader } from "../../../constant/tokenHeader";

import four from "./img/(4).svg";

const UserSkill = () => {
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
  const handleSkillButton = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="skill-of-avatar-block">
      <div className="skill-of-avatar-content-block">
        <img className="skill-of-avatar-img" src={four} alt=""></img>
        <div className="skill-of-avatar-content">
          <h2>Skills</h2>
          <p>What are you good at?</p>
        </div>
      </div>
      <Button
        type="primary"
        shape="round"
        className="skill-of-avatar-button"
        onClick={handleSkillButton}
      >
        Add Skills
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

export default UserSkill;
