import { Button, Modal } from "antd";
import React, { useState } from "react";
import DataLayout from "../../common/profileOrResumeLayout";
import addIcon from "./img/addIcon.svg";
import editIcon from "./img/editIconBlue.svg";
import professionIcon from "./img/professionIcon.svg";
import businessIcon from "./img/professionIcon/businessIcon.svg";
import employeeIcon from "./img/professionIcon/employeeIcon.svg";
import freeLancerIcon from "./img/professionIcon/freeLancerIcon.svg";
import graduateIcon from "./img/professionIcon/graduateIcon.svg";
import houseWifeIcon from "./img/professionIcon/houseWifeIcon.svg";
import studentIcon from "./img/professionIcon/studentIcon.svg";
import modalCloseIcon from "../../../assets/img/modalCloseIcon.svg";
import { Element, scroller } from "react-scroll";
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
  const scrollToElement = () => {
    scroller.scrollTo("scroll-to-profession", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    });
  };
  const submitHandler = () => {
    setIsModalVisible(false);
    scrollToElement();
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    scrollToElement();
  };

  const [skills1, setSkills1] = useState();
  const selectHandler = (val) => {
    setSkills1(val);
  };

  const content = (
    <div className="all-user-data-content">
      {!!skills1 && (
        <div className="user-data-content-msg-block">
          <div className="user-data-content-msg profession">{skills1}</div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {" "}
      <Element name="scroll-to-profession" className="element">
        <DataLayout
          img={<img src={professionIcon} alt="" className="user-data-img" />}
          head="Profession"
          icon={
            <img
              src={!skills1 ? addIcon : editIcon}
              alt=""
              onClick={() => setIsModalVisible(true)}
              className="user-data-icon"
            />
          }
          content={content}
          isData={!!skills1}
        />{" "}
      </Element>
      <Modal
        width={634}
        title="Add Profession"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="add-skill-modal"
        closeIcon={<img src={modalCloseIcon} alt="close" className="" />}
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
