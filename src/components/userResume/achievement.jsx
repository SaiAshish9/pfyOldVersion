import React, { useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
import { useForm } from "react-hook-form";
import team from "./img/team.svg";
import { tokenHeader } from "../../constant/tokenHeader";
import { apiURL } from "../../constant/url";

const Achievement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  console.log(watch("achievement"));

  const onSubmit = data => {
    console.log(data);
    axios
      .post(`${apiURL}/resume/add_achievement`, data, tokenHeader)
      .then(res => {
        console.log(res);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleAchievementButton = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="achievement-block-one">
      <div className="achievement-block-two">
        <img src={team} alt="" className="achievement-block-two-icon"></img>
        <h2 className="achievement-block-two-heading">Achievements</h2>
      </div>
      <Button
        // type="primary"
        shape="round"
        className="achievement-block-one-button"
        onClick={handleAchievementButton}
      >
        Add Achievement
      </Button>
      <Modal
        title="Add Achievement"
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
            name="achievement"
            ref={register}
            placeholder="please enter your Achievement"
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

export default Achievement;
