import React, { useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import trainingIcon from "./img/trainingIcon.svg";
import { useForm } from "react-hook-form";

const Training = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios
      .post(`${apiURL}/resume/add_training`,data, tokenHeader)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  console.log(errors);

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleTrainingButton = () => {
    setIsModalVisible(true);
  };
  return (
    <div className="training-block-one">
      <div className="training-block-two">
        <img
          src={trainingIcon}
          alt=""
          className="training-block-two-icon"
        ></img>
        <h2 className="training-block-two-heading">Trainings</h2>
      </div>
      <Button
        // type="primary"
        shape="round"
        className="training-block-one-button"
        onClick={handleTrainingButton}
      >
        Add Training
      </Button>
      <Modal
        title="Add Training"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h2>Title</h2>
          <input name="title" ref={register}></input>

          <h2>Description</h2>
          <textarea name="description" ref={register} />
          <Button htmlType="submit">Done</Button>
        </form>
      </Modal>
    </div>
  );
};

export default Training;
