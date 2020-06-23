import { Button, Modal } from "antd";
import React, { useState } from "react";
import professionIcon from "./img/professionIcon.svg";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIconBlue.svg";
import businessIcon from "./img/professionIcon/businessIcon.svg";
import employeeIcon from "./img/professionIcon/employeeIcon.svg";
import freeLancerIcon from "./img/professionIcon/freeLancerIcon.svg";
import graduateIcon from "./img/professionIcon/graduateIcon.svg";
import houseWifeIcon from "./img/professionIcon/houseWifeIcon.svg";
import studentIcon from "./img/professionIcon/studentIcon.svg";
import { arrayValidation } from "../../validation/validation";
import DataLayout from "../../common/profileOrResumeLayout";

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

  const content = (
    <div className="all-user-data-content">
      {arrayValidation(skills1) && (
        <div className="user-data-content-msg-block">
          {skills1.map((skill, i) => (
            <div className="user-data-content-msg profession"  key={i}>
              {skill}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <DataLayout
        img={<img src={professionIcon} alt="" className="user-data-img" />}
        head="Profession"
        icon={
          <img
            src={!arrayValidation(skills1) ? addIcon : editIcon}
            alt=""
            onClick={() => setIsModalVisible(true)}
            className="user-data-icon"
          />
        }
        content={content}
        isData={arrayValidation(skills1)}
      />
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
    </>
  );
}
