import { Button, Modal } from "antd";
import React, { useState } from "react";
import four from "./img/(4).svg";
import addIcon from "./img/addIcon.svg";
import businessIcon from "./img/professionIcon/businessIcon.svg";
import employeeIcon from "./img/professionIcon/employeeIcon.svg";
import freeLancerIcon from "./img/professionIcon/freeLancerIcon.svg";
import graduateIcon from "./img/professionIcon/graduateIcon.svg";
import houseWifeIcon from "./img/professionIcon/houseWifeIcon.svg";
import studentIcon from "./img/professionIcon/studentIcon.svg";
import { arrayValidation } from "../../validation/validation";

const professionImg = [
  { icon: studentIcon, text: "Student" },
  { icon: freeLancerIcon, text: "Freelancer" },
  { icon: houseWifeIcon, text: "Stay at Home Mom" },
  { icon: employeeIcon, text: "Employee" },
  { icon: businessIcon, text: "Business" },
  { icon: graduateIcon, text: "Recent Graduate" },
];
export default function Profession() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const submitHandler = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSkillButton = () => {
    setIsModalVisible(true);
  };

  const [skills1, setSkills1] = useState([]);
  const selectHandler = (val) => {
    if (skills1 && !skills1.includes(val)) {
      setSkills1([...skills1, val]);
    } else {
      const index = skills1 && skills1.indexOf(val);
      if (index > -1) {
        setSkills1(skills1.filter((el) => el !== val));
      }
      console.log("already there");
    }
  };
  return (
    <div className="skill-of-avatar-block">
      <div className="skill-of-avatar-content-block">
        <div className="icon-heading">
          <img className="skill-of-avatar-img" src={four} alt=""></img>
          <div className="skill-of-avatar-content">
            <h2>Profession</h2>
            {arrayValidation(skills1) && (
              <div className="skill-list">
                {skills1.map((el, i) => (
                  <div className="single-skill" key={i}>
                    {" "}
                    {el}{" "}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <img
          src={addIcon}
          alt=""
          onClick={handleSkillButton}
          style={{ alignSelf: "baseline", cursor: "pointer" }}
        />
      </div>
      <Modal
        width={634}
        title="Add Profession"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="add-skill-modal"
      >
        <div className="add-skill-main-block">
          {professionImg.map((image, index) => (
            <div
              onClick={() => selectHandler(image.text)}
              key={index}
              className="add-skill-block"
              style={{
                width: 150,
                height: 132,
                border:
                  skills1 && skills1.includes(image.text)
                    ? "2px solid #444584"
                    : "2px solid #ccc",
              }}
            >
              <img src={image.icon} alt="No Img"></img>
              <div className="add-skill-text" style={{ marginTop: 20 }}>
                {image.text}
              </div>
            </div>
          ))}
        </div>
        <div className="submit-btn-block">
          <Button
            shape="round"
            onClick={submitHandler}
            htmlType="submit"
            className="submit-btn"
          >
            SAVE
          </Button>
        </div>
      </Modal>
    </div>
  );
}
