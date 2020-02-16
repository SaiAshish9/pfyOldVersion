import React, { useState } from "react";
import { Button, Modal, Tooltip, Icon } from "antd";
import axios from "axios";
import { apiURL } from "../../constant/url";
import { tokenHeader } from "../../constant/tokenHeader";
import { arrayValidation } from "../validation/validation";
import trainingIcon from "./img/trainingIcon.svg";
import { useForm } from "react-hook-form";

const Training = ({ training, updateResume }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trainingData, setTrainingData] = useState(false);

  const { register, handleSubmit, errors, watch, setValue } = useForm();

  const onSubmit = data => {
    const myTrainingData = trainingData._id
      ? { ...data, _id: trainingData._id }
      : data;
    axios
      .post(`${apiURL}/resume/add_training`, myTrainingData, tokenHeader)
      .then(res => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
    setTrainingData(false);
    setIsModalVisible(false);
  };

  console.log(errors);

  const handleCancel = () => {
    setIsModalVisible(false);
    setTrainingData(false);
  };
  const handleAdd = () => {
    setIsModalVisible(true);
  };

  const handleEdit = selectedTraining => {
    setTrainingData(selectedTraining);
    setIsModalVisible(true);
    setValue("title", selectedTraining.title);
    setValue("description", selectedTraining.description);
  };

  const handleDelete = id => {
    console.log(id);
    axios
      .delete(`${apiURL}/resume/delete_training/${id}`, tokenHeader)
      .then(res => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  return (
    <div className="training-block-one">
      <div
        className="training-block-two"
        style={{
          borderBottom: arrayValidation(training) ? "1px solid" : "none"
        }}
      >
        <section style={{ display: "flex" }}>
          <img
            src={trainingIcon}
            alt=""
            className="training-block-two-icon"
          ></img>
          <h2 className="training-block-two-heading">Trainings</h2>
        </section>
        {arrayValidation(training) && (
          <section>
            <Tooltip title="add">
              <Icon type="plus-circle" onClick={handleAdd} />
            </Tooltip>
          </section>
        )}
      </div>
      {arrayValidation(training) ? (
        training.map((myTraining, index) => (
          <div key={index} className="training-content-block">
            <section className="training-content-sec-one">
              <h1 className="training-content-sec-one__h1">
                {myTraining.title}
              </h1>
              <p className="training-content-sec-one__p">
                {myTraining.description}
              </p>
            </section>
            <section>
              <Tooltip title="edit">
                <Icon
                  type="edit"
                  onClick={() => handleEdit(myTraining)}
                  style={{ marginRight: "32px" }}
                ></Icon>
              </Tooltip>
              <Tooltip title="delete">
                <Icon
                  type="delete"
                  onClick={() => handleDelete(myTraining._id)}
                />
              </Tooltip>
            </section>
          </div>
        ))
      ) : (
        <Button
          // type="primary"
          shape="round"
          className="training-block-one-button"
          onClick={handleAdd}
        >
          Add Training
        </Button>
      )}
      <Modal
        title="Add Training"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="training-modal__form "
        >
          <section className="training-modal-sec-one ">
            <h2 className="training-modal-sec-one__head ">Title</h2>
            <input
              name="title"
              ref={register}
              className="training-modal-sec-one__input "
            ></input>
          </section>
          <section className="training-modal-sec-two ">
            <h2 className="training-modal-sec-two__head ">Description</h2>
            <textarea
              name="description"
              ref={register}
              className="training-modal-sec-two__textarea "
            />
          </section>
          <Button
            htmlType="submit"
            className="training-modal__button "
            shape="round"
          >
            Done
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Training;
