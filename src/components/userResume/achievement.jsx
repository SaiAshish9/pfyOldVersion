import React, { useState } from "react";
import { Button, Modal, Tooltip, Icon } from "antd";
import axios from "axios";
import { useForm } from "react-hook-form";
import team from "./img/team.svg";
import { tokenHeader } from "../../constant/tokenHeader";
import { arrayValidation } from "../validation/validation";
import { apiURL } from "../../constant/url";

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
      <div
        className="achievement-block-two"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          paddingBottom: "12px"
        }}
      >
        <section style={{ display: "flex" }}>
          <img src={team} alt="" className="achievement-block-two-icon"></img>
          <h2 className="achievement-block-two-heading">Achievements</h2>
        </section>
        <section>
          <Tooltip title="add">
            <Icon type="plus-circle" onClick={handleAdd} />
          </Tooltip>
        </section>
      </div>
      {arrayValidation(achievement) ? (
        achievement.map((myAchievement, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px 40px"
            }}
          >
            <section>
              <p>{myAchievement}</p>
            </section>
            <section>
              <Tooltip title="edit">
                <Icon
                  type="edit"
                  onClick={() => handleEdit(myAchievement)}
                  style={{ marginRight: "32px" }}
                ></Icon>
              </Tooltip>
              <Tooltip title="delete">
                <Icon type="delete" onClick={() => handleDelete(index)} />
              </Tooltip>
            </section>
          </div>
        ))
      ) : (
        <Button
          // type="primary"
          shape="round"
          className="achievement-block-one-button"
          onClick={handleAdd}
        >
          Add Achievement
        </Button>
      )}
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
