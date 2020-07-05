import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Element, scroller } from "react-scroll";
/* ---------------------------------- ***** --------------------------------- */
import modalCloseIcon from "../../assets/img/modalCloseIcon.svg";
import { tokenHeader } from "../../constant/tokenHeader";
import DataLayout from "../common/profileOrResumeLayout";
import { arrayValidation } from "../validation/validation";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIcon.svg";
import trainingIcon from "./img/headingImg/experienceIcon.svg";
const Training = ({ training, updateResume }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trainingData, setTrainingData] = useState(false);

  const { register, handleSubmit, errors, reset, setValue } = useForm();
  const scrollToElement = () => {
    scroller.scrollTo("scroll-to-training", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    });
  };
  const onSubmit = (data) => {
    const myTrainingData = trainingData._id
      ? { ...data, _id: trainingData._id }
      : data;
    axios
      .post(`resume/add_training`, myTrainingData, tokenHeader())
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
    setTrainingData(false);
    setIsModalVisible(false);
    scrollToElement();
  };

  console.log(errors);

  const handleCancel = () => {
    setIsModalVisible(false);
    setTrainingData(false);
    scrollToElement();
  };
  const handleAdd = () => {
    setIsModalVisible(true);
  };

  const handleEdit = (selectedTraining) => {
    setTrainingData(selectedTraining);
    reset({
      title: selectedTraining.title,
      description: selectedTraining.description,
    });
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`resume/delete_training/${id}`, tokenHeader())
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const content = (
    <div className="all-user-data-content">
      {arrayValidation(training) &&
        training.map((myTraining, index) => (
          <div key={index} className="user-data-content-main-block">
            <div className="user-data-content-block">
              <h1 className="user-data-h1">{myTraining.title}</h1>
              <p className="user-data-h2" id="user-data-last-el">
                {myTraining.description}
              </p>
            </div>
            <div className="user-data-content-icon-block">
              <img
                src={editIcon}
                onClick={() => handleEdit(myTraining)}
                alt=""
                className="user-data-content-icon"
              />
              <DeleteOutlined
                onClick={() => handleDelete(myTraining._id)}
                className="user-data-content-icon"
              />
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <>
      {" "}
      <Element name="scroll-to-training" className="element">
        <DataLayout
          img={<img src={trainingIcon} alt="" className="user-data-img" />}
          head="Trainings"
          icon={
            <img
              src={addIcon}
              alt=""
              onClick={handleAdd}
              className="user-data-icon"
            />
          }
          content={content}
          isData={arrayValidation(training)}
        />
      </Element>
      <Modal
        title="Add Training"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
        closeIcon={<img src={modalCloseIcon} alt="close" className="" />}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="training-modal__form"
        >
          <section className="training-modal-sec-one">
            <h2 className="training-modal-sec-one__head">Title</h2>
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
            SAVE
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Training;
