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
import achievementIcon from "./img/headingImg/achievementIcon.svg";

const Achievement = ({ achievement, updateResume }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const scrollToElement = () => {
    scroller.scrollTo("scroll-to-achievement", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    });
  };

  console.log(achievementData);
  const onSubmit = (data) => {
    const index = achievementData && achievement.indexOf(achievementData);
    const myData = achievementData ? { ...data, index } : data;
    axios
      .post(`resume/add_achievement`, myData, tokenHeader())
      .then((res) => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
    setAchievementData(false);
    setIsModalVisible(false);
    scrollToElement();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setAchievementData(false);
    scrollToElement();
  };

  const handleAdd = () => {
    setIsModalVisible(true);
  };
  const handleEdit = (selectedAchievement) => {
    setAchievementData(selectedAchievement);
    setIsModalVisible(true);
    setValue("achievement", selectedAchievement);
  };

  const handleDelete = (index) => {
    console.log(index);
    axios
      .delete(`resume/delete_achievement/${index}`, tokenHeader())
      .then((res) => {
        updateResume(Math.random());
      })
      .catch((e) => {
        console.log(e.response);
      });
    setIsModalVisible(false);
  };

  const content = (
    <div className="all-user-data-content">
      {arrayValidation(achievement) &&
        achievement.map((myAchievement, index) => (
          <div key={index} className="user-data-content-main-block">
            <div className="user-data-content-block">
              <p className="user-data-para" id="user-data-last-el">
                {myAchievement}
              </p>
            </div>
            <div className="user-data-content-icon-block">
              <img
                src={editIcon}
                alt=""
                onClick={() => handleEdit(myAchievement)}
                className="user-data-content-icon"
              />
              <DeleteOutlined
                onClick={() => handleDelete(index)}
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
      <Element name="scroll-to-achievement" className="element">
        <DataLayout
          img={<img src={achievementIcon} alt="" className="user-data-img" />}
          head="Achievements"
          icon={
            <img
              src={addIcon}
              alt=""
              onClick={handleAdd}
              className="user-data-icon"
            />
          }
          content={content}
          isData={arrayValidation(achievement)}
        />
      </Element>
      <Modal
        title="Add Achievement"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={780}
        closeIcon={<img src={modalCloseIcon} alt="close" className="" />}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
          className="achievement-modal__form "
        >
          <label className="input-label">Description</label>
          <textarea
            name="achievement"
            ref={register}
            className="achievement-modal-sec-one__textarea "
          />
          <Button
            htmlType="submit"
            className="achievement-modal__button "
            style={{ alignSelf: "center", marginTop: "32px" }}
            shape="round"
          >
            SAVE
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Achievement;
