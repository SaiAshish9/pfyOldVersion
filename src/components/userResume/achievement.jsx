import React, { useState } from "react";
import { Button, Modal, Tooltip, Icon , Descriptions} from "antd";
import axios from "axios";

import { useForm } from "react-hook-form";
import { tokenHeader } from "../../constant/tokenHeader";
import { arrayValidation } from "../validation/validation";
import { apiURL } from "../../constant/url";
import team from "./img/headingImg/achievementIcon.svg";
import {DeleteOutlined, EditOutlined } from '@ant-design/icons';

import addIcon from "./img/addIcon.svg";

const Achievement = ({ achievement, updateResume }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  const { register, handleSubmit, watch, errors, setValue } = useForm();

  console.log(achievementData);
  // console.log(watch("achievement"));
  const onSubmit = data => {
    const index = achievementData && achievement.indexOf(achievementData);
    const myData = achievementData ? { ...data, index } : data;
    axios
      .post(`${apiURL}/resume/add_achievement`, myData, tokenHeader)
      .then(res => {
        console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
    setAchievementData(false);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setAchievementData(false);
  };
  const handleAdd = () => {
    setIsModalVisible(true);
  };
  const handleEdit = selectedAchievement => {
    setAchievementData(selectedAchievement);
    setIsModalVisible(true);
    setValue("achievement", selectedAchievement);
  };

  const handleDelete = index => {
    console.log(index);
    axios
      .delete(`${apiURL}/resume/delete_achievement/${index}`, tokenHeader)
      .then(res => {
        // console.log(res);
        updateResume(Math.random());
      })
      .catch(e => {
        console.log(e.response);
      });
    setIsModalVisible(false);
  };

  return (
    <div className="achievement-block-one">
      <div className="achievement-block-two" style={{}}>
        <section style={{ display: "flex" }}>
          <img src={team} alt="" className="achievement-block-two-icon"></img>
          <div className="achievement-block-heading-content">
            <h2 className="achievement-block-two-heading">Achievements</h2>
            {arrayValidation(achievement) &&
              achievement.map((myAchievement, index) => (
                <div key={index} className="achievement-content-block">
                  <section className="achievement-content-sec-one">
                    <p className="achievement-content-sec-one__p">
                      {myAchievement}
                    </p>
                  </section>
                  <section className="achievement-edit-delete-icon ">
                    <Tooltip title="edit">
                      {/* <Icon
                        type="edit"
                        onClick={() => handleEdit(myAchievement)}
                        style={{ marginRight: "32px" }}
                      ></Icon> */}
                      <EditOutlined  onClick={() => handleEdit(myAchievement)} style={{ marginRight: "32px" }}/>
                    </Tooltip>
                    <Tooltip title="delete">
                      {/* <Icon type="delete" onClick={() => handleDelete(index)} /> */}
                      <DeleteOutlined  onClick={() => handleDelete(index)} />
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
            className="achievement-block-one-button"
          />
        </Tooltip>
      </div>

      <Modal
        title="Add Achievement"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={680}
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
            placeholder="please enter your Achievement"
            className="achievement-modal-sec-one__textarea "
          />
          <Button
            htmlType="submit"
            className="achievement-modal__button "
            style={{ alignSelf: "center", marginTop: "32px" }}
            shape="round"
          >
            Done
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Achievement;
