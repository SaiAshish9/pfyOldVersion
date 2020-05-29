import { Button, Icon, Modal, Tooltip } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
/* ---------------------------------- ***** --------------------------------- */
import { arrayValidation } from "../validation/validation";
import addIcon from "./img/addIcon.svg";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import trainingIcon from "./img/headingImg/experienceIcon.svg";
import { tokenHeader } from "../../constant/tokenHeader";

const Training = ({ training, updateResume }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trainingData, setTrainingData] = useState(false);

  const { register, handleSubmit, errors, watch, setValue } = useForm();

  const onSubmit = (data) => {
    const myTrainingData = trainingData._id
      ? { ...data, _id: trainingData._id }
      : data;
    axios
      .post(`resume/add_training`, myTrainingData, tokenHeader)
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
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

  const handleEdit = (selectedTraining) => {
    setTrainingData(selectedTraining);
    setIsModalVisible(true);
    setValue("title", selectedTraining.title);
    setValue("description", selectedTraining.description);
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`resume/delete_training/${id}`, tokenHeader)
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <div className="training-block-one">
      <div className="training-block-two" style={{}}>
        <section style={{ display: "flex" }}>
          <img
            src={trainingIcon}
            alt=""
            className="training-block-two-icon"
          ></img>
          <div className="training-block-heading-content">
            <h2 className="training-block-two-heading">Trainings</h2>
            {arrayValidation(training) &&
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
                  <section className="training-edit-delete-icon">
                    <Tooltip title="edit">
                      {/* <Icon
                        type="edit"
                        onClick={() => handleEdit(myTraining)}
                        style={{ marginRight: "32px" }}
                      ></Icon> */}
                      <EditOutlined
                        onClick={() => handleEdit(myTraining)}
                        style={{ marginRight: "32px" }}
                      />
                    </Tooltip>
                    <Tooltip title="delete">
                      {/* <Icon
                        type="delete"
                        onClick={() => handleDelete(myTraining._id)}
                      /> */}
                      <DeleteOutlined
                        onClick={() => handleDelete(myTraining._id)}
                      />
                    </Tooltip>
                  </section>
                </div>
              ))}
          </div>
        </section>

        <Tooltip title="add">
          <img
            src={addIcon}
            alt=""
            onClick={handleAdd}
            className="training-block-one-button"
          />
        </Tooltip>
      </div>

      <Modal
        title="Add Training"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={680}
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
