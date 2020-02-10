import React,{useState} from "react";
import {Button,Modal} from "antd"
import skillIcon from "./img/skillIcon.svg"

const Skill = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSkillButton = () => {
    setIsModalVisible(true);
  };
  return(
    <div className="skill-block-one">
    <div className="skill-block-two">
      <img src={skillIcon} alt="" className="skill-block-two-icon"></img>
      <h2 className="skill-block-two-heading">Skills</h2>
    </div>
    <Button
      // type="primary"
      shape="round"
      className="skill-block-one-button"
      onClick={handleSkillButton}
    >
      Add Skill
    </Button>
    <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        

      </Modal>
  </div>
  )
};

export default Skill;